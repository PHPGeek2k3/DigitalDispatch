<template>
  <div :is="tag" :class="className" role="tabpanel">
    <p>
      <slot></slot>
    </p>
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
    classes: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'tab-pane active collapse-item',
        this.classes
      );
    }
  }
};
</script>

<style scoped>
.collapse-item {
  overflow: hidden;
}
</style>
