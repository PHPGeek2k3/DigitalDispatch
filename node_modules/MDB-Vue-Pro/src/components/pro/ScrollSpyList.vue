<template>
  <ul :is="tag" :class="className">
    <slot></slot>
  </ul>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "ul"
    },
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'nav nav-tabs horizontal-spy',
        this.color ? this.color : false
      );
    }
  }
};
</script>

<style scoped>
</style>
