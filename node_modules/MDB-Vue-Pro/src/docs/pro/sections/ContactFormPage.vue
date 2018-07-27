<template>
  <div>
    <header>
      <!--Navbar-->
      <navbar position="top"  navStyle="margin-top: 60px;" dark href="#" scrolling transparent>
          <navbar-collapse style="max-width: 1140px;" class="mx-auto">
            <a class="navbar-brand" href="#"><strong>MDB</strong></a>
            <navbar-nav>
              <navbar-item href="#" waves-fixed active>Home</navbar-item>
              <navbar-item href="#" waves-fixed>Link</navbar-item>
              <navbar-item href="#" waves-fixed>Profile</navbar-item>
            </navbar-nav>
            <!--Search form -->
            <form>
              <md-input type="text" class="text-white f-flex" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
            </form>
            <!--/.Search form -->
          </navbar-collapse>
      </navbar>
      <!--/.Navbar-->

      <!--ViewWrapper-->
      <view-wrapper>
        <md-mask overlay="indigo-strong" class="d-flex justify-content-center align-items-center">
          <container>
              <!--Grid row-->
              <row class="pt-lg-5 mt-lg-5">
                <!--Grid column-->
                <column md="6" class="mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                  <h1 class="display-4 font-weight-bold">Lorem ipsum</h1>
                  <hr class="hr-light">
                  <h6 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                  nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                  dolor molestiae, quisquam iste.</h6>
                  <btn outline="white">Learn more</btn>
                </column>
                <!--Grid column-->
                <!--Grid column-->
                <column md="6" xl="5" class="mb-4">
                  <!--Form-->
                  <card>
                    <card-body class="z-depth-2">
                      <!--Header-->
                      <div class="text-center">
                        <h3 class="dark-grey-text">
                          <strong>Write to us:</strong>
                        </h3>
                        <hr>
                      </div>
                      <!--Body-->
                      <div class="md-form">
                      <!--Input with icon prefix-->
                        <md-input type="text" icon="user" iconClass="grey-text" label="Your name" id="form-name"/>
                        <md-input type="text" icon="envelope" iconClass="grey-text" label="Your mail" id="form-email"/>
                        <!--Textarea with icon prefix-->
                        <md-textarea icon="pencil" iconClass="grey-text" label="Your message" id="form-text" :rows="3"/>
                      </div>
                      <div class="text-center mt-3">
                        <btn color="indigo">Send</btn>
                        <hr>
                        <fieldset class="form-check">
                          <md-input type="checkbox" label="Subscribe me to the newsletter" id="form-subscribe" inline/>
                        </fieldset>
                      </div>
                    </card-body>
                  </card>
                  <!--/.Form-->
                </column>
                <!--Grid column-->
              </row>
              <!--Grid row-->
          </container>
        </md-mask>
      </view-wrapper>
      <!--/.ViewWrapper-->
    </header>

    <main>
      <container>
        <row class="py-5">
          <column md="12" class="text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </column>
        </row>
      </container>
    </main>
  </div>
</template>

<script>
import { Navbar, NavbarCollapse, NavbarNav, NavbarItem, MdInput, MdTextarea, ViewWrapper, MdMask, Row, Column, Container, Btn, Card, CardBody } from 'mdbvue';

export default {
  name: 'ContactFormPage',
  components: {
    Navbar,
    NavbarCollapse,
    NavbarNav,
    NavbarItem,
    MdInput,
    MdTextarea,
    ViewWrapper,
    MdMask,
    Row,
    Column,
    Container,
    Btn,
    Card,
    CardBody
  }
};
</script>

<style scoped>
.navbar {
  transition: 1s;
}
.navbar .md-form {
  margin: 0;
}
.top-nav-collapse {
    background-color: #39448c !important;
}
@media (max-width: 990px){
  .navbar {
    background-color: #424f95 !important;
  }
}
.view {
  background-image: url(https://mdbootstrap.com/img/Photos/Others/images/89.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 60px);
}
h6 {
    line-height: 1.7;
}
</style>
