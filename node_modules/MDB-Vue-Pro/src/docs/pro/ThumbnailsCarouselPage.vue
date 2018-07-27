<template>
  <carousel :interval="8000" @defineInterval="handleIntervalChange" thumbnails>
    <carousel-inner>
      <carousel-item :class="{active: show[0]}" img src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide">
      </carousel-item>
      <carousel-item :class="{active: show[1]}" img src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide">
      </carousel-item>
      <carousel-item :class="{active: show[2]}" img src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide">
      </carousel-item>
    </carousel-inner>
    <carousel-navigation @changeSlide="handleChangeSlide"></carousel-navigation>
    <carousel-indicators>
      <carousel-indicator :index="0" :class="{active: show[0]}" @changeSlide="handleChangeSlide" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg" alt="first preview"></carousel-indicator>
      <carousel-indicator :index="1" :class="{active: show[1]}" @changeSlide="handleChangeSlide" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(121).jpg" alt="second preview"></carousel-indicator>
      <carousel-indicator :index="2" :class="{active: show[2]}" @changeSlide="handleChangeSlide" src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(31).jpg" alt="third preview"></carousel-indicator>
    </carousel-indicators>
  </carousel>
</template>

<script>
import { Carousel, CarouselIndicators, CarouselIndicator, CarouselInner, CarouselItem, CarouselNavigation, CarouselCaption, ViewWrapper, MdMask } from 'mdbvue';

export default {
  name: 'ThumbnailsCarouselPage',
  components: {
    Carousel,
    CarouselIndicators,
    CarouselIndicator,
    CarouselInner,
    CarouselItem,
    CarouselNavigation,
    CarouselCaption,
    ViewWrapper,
    MdMask
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
