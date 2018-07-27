<template>
  <div>
    <container class="mt-5">
      <row class="mdb-lightbox no-margin"> 
        <column md="4" @click.native="show(0)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(1)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(2)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(3)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(4)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(5)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(6)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(7)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg" class="img-fluid" alt="">
          </figure>
        </column>
        <column md="4" @click.native="show(8)">
          <figure>
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(133).jpg" class="img-fluid" alt="">
          </figure>
        </column>
      </row>
    </container>
    <Lightbox
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></Lightbox>
  </div>
</template>

<script>
import { Lightbox, Container, Row, Column } from 'mdbvue';

export default {
  components: {
    Lightbox,
    Container,
    Row,
    Column
  },
  data() {
    return {
      imgs: [
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
      ],        
      visible: false,
      index: 0 
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>

</style>
