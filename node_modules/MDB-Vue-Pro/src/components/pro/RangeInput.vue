<template>
  <form class="range-field">
    <input :class="inputClass" :min="min" :max="max" :value="localValue" type="range" v-on:input="rangeChange($event)" @focus="rangeFocus" @mouseleave="rangeMouseLeave" ref="input"/>
    <span  v-if="thumbActive" :class="thumbClass" :style="thumbStyle">
      <span class="value">{{localValue}}</span>
    </span>
  </form>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    className: {
      type: String,
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      localValue: false,
      leftPosition: false,
      thumbActive: false,
      thumbHeight: 0,
      thumbWidth: 0,
      thumbTop: '10px',
      thumbMarginLeft: '-6px',
      steps: this.max-this.min, 
    };
  },
  computed: {
    inputClass() {
      return classNames(
        this.className
      );
    },
    thumbClass() {
      return classNames(
        'thumb',
        this.thumbActive && 'active'
      );
    },
    thumbStyle() {
      return {left: this.leftPosition+'px', height: this.thumbHeight, width: this.thumbWidth, top: this.thumbTop, marginLeft: this.thumbMarginLeft};
    }
  },
  mounted() {
    this.localValue = this.value;

  },
  methods: {
    rangeChange(e) {
      // change value:
      let newValue = e.target.value;
      this.localValue = newValue;
      let newRelativeGain = newValue-this.min;

      // operationalize the input
      let input = this.$refs.input;
      let inputWidth = input.offsetWidth;
      this.StepLength = inputWidth / this.steps;

      // thumb position offset 
      let thumbOffset = 0;
      let offsetAmmount = 15;
      let distanceFromMiddle = newRelativeGain - (this.steps/2);
      thumbOffset = (distanceFromMiddle/this.steps) * offsetAmmount;

      this.leftPosition = (this.StepLength*newRelativeGain) - thumbOffset;
    },
    rangeFocus() {
      this.thumbActive = true;
      this.thumbHeight = '30px';
      this.thumbWidth = '30px';
      this.thumbTop = '-20px';
      this.thumbMarginLeft = '-15px';
    },
    rangeMouseLeave() {
      let input = this.$refs.input;
      input.blur();
      this.thumbActive = false;
      this.thumbHeight = 0;
      this.thumbWidth = 0;
      this.thumbTop = '10px';
      this.thumbMarginLeft = '-6px';
    },
  }
};
</script>

<style scoped>

.thumb {
  transition: top .2s, height .2s, width .2s, margin-left .2s;
}

input[type="range"] {
  -webkit-appearance: none;
}

/* thumb */

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: #4285f4;
  transform-origin: 50% 50%;
  margin: -5px 0 0 0;
  transition: 0.3s; }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #ccc; }
  input[type=range]::-moz-range-track {
    /*required for proper track sizing in FF*/
    height: 3px;
    background: #c2c0c2;
    border: none; }
  input[type=range]::-moz-range-thumb {
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #4285f4;
    margin-top: -5px; }
  input[type=range]:-moz-focusring {
    /*hide the outline behind the border*/
    outline: 1px solid #ffffff;
    outline-offset: -1px; }
  input[type=range]:focus::-moz-range-track {
    background: #c2c0c2; }
  input[type=range]::-ms-track {
    height: 3px;
    background: transparent;
    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    border-color: transparent;
    /*leave room for the larger thumb to overflow with a transparent border */
    border-width: 6px 0;
    color: transparent;
    /*remove default tick marks*/ }
  input[type=range]::-ms-fill-lower {
    background: #c2c0c2; }
  input[type=range]::-ms-fill-upper {
    background: #c2c0c2; }
  input[type=range]::-ms-thumb {
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #4285f4; }
  input[type=range]:focus::-ms-fill-lower {
    background: #c2c0c2; }
  input[type=range]:focus::-ms-fill-upper {
    background: #c2c0c2; }
</style>
