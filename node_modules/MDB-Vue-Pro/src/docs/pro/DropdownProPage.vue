<template>
  <container class="mt-5">
    <h4 class="pb-1">Material dropdown</h4>
    <dropdown>
      <dropdown-toggle color="primary" @click.native="toggleDropdown(0)">Material dropdown</dropdown-toggle>
      <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
        <dropdown-menu color="primary" v-show="active[0]" class="collapse-item">
          <dropdown-item>Action</dropdown-item>
          <dropdown-item>Another action</dropdown-item>
          <dropdown-item>Something else here</dropdown-item>
          <div class="dropdown-divider"></div>
          <dropdown-item>Separated link</dropdown-item>
        </dropdown-menu>
      </transition>
    </dropdown>
    <h4 class="pt-4 pb-1">Color variations</h4>
    <dropdown btn-group>
      <dropdown>
        <dropdown-toggle color="danger" @click.native="toggleDropdown(1)">Material dropdown</dropdown-toggle>
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
          <dropdown-menu color="danger" v-show="active[1]" class="collapse-item">
            <dropdown-item>Action</dropdown-item>
            <dropdown-item>Another action</dropdown-item>
            <dropdown-item>Something else here</dropdown-item>
            <div class="dropdown-divider"></div>
            <dropdown-item>Separated link</dropdown-item>
          </dropdown-menu>
        </transition>
      </dropdown>
    </dropdown>
    <dropdown btn-group>
      <dropdown>
        <dropdown-toggle color="warning" @click.native="toggleDropdown(2)">Material dropdown</dropdown-toggle>
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
          <dropdown-menu color="warning" v-show="active[2]" class="collapse-item">
            <dropdown-item>Action</dropdown-item>
            <dropdown-item>Another action</dropdown-item>
            <dropdown-item>Something else here</dropdown-item>
            <div class="dropdown-divider"></div>
            <dropdown-item>Separated link</dropdown-item>
          </dropdown-menu>
        </transition>
      </dropdown>
    </dropdown>
    <dropdown btn-group>
      <dropdown>
        <dropdown-toggle color="info" @click.native="toggleDropdown(3)">Material dropdown</dropdown-toggle>
        <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
          <dropdown-menu color="info" v-show="active[3]" class="collapse-item">
            <dropdown-item>Action</dropdown-item>
            <dropdown-item>Another action</dropdown-item>
            <dropdown-item>Something else here</dropdown-item>
            <div class="dropdown-divider"></div>
            <dropdown-item>Separated link</dropdown-item>
          </dropdown-menu>
        </transition>
      </dropdown>
    </dropdown>
  </container>
</template>

<script>
import { Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbvue';

export default {
  name: 'DropdownPage',
  data() {
    return {
      active: {
        0: false,
        1: false,
        2: false,
        3: false
      }
    };
  },
  components: {
    Container,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  },
  methods: {
    beforeEnter(el) {
      el.style.display = 'block';
      this.elHeight = el.scrollHeight;
    },
    enter(el) {
      el.style.opacity = 1;
    },
    beforeLeave(el) {
      el.style.opacity = 0;
    },
    allDropdownsClose(target) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        this.active[i] = false;
      }
    },
    toggleDropdown(index) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        if (index !== i) {
          this.active[i] = false;
        }
      }
      this.active[index] = !this.active[index];
    },
    onClick(e) {
      let parent = e.target;
      let body = document.getElementsByTagName('body')[0];
      while (parent !== body) {
        if (parent.classList.contains('dropdown') || parent.classList.contains('btn-group')) {
          return;
        }
        parent = parent.parentNode;
      }
      this.allDropdownsClose(e.target);
    }
  },
  mounted() {
    document.addEventListener('click', this.onClick);
  },
  destroyed() {
    document.removeEventListener('click', this.onClick);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.collapse-item {
  opacity: 0;
  transition: .5s;
}
</style>
