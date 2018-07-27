<template>
  <div :is="tag" :class="wrapperClasses" :style="wrapperStyles" :data-multiple="this.multiple">
    <span :class="caretClasses">▼</span>
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'SelectWrapper',
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    wrapperClass: {
      type: String
    },
    wrapperStyle: {
      type: String
    },
    caretClass: {
      type: String
    },
    caretStyle: {
      type: String
    }
  },
  computed: {
    wrapperClasses() {
      return classNames(
        'select-wrapper',
        this.color ? 'colorful-select dropdown-' + this.color : '',
        this.wrapperClass
      );
    },
    wrapperStyles() {
      return this.wrapperStyle;
    },
    caretClasses() {
      return classNames(
        'caret',
        this.disabled ? 'disabled' : '',
        this.caretClass
      );
    },
    caretStyles() {
      return this.caretStyle;
    }
  }
};
</script>

<style scoped>
</style>
