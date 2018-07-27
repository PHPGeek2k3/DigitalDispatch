import './title.css';
// Mixins
import PickerButton from './PickerButton';

// Utils
import  pad  from './pad';

export default {
  name: 'time-picker-title',

  mixins: [PickerButton],

  props: {
    ampm: Boolean,
    hour: Number,
    minute: Number,
    period: {
      type: String,
      validator: period => period === 'am' || period === 'pm'
    },
    selectingHour: Boolean
  },

  methods: {
    genTime () {
      let hour = this.hour;
      if (this.ampm) {
        hour = hour ? (((hour - 1) % 12) + 1) : 12;
      }

      const displayedHour = this.hour === null ? '--' : this.ampm ? hour : pad(hour);
      const displayedMinute = this.minute === null ? '--' : pad(this.minute);

      return this.$createElement('div', {
        'class': 'time-picker-title__time'
      }, [
        this.genPickerButton('selectingHour', true, displayedHour),
        this.$createElement('span', ':'),
        this.genPickerButton('selectingHour', false, displayedMinute)
      ]);
    },
    genAmPm () {
      return this.$createElement('div', {
        staticClass: 'time-picker-title__ampm'
      }, [
        this.genPickerButton('period', 'am', 'am'),
        this.genPickerButton('period', 'pm', 'pm')
      ]);
    }
  },

  render (h) {
    return h('div', {
      staticClass: 'time-picker-title'
    }, [
      this.genTime(),
      this.ampm ? this.genAmPm() : null
    ]);
  }
};
