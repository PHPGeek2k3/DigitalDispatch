<template>
  <div class="mt-5">
    <container>
      <accordion>
        <card>
          <card-header>
            <a href="#" @click.prevent="active === 1 ? active = 0 : active = 1">
              <h5 class="mb-0">
                Collapsible Group Item #1 <fa icon="angle-down" :class="active === 1 ? 'rotate-icon' : ''"/>
              </h5>
            </a>
          </card-header>
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
            <card-body v-if="active === 1" class="collapse-item">
              <p class="p-2">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </p>
            </card-body>
          </transition>
        </card>
        <card>
          <card-header>
            <a href="#" @click.prevent="active === 2 ? active = 0 : active = 2">
              <h5 class="mb-0">
                Collapsible Group Item #2 <fa icon="angle-down" :class="active === 2 ? 'rotate-icon' : ''"/>
              </h5>
            </a>
          </card-header>
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
            <card-body v-if="active === 2" class="collapse-item">
              <p class="p-2">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </p>
            </card-body>
          </transition>
        </card>
        <card>
          <card-header>
            <a href="#" @click.prevent="active === 3 ? active = 0 : active = 3">
              <h5 class="mb-0">
                Collapsible Group Item #3 <fa icon="angle-down" :class="active === 3 ? 'rotate-icon' : ''"/>
              </h5>
            </a>
          </card-header>
          <transition @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave">
            <card-body v-if="active === 3" class="collapse-item">
              <p class="p-2">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </p>
            </card-body>
          </transition>
        </card>
      </accordion>
    </container>
  </div>
</template>

<script>
import { Container, Accordion, Card, CardHeader, CardBody, Fa } from 'mdbvue';

export default {
  data() {
    return {
      active: 0,
      elHeight: 0
    };
  },
  name: 'AccordionPage',
  components: {
    Container,
    Accordion,
    Card,
    CardHeader,
    CardBody,
    Fa
  },
  methods: {
    beforeEnter(el) {
      this.elHeight = el.scrollHeight;
    },
    enter(el) {
      el.style.height = this.elHeight+'px';
    },
    beforeLeave(el) {
      el.style.height = 0;
    }
  }
};
</script>

<style scoped>
.collapse-item {
  overflow: hidden;
  height: 0;
  padding: 0;
  transition: height .5s;
}
</style>
