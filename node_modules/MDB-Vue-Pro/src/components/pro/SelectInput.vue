<template>
  <input type="text" ref="selectInput" readOnly :value="text" :class="className" /> 
</template>

<script>
import classNames from 'classnames';

export default {
  name: 'SelectInput',
  props: {
    text: {
      type: [String, Array]
    },
    classes: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'select-dropdown',
        this.classes
      );
    }
  }
};
</script>

<style scoped>

</style>
