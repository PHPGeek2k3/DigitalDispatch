<template>
  <div class="video-background-page">
    <navbar navStyle="margin-top: 60px; align-items: center; justify-content: center;" color="indigo" position="top" dark href="#" transparent scrolling>
      <navbar-collapse style="max-width: 1140px">
        <a class="navbar-brand" href="#"><strong>MDB</strong></a>
        <navbar-nav>
          <navbar-item href="#" waves-fixed>Home</navbar-item>
          <navbar-item href="#" waves-fixed>About</navbar-item>
          <navbar-item href="#" waves-fixed>Features</navbar-item>
          <navbar-item href="#" waves-fixed>Services</navbar-item>
          <navbar-item href="#" waves-fixed>Opinions</navbar-item>
          <navbar-item href="#" waves-fixed>Team</navbar-item>
          <navbar-item href="#" waves-fixed>Contact</navbar-item>
        </navbar-nav>
        <navbar-nav right>
          <navbar-item href="#!" waves-fixed><fa icon="facebook" class="light-green-text-2"/></navbar-item>
          <navbar-item href="#!" waves-fixed><fa icon="twitter" class="light-green-text-2"/></navbar-item>
          <navbar-item href="#!" waves-fixed><fa icon="instagram" class="light-green-text-2"/></navbar-item>
        </navbar-nav>
      </navbar-collapse>
    </navbar>

    <view-wrapper>
      <video class="video-intro" poster="https://mdbootstrap.com/img/Photos/Others/background.jpg" playsInline autoPlay muted="" loop>
        <source src="https://mdbootstrap.com/img/video/animation.mp4" type="video/mp4"/>
      </video>
      <md-mask class="d-flex justify-content-center align-items-center gradient">
        <container class="px-md-3 px-sm-0">
          <row>
            <column md="12" class="mb-4 white-text text-center">
              <h3 class="display-3 font-weight-bold mb-0 pt-md-5">Creative Agency </h3>
              <hr class="hr-light my-4 w-75"/>
              <h4 class="subtext-header mt-2 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.</h4>
              <btn outline="white" rounded color="white"><fa icon="home"/> Visit us</btn>
            </column>
          </row>
        </container>
      </md-mask>
    </view-wrapper>

    <container>
      <row class="pt-5 pb-4">
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
import { Container, Row, Column, ViewWrapper, MdMask, MdInput, Btn, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse  } from 'mdbvue';

export default {
  name: 'VideoBackgroundPage',
  components: {
    Container, Row, Column, ViewWrapper, MdMask, MdInput, Btn, Fa, Navbar, NavbarItem, NavbarNav, NavbarCollapse
  }

};
</script>

<style scoped>
.video-background-page .gradient {
    background: -moz-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: -webkit-linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
    background: linear-gradient(45deg, rgba(213, 15, 61, 0.6), rgba(13, 17, 198, 0.69) 100%);
}

.video-background-page .view video {
  top: 0!important;
  left: 0!important;
  transform: none!important;
  height: calc(100vh - 60px);
}

.video-background-page .navbar {
  transition: background .5s ease-in-out,padding .5s ease-in-out;
}

.top-nav-collapse {
  background-color: #563e91 !important;
}

</style>
