<template>
  <div>
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
      <md-mask class="gradient d-flex justify-content-center align-items-center">
        <container>
          <row>
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
              <h1 class="h1-responsive font-weight-bold mt-sm-5">Make purchases with our app </h1>
              <hr class="hr-light"/>
              <h6 class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
              dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
              iste.</h6>
              <btn color="white">Download</btn>
              <btn outline="white">Learn More</btn>
            </div>
            <column md="6" xl="5" class="mt-xl-5">
              <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" class="img-fluid"/>
            </column>
          </row>
        </container>
      </md-mask>
    </view-wrapper>
    <!--/.ViewWrapper-->

    <container>
      <row class="py-5">
        <col md="12" class="text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </row>
    </container>
  </div>
</template>

<script>
import { Container, Row, Column, Navbar, NavbarCollapse, NavbarNav, NavbarItem, MdInput, ViewWrapper, MdMask, Btn } from 'mdbvue';

export default {
  name: 'AppPage',
  components: {
    Container,
    Row,
    Column,
    Navbar,
    NavbarCollapse,
    NavbarNav,
    NavbarItem,
    MdInput,
    ViewWrapper,
    MdMask,
    Btn
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
  background-color: #424f95 !important;
}
@media (max-width: 990px){
  .navbar {
    background-color: #424f95 !important;
  }
}
.view {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/architecture.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(100vh - 60px);
}
.gradient {
  background: -moz-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: -webkit-gradient(linear, 45deg, from(rgba(42, 27, 161, 0.7)), to(rgba(29, 210, 177, 0.7)));
  background: -o-linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
  background: linear-gradient(45deg, rgba(42, 27, 161, 0.7), rgba(29, 210, 177, 0.7) 100%);
}
h6 {
    line-height: 1.7;
}
</style>
