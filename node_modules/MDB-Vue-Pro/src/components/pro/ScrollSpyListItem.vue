<template>
  <li :is="tag" class="nav-item">
    <a :class="className" href="#" role="tab">
      <slot></slot>
    </a>
  </li>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'nav-link',
        this.active && 'active'
      );
    }
  }
};
</script>

<style scoped>
</style>
