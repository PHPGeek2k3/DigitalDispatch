<template>
  <div class="text-center mt-5">
    <h4 class="pb-2">Gradient buttons</h4>
    <btn gradient="peach" rounded>Peach gradient button</btn>
    <btn gradient="purple" rounded>Purple gradient button</btn>
    <btn gradient="blue" rounded>Blue gradient button</btn>
    <btn gradient="aqua" rounded>Aqua gradient button</btn>
    <h4 class="pt-5 pb-2">Rounded buttons</h4>
    <btn color="primary" rounded>Primary rounded button</btn>
    <btn color="default" rounded>Default rounded button</btn>
    <btn color="secondary" rounded>Secondary rounded button</btn>
    <btn color="success" rounded>Success rounded button</btn>
    <btn color="info" rounded>Info rounded button</btn>
    <btn color="warning" rounded>Warning rounded button</btn>
    <btn color="danger" rounded>Danger rounded button</btn>
    <h4 class="pt-5 pb-2">Rounded outline buttons</h4>
    <btn outline="primary" darkWaves rounded>Primary outline button</btn>
    <btn outline="default" darkWaves rounded>Default outline button</btn>
    <btn outline="secondary" darkWaves rounded>Secondary outline button</btn>
    <btn outline="success" darkWaves rounded>Success outline button</btn>
    <btn outline="info" darkWaves rounded>Info outline button</btn>
    <btn outline="warning" darkWaves rounded>Warning outline button</btn>
    <btn outline="danger" darkWaves rounded>Danger outline button</btn>
    <h4 class="pt-5 pb-2">Floating buttons</h4>
    <btn tag="a" gradient="purple" floating size="lg"><fa icon="bolt"/></btn>
    <btn tag="a" gradient="peach" floating><fa icon="leaf"/></btn>
    <btn tag="a" gradient="blue" floating size="sm"><fa icon="star"/></btn>
    <btn-fixed @mouseenter.native="hover" @mouseleave.native="hoverOut" icon="pencil" size="lg" :bottom="30" :right="25">
      <btn-fixed-item :show="show" color="red" icon="star"/>
      <btn-fixed-item :show="show" color="yellow" icon="user"/>
      <btn-fixed-item :show="show" color="green" icon="envelope"/>
      <btn-fixed-item :show="show" color="blue" icon="shopping-cart"/>
    </btn-fixed>
    <btn-fixed @click.native.prevent="pageUp" color="blue" icon="arrow-up" size="lg" :bottom="30" :right="105"/>
    <h4 class="pt-5 pb-2">Flat button</h4>
    <btn flat size="lg" darkWaves>Click me</btn>
    <h4 class="pt-5 pb-2">Toggle button</h4>
    <btn color="primary" @click.native="toggleActiveState" :active="active">Single Toggle</btn>
    <h4 class="pt-5 pb-2">Checkbox and radio buttons</h4>
    <btn-group>
      <btn color="primary" @click.native="toggleActiveState2" :active="active2">Checkbox 1 (pre-checked)</btn>
      <btn color="primary" @click.native="toggleActiveState3" :active="active3">Checkbox 2</btn>
      <btn color="primary" @click.native="toggleActiveState4" :active="active4">Checkbox 3</btn>
    </btn-group>
    <br/><br/>
    <btn-group>
      <btn color="primary" @click.native="toggleActiveState5" :active="active5">Radio 1 (preselected)</btn>
      <btn color="primary" @click.native="toggleActiveState6" :active="active6">Radio 2</btn>
      <btn color="primary" @click.native="toggleActiveState7" :active="active7">Radio 3</btn>
    </btn-group>
  </div>
</template>

<script>
import { Btn, BtnGroup, BtnFixed, BtnFixedItem, Fa } from 'mdbvue';

export default {
  data() {
    return {
      show: false,
      active: false,
      active2: true,
      active3: false,
      active4: false,
      active5: true,
      active6: false,
      active7: false
    };
  },
  name: 'ButtonPage',
  components: {
    Btn,
    BtnGroup,
    BtnFixed,
    BtnFixedItem,
    Fa
  },
  methods: {
    pageUp() {
      window.scroll({top: 0, left: 0, behavior: 'smooth'});
    },
    hover() {
      this.show = true;
    },
    hoverOut() {
      this.show = false;
    },
    toggleActiveState() {
      this.active = !this.active;
    },
    toggleActiveState2() {
      this.active2 = !this.active2;
    },
    toggleActiveState3() {
      this.active3 = !this.active3;
    },
    toggleActiveState4() {
      this.active4 = !this.active4;
    },
    toggleActiveState5() {
      this.active5 = true;
      this.active6 = false;
      this.active7 = false;
    },
    toggleActiveState6() {
      this.active5 = false;
      this.active6 = true;
      this.active7 = false;
    },
    toggleActiveState7() {
      this.active5 = false;
      this.active6 = false;
      this.active7 = true;
    }
  }
};
</script>

<style scoped>
</style>
