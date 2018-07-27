<template>
  <div :is="tag" :class="className" v-bind="$attrs">
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
    wrapperClass: {
      type: String
    },
    round: {
      type: Boolean
    },
    circle: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'avatar',
        this.round && 'rounded',
        this.circle && 'rounded-circle',
        this.wrapperClass
      );
    }
  }
};
</script>

<style scoped>
</style>
