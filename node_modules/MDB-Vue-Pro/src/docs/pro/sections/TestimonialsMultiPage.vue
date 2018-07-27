<template>
  <container>
    <section class="text-center my-5">
      <carousel :interval="8000" @defineInterval="handleIntervalChange" multi>
        <carousel-navigation top @changeSlide="handleChangeSlide"></carousel-navigation>
        <carousel-indicators>
          <carousel-indicator :index="0" :class="{active: show[0]}" @changeSlide="handleChangeSlide"></carousel-indicator>
          <carousel-indicator :index="1" :class="{active: show[1]}" @changeSlide="handleChangeSlide"></carousel-indicator>
          <carousel-indicator :index="2" :class="{active: show[2]}" @changeSlide="handleChangeSlide"></carousel-indicator>
        </carousel-indicators>
        <carousel-inner>
          <row>
            <carousel-item :class="{active: show[0]}">
              <column md="4">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Anna Deynah</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Designer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star-half-full"> </fa>
                  </div>
                </testimonial>
              </column>
              <column md="4" class="clearfix d-none d-md-block">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">John Doe</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Developer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                  </div>
                </testimonial>
              </column>
              <column md="4" class="clearfix d-none d-md-block">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Abbey Clark</h4>
                  <h6 class="blue-text font-weight-bold my-3">Photographer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star-o"> </fa>
                  </div>
                </testimonial>
              </column>
            </carousel-item>
            <carousel-item :class="{active: show[1]}">
              <column md="4">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Blake Dabney</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Designer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star-half-full"> </fa>
                  </div>
                </testimonial>
              </column>
              <column md="4" class="clearfix d-none d-md-block">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Andrea Clay</h4>
                  <h6 class="blue-text font-weight-bold my-3">Front-end developer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                  </div>
                </testimonial>
              </column>
              <column md="4" class="clearfix d-none d-md-block">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Cami Gosse</h4>
                  <h6 class="blue-text font-weight-bold my-3">Phtographer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star-o"> </fa>
                  </div>
                </testimonial>
              </column>
            </carousel-item>
            <carousel-item :class="{active: show[2]}">
              <column md="4">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Bobby Haley</h4>
                  <h6 class="blue-text font-weight-bold my-3">Web Developer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                  </div>
                </testimonial>
              </column>
              <column md="4" class="clearfix d-none d-md-block">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Elisa Janson</h4>
                  <h6 class="blue-text font-weight-bold my-3">Marketer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star-half-full"> </fa>
                  </div>
                </testimonial>
              </column>
              <column md="4" class="clearfix d-none d-md-block">
                <testimonial>
                  <avatar class="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid"/>
                  </avatar>
                  <h4 class="font-weight-bold mt-4">Rob Jacobs</h4>
                  <h6 class="blue-text font-weight-bold my-3">Front-end developer</h6>
                  <p class="font-weight-normal"><fa icon="quote-left" class="pr-2"></fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis laboriosam.</p>
                  <div class="grey-text">
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star"> </fa>
                    <fa icon="star-o"> </fa>
                  </div>
                </testimonial>
              </column>
            </carousel-item>
          </row>
        </carousel-inner>
      </carousel>
    </section>
  </container>
</template>

<script>
import { Carousel, CarouselIndicators, CarouselIndicator, CarouselInner, CarouselItem, CarouselNavigation, CarouselCaption, Container, Row, Column, Testimonial, Avatar, Fa } from 'mdbvue';

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
    Testimonial, 
    Avatar, 
    Fa
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
