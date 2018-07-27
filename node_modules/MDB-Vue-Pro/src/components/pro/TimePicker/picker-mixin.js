// Components
import Picker from './Picker';

// Mixins
import Colorable from './colorable';

export default {
  name: 'picker',

  mixins: [
    Colorable,
    // Themeable
  ],

  props: {
    fullWidth: Boolean,
    headerColor: String,
    landscape: Boolean,
    noTitle: Boolean,
    width: {
      type: [Number, String],
      default: 290,
      validator: value => parseInt(value) > 0
    }
  },

  methods: {
    genPickerTitle () {
      // empty for now
    },
    genPickerBody () {
      // empty for now
    },
    genPickerActionsSlot () {
      return this.$scopedSlots.default ? this.$scopedSlots.default({
        save: this.save,
        cancel: this.cancel
      }) : this.$slots.default;
    },
    genPicker (staticClass) {
      return this.$createElement(Picker, {
        staticClass,
        class: this.fullWidth ? ['picker--full-width'] : [],
        props: {
          color: this.headerColor || this.color,
          dark: this.dark,
          fullWidth: this.fullWidth,
          landscape: this.landscape,
          light: this.light,
          width: this.width
        }
      }, [
        this.noTitle ? null : this.genPickerTitle(),
        this.genPickerBody(),
        this.$createElement('template', { slot: 'actions' }, [this.genPickerActionsSlot()])
      ]);
    }
  }
};
