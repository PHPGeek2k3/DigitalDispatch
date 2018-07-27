<template>
  <container>
    <section class="text-center my-5">
      <h2 class="h1-responsive font-weight-bold my-5">Testimonials v.1</h2>
      <p class="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <Row>
        <column lg="4" md="12" class="mb-lg-0 mb-4">
          <card testimonial>
            <card-up color="info"></card-up>
            <avatar class="mx-auto white">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" class="rounded-circle img-fluid"/>
            </avatar>
            <card-body>
              <h4 class="font-weight-bold mb-4">John Doe</h4>
              <hr/>
              <p class="dark-grey-text mt-4"><fa icon="quote-left" class="pr-2"></fa>Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.</p>
            </card-body>
          </card>
        </column>
        <column lg="4" md="6" class="mb-lg-0 mb-4">
          <card testimonial>
            <card-up gradient="blue"></card-up>
            <avatar class="mx-auto white">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-fluid"/>
            </avatar>
            <card-body>
              <h4 class="font-weight-bold mb-4">Anna Aston</h4>
              <hr/>
              <p class="dark-grey-text mt-4"><i class="fa fa-quote-left pr-2"></i>Neque cupiditate assumenda in maiores repudiandae mollitia architecto.</p>
            </card-body>
          </card>
        </column>
        <column lg="4" md="6" class="mb-lg-0 mb-4">
          <card testimonial>
            <card-up class="indigo"></card-up>
            <avatar class="mx-auto white">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid"/>
            </avatar>
            <card-body>
              <h4 class="font-weight-bold mb-4">Maria Kate</h4>
              <hr/>
              <p class="dark-grey-text mt-4"><i class="fa fa-quote-left pr-2"></i>Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.</p>
            </card-body>
          </card>
        </column>
      </Row>
    </section>
    <section class="text-center my-5">

      <h2 class="h1-responsive font-weight-bold my-5">Testimonials v.2</h2>

      <carousel testimonial fade :interval="interval" class="no-flex">
        <carousel-inner>
          <carousel-item :class="{active: show[0]}">
            <testimonial>
              <avatar class="mx-auto mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" class="rounded-circle img-fluid" alt="First sample avatar image"/>
              </avatar>
              <p>
                <fa icon="quote-left"></fa> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
              </p>
              <h4 class="font-weight-bold">Anna Deynah</h4>
              <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star-half-full" class="blue-text"> </fa>
            </testimonial>
          </carousel-item>
          <carousel-item :class="{active: show[1]}">
            <testimonial>
              <avatar class="mx-auto">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" class="rounded-circle img-fluid" alt="Second sample avatar image"/>
              </avatar>
              <p>
                <fa icon="quote-left"></fa> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore. 
              </p>
              <h4 class="font-weight-bold">Maria Kate</h4>
              <h6 class="font-weight-bold my-3">Photographer at Studio LA</h6>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
            </testimonial>
          </carousel-item>
          <carousel-item :class="{active: show[2]}">
            <testimonial>
              <avatar class="mx-auto">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle img-fluid" alt="Third sample avatar image"/>
              </avatar>
              <p>
                <fa icon="quote-left"></fa> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <h4 class="font-weight-bold">John Doe</h4>
              <h6 class="font-weight-bold my-3">Front-end Developer in NY</h6>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star" class="blue-text"> </fa>
              <fa icon="star-o" class="blue-text"> </fa>
            </testimonial>
          </carousel-item>
        </carousel-inner>
        <testimonial-navigation @changeSlide="handleChangeSlide"></testimonial-navigation>
      </carousel>
    </section>

    <section class="team-section text-center my-5">
      <h2 class="h1-responsive font-weight-bold my-5">Testimonials v.3</h2>
      <p class="dark-grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

      <row class="text-center">
        <column md="4" class="mb-md-0 mb-5">
          <testimonial>
            <avatar class="mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid"/>
            </avatar>
            <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
            <h6 class="font-weight-bold blue-text my-3">Web Designer</h6>
            <p class="font-weight-normal dark-grey-text">
              <fa class="fa fa-quote-left pr-2"></fa>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
            <div class="orange-text">
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star-half-full"> </fa>
            </div>
          </testimonial>
        </column>
        <column md="4" class="mb-md-0 mb-5">
          <testimonial>
            <avatar class="mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid"/>
            </avatar>
            <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
            <h6 class="font-weight-bold blue-text my-3">Web Developer</h6>
            <p class="font-weight-normal dark-grey-text">
              <fa class="fa fa-quote-left pr-2"></fa>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
            <div class="orange-text">
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
            </div>
          </testimonial>
        </column>
        <column md="4">
          <testimonial>
            <avatar class="mx-auto">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid"/>
            </avatar>
            <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
            <h6 class="font-weight-bold blue-text my-3">Photographer</h6>
            <p class="font-weight-normal dark-grey-text">
              <fa class="fa fa-quote-left pr-2"></fa>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
            <div class="orange-text">
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star"> </fa>
              <fa icon="star-o"> </fa>
            </div>
          </testimonial>
        </column>
      </row>
    </section>
  </container>
</template>

<script>
import { Container, Row, Column, Card, CardBody, CardUp, Avatar, Fa, Carousel, CarouselInner, CarouselItem, Testimonial, TestimonialNavigation } from 'mdbvue';

export default {
  name: 'TestimonialsPage',
  components: {
    Container,
    Row,
    Column,
    Card,
    CardBody,
    CardUp,
    Avatar,
    Fa,
    Carousel,
    CarouselInner,
    CarouselItem,
    Testimonial,
    TestimonialNavigation
  },
  data() {
    return {
      page: 0,
      items: '',
      interval: false,
      show: { 0: true, 1: false, 2: false }
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
      if (this.interval === false) {
        return;
      }
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

<style scoped>
.carousel {
  overflow: hidden;
}
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
