<template>
  <container class="container green-text">
    <div :style="{height: '45%'}"></div>
      <div class="text-center icon-div">
        <fa icon="bars" size="5x" @click.native="handleBtnAClick"/></div>
      <div class="text-center icon-div">
        <fa icon="bars" size="5x" @click.native="handleBtnBClick"/></div>
      <side-nav
        logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
        :OpenedFromOutside.sync="toggleA"
        color="cyan darken-4"
        hidden
        waves>
        <li>
          <ul class="social">
          <li><a href="#" class="icons-sm fb-ic"><fa icon="facebook" /></a></li>
          <li><a href="#" class="icons-sm pin-ic"><fa icon="pinterest" /></a></li>
          <li><a href="#" class="icons-sm gplus-ic"><fa icon="google-plus" /></a></li>
          <li><a href="#" class="icons-sm tw-ic"><fa icon="twitter" /></a></li>
          </ul>
        </li>
        <li>
          <ul class="collapsible">
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 1 ? active = 0 : active = 1">
                <fa icon="chevron-right"/> Submit blog<fa icon="angle-down" class="rotate-icon" :class="active === 1 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 1" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">Submit listing</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">Registration form</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 2 ? active = 0 : active = 2">
                <fa icon="hand-pointer-o"></fa> Instruction<fa icon="angle-down" class="rotate-icon" :class="active === 2 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 2" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">For bloggers</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">For authors</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 3 ? active = 0 : active = 3">
                <fa icon="eye"></fa> About<fa icon="angle-down" class="rotate-icon" :class="active === 3 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 3" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">Introduction</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">Monthly meetings</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 4 ? active = 0 : active = 4">
                <fa icon="envelope-o"></fa> Contact me<fa icon="angle-down" class="rotate-icon" :class="active === 4 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 4" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">FAQ</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">Write a message</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
          </ul>
        </li>
      </side-nav>
      <side-nav logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                :OpenedFromOutside.sync="toggleB"
                class="side-nav-light"
                hidden
                waves
                right>
      <ul>
        <li>
          <ul class="social">
          <li><a href="#" class="icons-sm fb-ic"><fa icon="facebook" /></a></li>
          <li><a href="#" class="icons-sm pin-ic"><fa icon="pinterest" /></a></li>
          <li><a href="#" class="icons-sm gplus-ic"><fa icon="google-plus" /></a></li>
          <li><a href="#" class="icons-sm tw-ic"><fa icon="twitter" /></a></li>
          </ul>
        </li>
        <li>
        <li>
          <ul class="collapsible">
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 1 ?  active = 0 : active = 1">
                <fa icon="chevron-right"/> Submit blog<fa icon="angle-down" class="rotate-icon" :class="active === 1 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 1" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">Submit listing</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">Registration form</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 2 ? active = 0 : active = 2">
                <fa icon="hand-pointer-o"></fa> Instruction<fa icon="angle-down" class="rotate-icon" :class="active === 2 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 2" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">For bloggers</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">For authors</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 3 ? active = 0 : active = 3">
                <fa icon="eye"></fa> About<fa icon="angle-down" class="rotate-icon" :class="active === 3 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 3" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">Introduction</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">Monthly meetings</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
            <li>
              <a class="collapsible-header ripple-parent" @click="wave" @click.prevent="active === 4 ? active = 0 : active = 4">
                <fa icon="envelope-o"></fa> Contact me<fa icon="angle-down" class="rotate-icon" :class="active === 4 ? 'rotated' : ''"/></a>
              <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
                <sub-menu tag="ul" v-if="active === 4" class="collapse-item">
                  <li><a href="#" class="ripple-parent" @click="wave">FAQ</a>
                  </li>
                  <li><a href="#" class="ripple-parent" @click="wave">Write a message</a>
                  </li>
                </sub-menu>
              </transition>
            </li>
          </ul>
        </li>
      </ul>
    </side-nav>
  </container>
</template>

<script>
  import { SideNav, Btn, Container, Fa, SubMenu, waves } from 'mdbvue';

  export default {
    name: 'SideNavPage',
    props: {
      waves: {
        type: Boolean,
        default: true
      }
    },
    components: {
      SideNav,
      Btn,
      Container,
      Fa,
      SubMenu,
    },
    data(){
      return {
        toggleA: false,
        toggleB: false,
        active: 0,
        elHeight: 0
      };
    },
    methods: {
      handleBtnAClick() {
        this.toggleA = !this.toggleA;
      },
      handleBtnBClick() {
        this.toggleB = !this.toggleB;
      },
      beforeEnter(el) {
        this.elHeight = el.scrollHeight;
      },
      enter(el) {
        el.style.height = this.elHeight+'px';
      },
      beforeLeave(el) {
        el.style.height = 0;
      }
    },
    mixins: [waves]
  };
</script>

<style scoped>
  .container {
    height: 750px;
  }

  .collapsible {
    margin-top: 1rem;
  }

  .collapsible-header {
    position: relative;
  }

  .collapse-item {
    overflow: hidden;
    height: 0;
    padding: 0;
    transition: height .3s;
  }
  .collapse-item a {
      padding-left: 47px;
      line-height: 36px;
      background-color: rgba(0,0,0,.15);
  }
  .fa-angle-down {
    float: right;
  }
  .icon-div {
    width: 49%;
    display: inline-block;
  }

  .rotated {
    transform: rotate(180deg);
  }
</style>
