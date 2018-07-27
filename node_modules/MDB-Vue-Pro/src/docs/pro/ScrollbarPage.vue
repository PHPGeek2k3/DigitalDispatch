<template>
  <container class="mt-5 d-flex justify-content-center">
    <Scrollbar class="img-wrapper" :wheelSpeed="0.3">
      <div class="img">
      </div>
    </Scrollbar>
  </container>
</template>

<script>
import { Container, Scrollbar } from 'mdbvue';

export default {
  name: 'ScrollbarPage',
  components: {
    Container,
    Scrollbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-wrapper {
  position: relative;
  width: 480px;
  height: 320px;
  margin: auto;
}

.img-wrapper .img {
  position: relative;
  background-image: url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(33).jpg');
  background-size: cover;
  width: 1280px;
  height: 720px;
}
</style>
