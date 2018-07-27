<template>
  <container class="mt-5">
    <h4 class="pb-2">Labels</h4>
    <progress-wrapper class="mt-2" :height="20">
      <progress-bar :value="25" color="danger">25%</progress-bar>
    </progress-wrapper>
    <progress-wrapper class="mt-2" :height="20">
      <progress-bar :value="50" color="warning">50%</progress-bar>
    </progress-wrapper>
    <progress-wrapper class="mt-2" :height="20">
      <progress-bar :value="75" color="success">75%</progress-bar>
    </progress-wrapper>
    <h4 class="pt-4 pb-2">Striped</h4>
    <progress-wrapper class="mt-2">
      <progress-bar :value="25" color="danger" striped />
    </progress-wrapper>
    <progress-wrapper class="mt-2">
      <progress-bar :value="50" color="warning" striped />
    </progress-wrapper>
    <progress-wrapper class="mt-2">
      <progress-bar :value="75" color="success" striped />
    </progress-wrapper>    
    <h4 class="pt-4 pb-2">Animated stripes</h4>
    <progress-wrapper class="mt-2">
      <progress-bar :value="25" color="danger" striped animated />
    </progress-wrapper>
    <progress-wrapper class="mt-2">
      <progress-bar :value="50" color="warning" striped animated />
    </progress-wrapper>
    <progress-wrapper class="mt-2">
      <progress-bar :value="75" color="success" striped animated />
    </progress-wrapper>  
    <h4 class="pt-4 pb-2">Preloaders</h4>  
    <progress-wrapper class="mt-2" color="primary-color-dark">
      <progress-bar indeterminate />
    </progress-wrapper>     
    <h4 class="pt-4 pb-2">Circles</h4>  
    <row>
      <column sm="4">
        <preloader big />
      </column>
      <column sm="4">
       <preloader color="red" />
      </column>
      <column sm="4">
       <preloader small color="yellow" />
      </column>
    </row>
    <h4 class="pt-4 pb-2">Crazy circles</h4>  
    <row>
      <column sm="4">
        <preloader big crazy />
      </column>
      <column sm="4">
       <preloader color="red" crazy />
      </column>
      <column sm="4">
       <preloader small color="yellow" crazy />
      </column>
    </row>
    <row>
      <column sm="4">
        <h4 class="pt-4 pb-2">Multicolor</h4>  
        <preloader multicolor big />
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, ProgressWrapper, ProgressBar, Preloader } from 'mdbvue';

export default {
  name: 'ProgressBarsProPage',
  components: {
    Container,
    Row,
    Column,
    ProgressWrapper,
    ProgressBar,
    Preloader
  }
};
</script>

<style scoped>
</style>
