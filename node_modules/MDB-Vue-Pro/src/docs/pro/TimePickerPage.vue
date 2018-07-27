<template>
<container class="ml-5 mt-5">
  <row>
    <column col="6">
      <time-picker color="teal" v-model="value" @change="changeTime"></time-picker>
    </column>
    <column col="6">
      <md-input id="input" type="text" label="Pick time" icon="clock-o" :value.sync="value"/>
    </column>
  </row>
</container>
</template>

<script>
import {  TimePicker, Container, Row, Column, MdInput } from 'mdbvue';

export default {
  name: 'TimePickerPage',
  data() {
    return {
      value: null,
      picker: null,
    };
  },
  components: {
    TimePicker,
    Container,
    MdInput,
    Row,
    Column
  },
  methods: {
    changeTime() {
      document.getElementById("input").focus();
      document.getElementById("input").blur();
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
