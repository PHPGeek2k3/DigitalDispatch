<template>
  <container class="mt-5">
    <h4>Minimalist charts</h4>
    <row>
      <column md="4">
        <div class="d-flex justify-content-center">
          <mini-chart :value="value" color="#4CAF50">
            {{value}}%
          </mini-chart>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <badge color="green">Sales <fa icon="arrow-circle-up"/></badge>
        </div>
      </column>
      <column md="4">
        <div class="d-flex justify-content-center">
          <mini-chart :value="value2" color="#F44336">
            {{value2}}%
          </mini-chart>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <badge color="red">ROI <fa icon="arrow-circle-down"/></badge>
        </div>
      </column>
      <column md="4">
        <div class="d-flex justify-content-center">
          <mini-chart :value="value3" color="#9E9E9E">
            {{value3}}%
          </mini-chart>
        </div>
        <div class="d-flex justify-content-center mt-3">
          <badge color="grey">Conversion <fa icon="minus-square"/></badge>
        </div>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, MiniChart, Badge, Fa } from 'mdbvue';

export default {
  name: 'ChartPage',
  components: {
    Container,
    Row,
    Column,
    MiniChart,
    Badge,
    Fa
  },
  data() {
    return {
      value: 56,
      value2: 76,
      value3: 100
    };
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
