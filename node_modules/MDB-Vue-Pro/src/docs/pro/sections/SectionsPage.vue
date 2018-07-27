<template>
  <container>
    <row>
      <column md="8" class="mx-auto">
        <jumbotron class="mt-5">
          <h1><Fa icon="code" class="grey-text" /> Sections</h1>
          <ul class="list-unstyled example-components-list">
            <!-- FREE -->
            <h6>Intros</h6>
              <a href="#/sections/app"><li>App intro <fa icon="angle-right" /></li></a>
              <a href="#/sections/contactform"><li>Contact Form intro <fa icon="angle-right" /></li></a>
              <a href="#/sections/classic"><li>Classic Register Form intro <fa icon="angle-right" /></li></a>
              <a href="#/sections/video"><li>Video Background intro <fa icon="angle-right" /></li></a>
            <br/>
              <a href="#/sections/contact"><li>Contact <fa icon="angle-right" /></li></a>
              <a href="#/sections/blog"><li>Blog <fa icon="angle-right" /></li></a>
              <a href="#/sections/e-commerce"><li>E-commerce <fa icon="angle-right" /></li></a>
              <a href="#/sections/features"><li>Features <fa icon="angle-right" /></li></a>
              <a href="#/sections/magazine"><li>Magazine <fa icon="angle-right" /></li></a>
              <a href="#/sections/projects"><li>Projects <fa icon="angle-right" /></li></a>
              <a href="#/sections/social"><li>Social <fa icon="angle-right" /></li></a>
              <a href="#/sections/team"><li>Team <fa icon="angle-right" /></li></a>
              <a href="#/sections/testimonials"><li>Testimonials <fa icon="angle-right" /></li></a>
              <a href="#/sections/testimonials-multi"><li>Testimonials Multi Item <fa icon="angle-right" /></li></a>
          </ul>
        </jumbotron>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, Fa, Jumbotron } from 'mdbvue';

export default {
  name: 'SectionsPage',
  components: {
    Container,
    Row,
    Column,
    Fa,
    Jumbotron
  }
};
</script>

<style scoped>
.example-components-list {
  padding-top: 20px;
}

.example-components-list li {
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #f7f7f7;
  transition: .3s;
}

.example-components-list h6 {
  padding: 20px 10px 5px 10px;
  color: grey;
}

.example-components-list li:hover {
  background-color: #fafafa;
}

.example-components-list i {
  float: right;
  padding-top: 3px;
}
</style>
