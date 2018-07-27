<template>
  <li :is="tag" :class="className">
    <a :class="anchorClass" href="#" role="tab">
      <fa v-if="icon" :icon="icon" />
      <slot></slot>
    </a>
  </li>
</template>

<script>
import classNames from 'classnames';
import Fa from '../Fa.vue';

export default {
  components: {
    Fa
  },
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'nav-item'
      );
    },
    anchorClass() {
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
