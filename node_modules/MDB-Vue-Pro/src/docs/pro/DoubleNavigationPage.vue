<template>
  <div :class="sideNavFixed && 'flexible-content'">
    <!--Navbar-->
    <navbar v-show="navbarType == 'regular-fixed'" position="top" style="margin-top: 60px" dark color="primary" href="#" scrolling>
      <navbar-collapse>
        <navbar-nav>
          <fa icon="bars" size="2x" @click.native="handleBtnAClick"/>
        </navbar-nav>
        <navbar-nav right>
          <navbar-item href="#!" waves-fixed>Home</navbar-item>
          <navbar-item href="#!" waves-fixed>CSS</navbar-item>
          <navbar-item href="#!" waves-fixed>Components</navbar-item>
          <navbar-item href="#!" waves-fixed>Advanced</navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <!--Navbar-->
    <navbar v-show="navbarType == 'regular-non-fixed'" style="margin-top: 5px" dark color="primary" href="#">
      <navbar-collapse>
        <navbar-nav>
          <fa icon="bars" size="2x" @click.native="handleBtnAClick"/>
        </navbar-nav>
        <navbar-nav right>
          <navbar-item href="#!" waves-fixed>Home</navbar-item>
          <navbar-item href="#!" waves-fixed>CSS</navbar-item>
          <navbar-item href="#!" waves-fixed>Components</navbar-item>
          <navbar-item href="#!" waves-fixed>Advanced</navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>
    <!--/.Navbar-->
    <side-nav
      logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
      :OpenedFromOutside.sync="toggleA"
      color="primary-color"
      v-show="sideNavFixed"
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
    <side-nav
      v-show="!sideNavFixed"
      logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
      :OpenedFromOutside.sync="toggleA"
      color="primary-color"
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
    <div style="height: 100vh">
      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center wow fadeInUp">
                <h2>This is test message</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div :style="[{'position': 'absolute','left': '100px','top': '200px','z-index': 50}, sideNavFixed && {'padding-left': '160px'}]">
      <btn size="sm" color="primary" @click.native="navbarType='regular-fixed', sideNavFixed=false">Double Navigation with hidden SideNav & fixed Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', sideNavFixed=false">Double Navigation with hidden SideNav & non-fixed Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-fixed', sideNavFixed=true">Double Navigation with fixed SideNav & fixed Navbar</btn>
      <btn size="sm" color="primary" @click.native="navbarType='regular-non-fixed', sideNavFixed=true">Double Navigation with fixed SideNav & non-fixed Navbar</btn>
    </div>
  </div>
</template>

<script>
import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, MdInput, Btn, SideNav, SubMenu, Fa, waves } from 'mdbvue';

export default {
  name: 'DoubleNavigationPage',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    MdInput,
    Btn,
    SideNav,
    SubMenu,
    Fa
  },
  data() {
    return {
      active: {
        0: false
      },
      navbarType: 'regular-fixed',
      sideNavFixed: false,
      toggleA: false
    };
  },
  methods: {
    handleBtnAClick() {
      this.toggleA = !this.toggleA;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar .dropdown-menu a:hover {
  color: inherit !important;
}
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (42).jpg")no-repeat center center;
  background-size: cover;
  height: 100%;
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

.navbar i {
  cursor: pointer;
  color: white;
}

@media (min-width: 770px) {
  .flexible-content {
    padding-left: 240px;
  }
}
</style>
