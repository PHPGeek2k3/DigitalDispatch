<template>
  <container class="mt-5"> 
    <h4 class="pb-3">Basic example</h4>
    <row>
      <column sm="6">
        <select-wrapper>
          <select-input @click.native="openSelect(0)" :text="text[0]"></select-input>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
            <select-options v-show="active[0]" class="collapse-item">
              <select-option disabled>Choose your option</select-option>
              <select-option @click.native="chooseOption" value="Option 1">Option nr 1</select-option>
              <select-option @click.native="chooseOption" value="Option 2">Option nr 2</select-option>
              <select-option @click.native="chooseOption" value="Option 3">Option nr 3</select-option>
              <select-option @click.native="chooseOption" value="Option 4">Option nr 4</select-option>
              <select-option @click.native="chooseOption" value="Option 5">Option nr 5</select-option>
            </select-options>
          </transition>
        </select-wrapper>
        <label>Example label</label>
      </column>
    </row>
    <h4 class="pt-4 pb-2">Color variations</h4>
    <row>
      <column sm="6">
        <select-wrapper color="primary">
          <select-input @click.native="openSelect(1)" :text="text[1]"></select-input>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
            <select-options v-show="active[1]" class="collapse-item">
              <select-option disabled>Choose your option</select-option>
              <select-option @click.native="chooseOption" value="Option 1">Option nr 1</select-option>
              <select-option @click.native="chooseOption" value="Option 2">Option nr 2</select-option>
              <select-option @click.native="chooseOption" value="Option 3">Option nr 3</select-option>
              <select-option @click.native="chooseOption" value="Option 4">Option nr 4</select-option>
              <select-option @click.native="chooseOption" value="Option 5">Option nr 5</select-option>
            </select-options>
          </transition>
        </select-wrapper>
        <label>Example label</label>
      </column>
    </row>
    <h4 class="pt-4 pb-2">Multiple select</h4>
    <row>
      <column sm="6">
        <select-wrapper multiple>
          <select-input @click.native="openSelect(2)" :text="text[2]"></select-input>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
            <select-options v-show="active[2]" class="collapse-item">
              <select-option disabled>Choose your option</select-option>
              <select-option @click.native="chooseOption" multiple value="Option 1">Option nr 1</select-option>
              <select-option @click.native="chooseOption" multiple value="Option 2">Option nr 2</select-option>
              <select-option @click.native="chooseOption" multiple value="Option 3">Option nr 3</select-option>
              <select-option @click.native="chooseOption" multiple value="Option 4">Option nr 4</select-option>
              <select-option @click.native="chooseOption" multiple value="Option 5">Option nr 5</select-option>
              <btn save color="primary" size="sm">Save</btn>
            </select-options>
          </transition>
        </select-wrapper>
        <label>Example label</label>
      </column>
    </row>
    <h4 class="pt-4 pb-2">Options groups</h4>
    <row>
      <column sm="6">
        <select-wrapper>
          <select-input @click.native="openSelect(3)" :text="text[3]"></select-input>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
            <select-options v-show="active[3]" class="collapse-item">
              <select-option disabled>team 1</select-option>
              <select-option @click.native="chooseOption" value="Option 1">Option nr 1</select-option>
              <select-option @click.native="chooseOption" value="Option 2">Option nr 2</select-option>
              <select-option disabled>team 2</select-option>
              <select-option @click.native="chooseOption" value="Option 3">Option nr 3</select-option>
              <select-option @click.native="chooseOption" value="Option 4">Option nr 4</select-option>
            </select-options>
          </transition>
        </select-wrapper>
        <label>Example label</label>
      </column>
    </row>
    <h4 class="pt-4 pb-2">Select with icons</h4>
    <row>
      <column sm="6">
        <select-wrapper>
          <select-input @click.native="openSelect(4)" :text="text[4]"></select-input>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
            <select-options v-show="active[4]" class="collapse-item">
              <select-option disabled>Choose your option</select-option>
              <select-option icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" @click.native="chooseOption" value="Option 1">Option nr 1</select-option>
              <select-option icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" @click.native="chooseOption" value="Option 2">Option nr 2</select-option>
              <select-option icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg" @click.native="chooseOption" value="Option 3">Option nr 3</select-option>
            </select-options>
          </transition>
        </select-wrapper>
        <label>Example label</label>
      </column>
    </row>
    <h4 class="pt-4 pb-2">Disabled select</h4>
    <row>
      <column sm="6">
        <select-wrapper disabled>
          <select-input disabled text="Choose Your option"></select-input>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
            <select-options class="collapse-item">
              <select-option @click.native="chooseOption" value="Option 1">Option nr 1</select-option>
              <select-option @click.native="chooseOption" value="Option 2">Option nr 2</select-option>
              <select-option @click.native="chooseOption" value="Option 3">Option nr 3</select-option>
              <select-option @click.native="chooseOption" value="Option 4">Option nr 4</select-option>
            </select-options>
          </transition>
        </select-wrapper>
        <label>Example label</label>
      </column>
    </row>
    <br><br><br><br><br><br><br><br><br>
  </container>
</template>

<script>
import { Container, Row, Column, SelectWrapper, SelectInput, SelectOptions, SelectOption, Btn } from 'mdbvue';

export default {
  data() {
    return {
      value: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
      },
      text: {
        0: "Choose your option",
        1: "Choose your option",
        2: "Choose your options",
        3: "Choose your option",
        4: "Choose your option"
      },
      active: {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
      },
      activeSelect: false,
      elHeight: false,
      multiValues: [],
      multiTexts: []
    };
  },
  name: 'SelectPage',
  components: {
    Container,
    Row,
    Column,
    SelectWrapper,
    SelectInput,
    SelectOptions,
    SelectOption,
    Btn
  },
  methods: {
    openSelect(index) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        if (index !== i) {
          this.active[i] = false;
        }
      }
      this.active[index] = true;
      this.activeSelect = index;
    },
    chooseOption(e) {
      // check if select is multiple
      if (e.target.dataset.multiple === 'true') {
        if (this.multiValues.includes(e.target.getAttribute('data-value'))) {
          let valueIndex = this.multiValues.indexOf(e.target.getAttribute('data-value'));
          this.multiValues.splice(valueIndex, 1);
          this.multiTexts.splice(valueIndex, 1);
          e.target.parentNode.classList.remove('active');
          e.target.parentNode.getElementsByTagName('input')[0].removeAttribute('checked');
          if (!this.multiValues.length) {
            this.multiValues = [];
            this.multiTexts = "Choose Your options";
          }
        } else {
          if (this.multiTexts === "Choose Your options") {
            this.multiValues = [];
            this.multiTexts = [];
          }
          this.multiValues.push(e.target.getAttribute('data-value'));
          this.multiTexts.push(e.target.parentNode.getElementsByClassName('filtrable')[0].textContent);
          e.target.parentNode.classList.add('active');
          e.target.parentNode.getElementsByTagName('input')[0].setAttribute('checked', true);
        }
        this.value[this.activeSelect] = this.multiValues;
        this.text[this.activeSelect] = this.multiTexts;
      // if not multiple
      } else {
        let activeOption = e.target.parentNode.parentNode.getElementsByClassName('active')[0];
        if (activeOption) {
          activeOption.classList.remove('active');
        }
        e.target.parentNode.classList.add('active');
        this.value[this.activeSelect] = e.target.getAttribute('data-value');
        this.text[this.activeSelect] = e.target.parentNode.getElementsByClassName('filtrable')[0].textContent;
      }
    },
    beforeEnter(el) {
      el.style.display = 'block';
      this.elHeight = el.scrollHeight;
    },
    enter(el) {
      el.style.display = 'block';
      el.style.opacity = 1;
      el.style.height = this.elHeight + 'px';
    },
    afterEnter(el) {
      el.style.overflowY = 'auto';
    },
    beforeLeave(el) {
      el.style.overflowY = 'hidden';
      el.style.opacity = 0;
      el.style.height = 0;
      this.remove = setTimeout(() => {
        el.style.display = 'none';
      }, 500);
    },
    allDropdownsClose(target) {
      // check if target is multiple select
      if (target) {
        if (target.dataset.multiple === 'true') {
          return;
        }
      }
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        this.active[i] = false;
      }
    },
    onClick(e) {
      if (!e.target.classList.contains('select-dropdown')) {
        this.allDropdownsClose(e.target);
      }
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

<style scoped>
.collapse-item {
  overflow: hidden;
  opacity: 0;
  height: 0;
  transition: .5s;
}
</style>
