<template>
  <div class="classic-form-page">
    <navbar navStyle="margin-top: 60px; align-items: center; justify-content: center;" position="top" dark href="#" transparent scrolling>
      <navbar-collapse style="max-width: 1140px">
        <a class="navbar-brand" href="#"><strong>MDB</strong></a>
        <navbar-nav>
          <navbar-item href="#" waves-fixed active>Home</navbar-item>
          <navbar-item href="#" waves-fixed>Features</navbar-item>
          <navbar-item href="#" waves-fixed>Pricing</navbar-item>
        </navbar-nav>
        <!-- Search form -->
        <form>
          <md-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
        </form>
      </navbar-collapse>
    </navbar>

    <view-wrapper>
      <md-mask class="d-flex gradient justify-content-center align-items-center">
        <container>
          <row>
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
              <h1 class="h1-responsive font-weight-bold">Sign up right now! </h1>
              <hr class="hr-light"/>
              <h6 class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</h6>
              <btn outline="white" color="white">Learn More</btn>
            </div>
            <column md="6" xl="5" class="mb-4">
              <card id="classic-card">
                <card-body class="z-depth-2 white-text">
                  <h3 class="text-center"><fa icon="user"/> Register:</h3>
                  <hr class="hr-light"/>
                  <md-input label="Your name" labelColor="white" icon="user"/>
                  <md-input label="Your email" labelColor="white" icon="envelope"/>
                  <md-input label="Your password" labelColor="white" icon="lock" type="password"/>
                  <div class="text-center mt-4 black-text">
                    <btn color="indigo">Sign Up</btn>
                    <hr class="hr-light"/>
                    <div class="text-center d-flex justify-content-center white-label">
                      <a class="p-2 m-2">
                        <fa icon="twitter" class="white-text"/>
                      </a>
                      <a class="p-2 m-2">
                        <fa icon="linkedin" class="white-text"/>
                      </a>
                      <a class="p-2 m-2">
                        <fa icon="instagram" class="white-text"/>
                      </a>
                    </div>
                  </div>
                </card-body>
              </card>
            </column>
          </row>
        </container>
      </md-mask>
    </view-wrapper>

    <container>
      <row class="py-5">
        <column md="12" class="text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </column>
      </row>
    </container>
  </div>
</template>

<script>
import { Container, Row, Column, Navbar, NavbarItem, NavbarNav, NavbarCollapse, ViewWrapper, MdMask, Btn, Card, CardBody, MdInput, Fa } from 'mdbvue';

export default {
  name: 'ClassicFormPage',
  components: {
    Container, Row, Column, Navbar, NavbarItem, NavbarNav, NavbarCollapse, ViewWrapper, MdMask, Btn, Card, CardBody, MdInput, Fa
  },
  data() {
    return {
      active: {
        0: false
      }
    };
  },
  methods: {
    toggleDropdown(index) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        if (index !== i) {
          this.active[i] = false;
        }
      }
      this.active[index] = !this.active[index];
    },
    allDropdownsClose(target) {
      for (let i = 0; i < Object.keys(this.active).length; i++) {
        this.active[i] = false;
      }
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

<style scoped>
.classic-form-page .view {
  background-image: url('http://mdbootstrap.com/img/Photos/Others/images/91.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 60px);
}

.classic-form-page .gradient {
  background: -webkit-linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(72, 15, 144, 0.4) 100%);
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(72, 15, 144, 0.4) 100%);
}

.classic-form-page .card {
  background-color: rgba(126, 123, 215, 0.2);
}

.classic-form-page h6 {
  line-height: 1.7;
}

.classic-form-page .navbar {
  transition: background .5s ease-in-out,padding .5s ease-in-out;
}

.classic-form-page .navbar .md-form {
  margin: 0;
}

.top-nav-collapse {
  background: #424f95 !important;
}

@media (max-width: 768px) {
  .classic-form-page .navbar:not(.top-nav-collapse) {
      background: #424f95 !important;
  }
}

.classic-form-page label {
  color: #fff!important;
}
</style>
