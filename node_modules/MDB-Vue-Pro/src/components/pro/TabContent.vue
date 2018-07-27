<template>
  <div :is="tag" :class="className">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'tab-content',
        this.vertical && 'vertical'
      );
    }
  }
};
</script>

<style scoped>
</style>
