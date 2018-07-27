// Components
import TimePickerTitle from './TimePickerTitle';
import TimePickerClock from './TimePickerClock';

// Mixins
import Picker from './picker-mixin';

// Utils
import { createRange } from './helpers';
import pad from './pad';

const rangeHours24 = createRange(24);
const rangeHours12am = createRange(12);
const rangeHours12pm = rangeHours12am.map(v => v + 12);
const rangeMinutes = createRange(60);

export default {
  name: 'time-picker',

  mixins: [Picker],

  data () {
    return {
      inputHour: null,
      inputMinute: null,
      period: 'am',
      selectingHour: true
    };
  },

  props: {
    allowedHours: Function,
    allowedMinutes: Function,
    format: {
      type: String,
      default: 'ampm',
      validator (val) {
        return ['ampm', '24hr'].includes(val);
      }
    },
    min: String,
    max: String,
    scrollable: Boolean,
    value: null
  },

  computed: {
    isAllowedHourCb () {
      if (!this.min && !this.max) return this.allowedHours;

      const minHour = this.min ? this.min.split(':')[0] : 0;
      const maxHour = this.max ? this.max.split(':')[0] : 23;

      return val => {
        return val >= Number(minHour) * 1 &&
          val <= Number(maxHour) * 1 &&
          (!this.allowedHours || this.allowedHours(val));
      };
    },
    isAllowedMinuteCb () {
      const isHourAllowed = !this.allowedHours || this.allowedHours(this.inputHour);
      if (!this.min && !this.max) {
        return isHourAllowed ? this.allowedMinutes : () => false;
      }

      const [minHour, minMinute] = this.min ? this.min.split(':') : [0, 0];
      const [maxHour, maxMinute] = this.max ? this.max.split(':') : [23, 59];
      const minTime = (Number(minHour) * 60) + (Number(minMinute) * 1);
      const maxTime = (Number(maxHour) * 60) + (Number(maxMinute) * 1);

      return val => {
        const time = (60 * this.inputHour) + val;
        return time >= minTime &&
          time <= maxTime &&
          isHourAllowed &&
          (!this.allowedMinutes || this.allowedMinutes(val));
      };
    },
    isAmPm () {
      return this.format === 'ampm';
    }
  },

  watch: {
    value: 'setInputData'
  },

  methods: {
    emitValue () {
      if (this.inputHour !== null && this.inputMinute !== null) {
        this.$emit('input', `${pad(this.inputHour)}:${pad(this.inputMinute)}`);
      }
    },
    setPeriod (period) {
      this.period = period;
      if (this.inputHour !== null) {
        const newHour = this.inputHour + (period === 'am' ? -12 : 12);
        this.inputHour = this.firstAllowed('hour', newHour);
        this.emitValue();
      }
    },
    setInputData (value) {
      if (value === null) {
        this.inputHour = null;
        this.inputMinute = null;
        return;
      }

      if (value instanceof Date) {
        this.inputHour = value.getHours();
        this.inputMinute = value.getMinutes();
      } else {
        const [, hour, minute, , period] = value.trim().toLowerCase()
          .match(/^(\d+):(\d+)(:\d+)?([ap]m)?$/, '') || [];

        this.inputHour = period ? this.convert12to24(parseInt(hour), period) : parseInt(hour);
        this.inputMinute = parseInt(minute);
      }

      this.period = this.inputHour < 12 ? 'am' : 'pm';
    },
    convert24to12 (hour) {
      return hour ? (((hour - 1) % 12) + 1) : 12;
    },
    convert12to24 (hour, period) {
      return (hour % 12) + (period === 'pm' ? 12 : 0);
    },
    onInput (value) {
      if (this.selectingHour) {
        this.inputHour = this.isAmPm ? this.convert12to24(value, this.period) : value;
      } else {
        this.inputMinute = value;
      }
      this.emitValue();
    },
    onChange () {
      if (!this.selectingHour) {
        this.$emit('change', this.value);
      }

      this.selectingHour = !this.selectingHour;
    },
    firstAllowed (type, value) {
      const allowedFn = type === 'hour' ? this.isAllowedHourCb : this.isAllowedMinuteCb;
      if (!allowedFn) return value;

      // TO_DO: clean up
      const range = type === 'minute' ? rangeMinutes :
        (this.isAmPm ? (value < 12 ? rangeHours12am : rangeHours12pm) : rangeHours24);
      const first = range.find(v => allowedFn(((v + value) % range.length) + range[0]));
      return (((first || 0) + value) % range.length) + range[0];
    },
    genClock () {
      return this.$createElement(TimePickerClock, {
        props: {
          allowedValues: this.selectingHour ? this.isAllowedHourCb : this.isAllowedMinuteCb,
          color: this.color,
          dark: this.dark,
          double: this.selectingHour && !this.isAmPm,
          format: this.selectingHour ? (this.isAmPm ? this.convert24to12 : val => val) : val => pad(val, 2),
          max: this.selectingHour ? (this.isAmPm && this.period === 'am' ? 11 : 23) : 59,
          min: this.selectingHour && this.isAmPm && this.period === 'pm' ? 12 : 0,
          scrollable: this.scrollable,
          size: this.width - ((!this.fullWidth && this.landscape) ? 80 : 20),
          step: this.selectingHour ? 1 : 5,
          value: this.selectingHour ? this.inputHour : this.inputMinute
        },
        on: {
          input: this.onInput,
          change: this.onChange
        },
        ref: 'clock'
      });
    },
    genPickerBody () {
      return this.$createElement('div', {
        staticClass: 'time-picker-clock__container',
        style: {
          width: `${this.width}px`,
          height: `${this.width - ((!this.fullWidth && this.landscape) ? 60 : 0)}px`
        },
        key: this.selectingHour
      }, [this.genClock()]);
    },
    genPickerTitle () {
      return this.$createElement(TimePickerTitle, {
        props: {
          ampm: this.isAmPm,
          hour: this.inputHour,
          minute: this.inputMinute,
          period: this.period,
          selectingHour: this.selectingHour
        },
        on: {
          'update:selectingHour': value => (this.selectingHour = value),
          'update:period': this.setPeriod
        },
        ref: 'title',
        slot: 'title'
      });
    }
  },

  mounted () {
    this.setInputData(this.value);
  },

  render () {
    return this.genPicker('picker--time');
  }
};
