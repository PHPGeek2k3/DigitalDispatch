<template>
  <container>
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
      <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <row>
        <column lg="5" class="lg-0 mb-4">
          <card>
            <card-body>
              <div class="form-header blue accent-1">
                <h3 class="mt-2"><fa icon="envelope" /> Write to us:</h3>
              </div>
              <p class="dark-grey-text">We'll write rarely, but only the best content.</p>
              <div class="md-form">
                <md-input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" />
              </div>
              <div class="md-form">
                <md-input icon="envelope" label="Your email" iconClass="grey-text" type="text" id="form-email" />
              </div>
              <div class="md-form">
                <md-input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" />
              </div>
              <div class="md-form">
                <md-textarea icon="pencil" label="Icon Prefix" iconClass="grey-text" id="form-text" />
              </div>
              <div class="text-center">
                <btn color="light-blue">Submit</btn>
              </div>
            </card-body>
          </card>
        </column>
        <column lg="7">
          <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style="border: 0"></iframe>
          </div>
          <br/>
          <row class="text-center">
            <column md="4">
              <btn tag="a" floating color="blue" class="accent-1">
                <fa icon="map-marker"/>
              </btn>
              <p>New York, 94126</p>
              <p class="mb-md-0">United States</p>
            </column>
            <column md="4">
              <btn tag="a" floating color="blue" class="accent-1">
                <fa icon="phone"/>
              </btn>
              <p>+ 01 234 567 89</p>
              <p class="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </column>
            <column md="4">
              <btn tag="a" floating color="blue" class="accent-1">
                <fa icon="envelope"/>
              </btn>
              <p>info@gmail.com</p>
              <p class="mb-md-0">sale@gmail.com</p>
            </column>
          </row>
        </column>
      </row>
    </section>

    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
      <p class="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
      <row>
        <column md="9" class="md-0 mb-5">
          <form>
            <row>
              <column md="6">
                <div class="md-form mb-0">
                  <md-input type="text" id="contact-name" label="Your name" />
                </div>
              </column>
              <column md="6">
                <div class="md-form mb-0">
                  <md-input type="text" id="contact-email" label="Your email" />
                </div>
              </column>
            </row>
            <row>
              <column md="12">
                <div class="md-form mb-0">
                  <md-input type="text" id="contact-subject" label="Subject" />
                </div>
              </column>
            </row>
            <row>
              <column md="12">
                <div class="md-form mb-0">
                  <md-textarea id="contact-message" label="Your message" />
                </div>
              </column>
            </row>
          </form>
          <div class="text-center text-md-left">
            <btn color="primary" size="md">Send</btn>
          </div>
        </column>
        <column md="3" class="text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <fa icon="map-marker" size="2x" class="blue-text"/>
              <p>San Francisco, CA 94126, USA</p>
            </li>
            <li>
              <fa icon="phone" size="2x" class="blue-text mt-4"/>
              <p>+ 01 234 567 89</p>
            </li>
            <li>
              <fa icon="envelope" size="2x" class="blue-text mt-4"/>
              <p>contact@example.com</p>
            </li>
          </ul>
        </column>              
      </row>
    </section>

    <section class="contact-section my-5">
      <card>
        <row>
          <column lg="8">
            <card-body class="form">
              <h3 class="mt-4">
                <fa icon="envelope" class="pr-2"/>Write to us:
              </h3>
              <row>
                <column md="6">
                  <div class="md-form mb-0">
                    <md-input type="text" id="form-contact-name" label="Your name"/>
                  </div>
                </column>
                <column md="6">
                  <div class="md-form mb-0">
                    <md-input type="text" id="form-contact-email" label="Your email"/>
                  </div>
                </column>
              </row>
              <row>
                <column md="6">
                  <div class="md-form mb-0">
                    <md-input type="text" id="form-contact-phone" label="Your phone"/>
                  </div>
                </column>
                <column md="6">
                  <div class="md-form mb-0">
                    <md-input type="text" id="form-contact-company" label="Your company"/>
                  </div>
                </column>
              </row>
              <row>
                <column md="12">
                  <div class="md-form mb-0">
                    <md-textarea id="form-contact-message" label="Your message"/>
                    <btn tag="a" floating color="blue" size="lg">
                      <fa icon="send-o"/>
                    </btn>
                  </div>
                </column>
              </row>
            </card-body>
          </column>
          <column lg="4">
            <card-body class="contact text-center h-100 white-text">
              <h3 class="my-4 pb-2">Contact information</h3>
              <ul class="text-lg-left list-unstyled ml-4">
                <li>
                  <p><fa icon="map-marker" class="pr-2"/>New York, 94126 USA</p>
                </li>
                <li>
                  <p><fa icon="phone" class="pr-2"/>+ 01 234 567 89</p>
                </li>
                <li>
                  <p><fa icon="envelope" class="pr-2"/>contact@example.com</p>
                </li>
              </ul>
              <hr class="hr-light my-4"/>
              <ul class="list-inline text-center list-unstyled">
                <li class="list-inline-item">
                  <a class="p-2 fa-lg w-ic">
                    <fa icon="twitter"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg w-ic">
                    <fa icon="linkedin"/>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="p-2 fa-lg w-ic">
                    <fa icon="instagram"/>
                  </a>
                </li>
              </ul>
            </card-body>
          </column>
        </row>
      </card>
    </section>
  </container>
</template>

<script>
import { Container, Row, Column, Btn, Fa, MdInput, MdTextarea, Card, CardBody } from 'mdbvue';

export default {
  name: 'ContactPage',
  components: {
    Container,
    Row,
    Column,
    Btn,
    Fa,
    MdInput,
    MdTextarea,
    Card,
    CardBody 
  }

};
</script>

<style scoped>
</style>
