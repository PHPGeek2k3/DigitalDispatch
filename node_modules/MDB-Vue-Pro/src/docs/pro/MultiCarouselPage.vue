<template>
  <container class="mt-5">
    <carousel :interval="8000" @defineInterval="handleIntervalChange" multi>
      <carousel-navigation top @changeSlide="handleChangeSlide"></carousel-navigation>
      <carousel-indicators>
        <carousel-indicator :index="0" :class="{active: show[0]}" @changeSlide="handleChangeSlide"></carousel-indicator>
        <carousel-indicator :index="1" :class="{active: show[1]}" @changeSlide="handleChangeSlide"></carousel-indicator>
        <carousel-indicator :index="2" :class="{active: show[2]}" @changeSlide="handleChangeSlide"></carousel-indicator>
      </carousel-indicators>
      <carousel-inner>
        <carousel-item :class="{active: show[0]}">
          <row>
            <column md="4">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
            <column md="4" class="clearfix d-none d-md-block">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
            <column md="4" class="clearfix d-none d-md-block">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
          </row>
        </carousel-item>
        <carousel-item :class="{active: show[1]}">
          <row>
            <column md="4">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
            <column md="4" class="clearfix d-none d-md-block">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
            <column md="4" class="clearfix d-none d-md-block">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
          </row>
        </carousel-item>
        <carousel-item :class="{active: show[2]}">
          <row>
            <column md="4">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
            <column md="4" class="clearfix d-none d-md-block">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
            <column md="4" class="clearfix d-none d-md-block">
              <card class="mb-2">
                <card-img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(51).jpg" alt="Card image cap" waves></card-img>
                <card-body>
                  <card-title>Card title</card-title>
                  <card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</card-text>
                  <btn color="primary">Button</btn>
                </card-body>
              </card>
            </column>
          </row>
        </carousel-item>
      </carousel-inner>
    </carousel>
  </container>
</template>

<script>
import { Carousel, CarouselIndicators, CarouselIndicator, CarouselInner, CarouselItem, CarouselNavigation, CarouselCaption, Container, Row, Column, Card, CardImg, CardBody, CardTitle, CardText, Btn } from 'mdbvue';

export default {
  name: 'CarouselPage',
  components: {
    Carousel,
    CarouselIndicators,
    CarouselIndicator,
    CarouselInner,
    CarouselItem,
    CarouselNavigation,
    CarouselCaption,
    Container,
    Row,
    Column,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Btn
  },
  data() {
    return {
      page: 0,
      items: '',
      interval: 10000,
      show: { 0: true, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false, 8: false, 9: false }
    };
  },
  methods: {
    slidePage(target) {
      if (target === "next") {
        if (this.page < this.items) {
          this.show[this.page] = false;
          this.page++;
          this.show[this.page] = true;
        } else {
          this.show[this.page] = false;
          this.page = 0;
          this.show[this.page] = true;
        }
      } else if (target === "prev") {
        if (this.page == 0) {
          this.show[this.page] = false;
          this.page = this.items;
          this.show[this.page] = true;
        } else {
          this.show[this.page] = false;
          this.page--;
          this.show[this.page] = true;
        }
      } else {
        this.show[this.page] = false;
        this.page = target;
        this.show[this.page] = true;
      }
    },
    autoSlide() {
      this.slide = setInterval(() => {
        this.slidePage('next');
      }, this.interval);
    },
    handleChangeSlide(showSlide) {
      this.slidePage(showSlide.slideIndex);
      clearInterval(this.slide);
      this.autoSlide();
    },
    handleIntervalChange(defineInterval) {
      this.interval = defineInterval.newInterval;
    }
  },
  mounted() {
    this.items = this.$el.querySelectorAll('.carousel-item').length - 1;
    this.autoSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel,
.carousel-item,
.carousel-item.active {
  height: 100%;
}

.carousel-inner {
  position: relative;
  overflow: hidden;
}

.carousel-item {
  display: block !important;
  visibility: hidden;
  height: 0;
  opacity: 0;
  transition: transform 0ms ease-in-out, opacity .6s ease-in;
  transform: translate3d(0, 0, 0) !important;
}

.carousel-item.active {
  opacity: 1;
  left: auto;
  height: auto;
  visibility: visible;
  transform: translate3d(0, 0, 0) !important;
}
</style>
