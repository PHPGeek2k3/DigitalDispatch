<template>
  <container>

    <h2 class="pt-4 mt-5">
      <strong>Magazine newsfeed v.1 </strong>
    </h2>

    <h2 class="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
    <p class="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
    <row>
      <column lg="6" md="12">
        <div class="news">
          <view-wrapper hover rounded class="z-depth-1-half mb-4">
            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Sample image"/>
            <a>
              <md-mask overlay="white-slight" class="waves-light" waves/>
            </a>
          </view-wrapper>
          <div class="d-flex justify-content-between">
            <a class="light-blue-text"><h6 class="font-weight-bold"><fa icon="plane" class="pr-2"/>Travels</h6></a>
            <p class="font-weight-bold dark-grey-text"><fa icon="clock-o" class="pr-2"/>20/08/2018</p>
          </div>
          <h3 class="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
          <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
        </div>

        <div class="news">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/photo8.jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">19/08/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

        <div class="news">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">18/08/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

        <div class="mb-4">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">17/08/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Voluptatem accusantium doloremque</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>
      </column>

      <column lg="6" md="12">
        <div class="news">
          <view-wrapper hover rounded class="z-depth-1-half mb-4">
            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
            <a>
              <md-mask overlay="white-slight" class="waves-light" waves/>
            </a>
          </view-wrapper>
          <div class="d-flex justify-content-between">
            <a class="pink-text"><h6 class="font-weight-bold"><fa icon="home" class="pr-2"/>Lifestyle</h6></a>
            <p class="font-weight-bold dark-grey-text"><fa icon="clock-o" class="pr-2"/>24/08/2018</p>
          </div>
          <h3 class="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
          <p class="dark-grey-text">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
        </div>

        <div class="news">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">23/08/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Itaque earum rerum hic tenetur a sapiente delectus</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

        <div class="news">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">22/08/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

        <div class="mb-4">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">21/08/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Maiores alias consequatur aut perferendis</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>
      </column>
    </row>

    <h2 class="title pt-4 mt-5">
      <strong>Magazine newsfeed v.2 </strong>
    </h2>

    <h2 class="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
    <p class="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
    <row>
      <column md="12" lg="6">
        <div class="mb-4">
          <view-wrapper hover rounded class="z-depth-1-half mb-4">
            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/1.jpg" alt="Sample image"/>
            <a>
              <md-mask overlay="white-slight" class="waves-light" waves/>
            </a>
          </view-wrapper>
          <div class="d-flex justify-content-between">
            <a class="deep-orange-text"><h6 class="font-weight-bold"><Fa icon="cutlery" class="pr-2"/>Culinary</h6></a>
            <p class="font-weight-bold dark-grey-text"><Fa icon="clock-o" class="pr-2"/>27/02/2018</p>
          </div>
          <h3 class="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
          <p class="dark-grey-text mb-lg-0 mb-md-5 mb-4">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae explicabo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
        </div>
      </column>

      <column md="12" lg="6">
        <div class="news">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">26/02/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

        <div class="news">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">25/02/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Itaque earum rerum hic tenetur a sapiente delectus</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

        <div class="news">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">24/03/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

        <div class="mb-4">
          <row>
            <column md="3">
              <view-wrapper hover rounded class="z-depth-1-half mb-4">
                <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image"/>
                <a>
                  <md-mask overlay="white-slight" class="waves-light" waves/>
                </a>
              </view-wrapper>
            </column>
            <column md="9">
              <p class="font-weight-bold dark-grey-text">23/02/2018</p>
              <div class="d-flex justify-content-between">
                <column col="11" class="text-truncate pl-0 mb-3">
                  <a class="dark-grey-text">Duis aute irure dolor in reprehenderit in voluptate</a>
                </column>
                <a><fa icon="angle-double-right"/></a>
              </div>
            </column>
          </row>
        </div>

      </column>
    </row>

    <h2 class="title pt-4 mt-5">
      <strong>Magazine newsfeed v.3 </strong>
    </h2>

    <h2 class="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
    <p class="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
    <row>

      <column md="12" lg="4" class="mb-lg-0 mb-5">
        <view-wrapper hover rounded class="z-depth-1-half mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
          <a>
            <md-mask overlay="white-slight" class="waves-light" waves/>
          </a>
        </view-wrapper>
        <row class="mb-3">
          <column col="12">
            <a><badge color="pink"><fa icon="camera" class="pr-2" aria-hidden="true"/>Adventure</badge></a>
          </column>
        </row>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a class="font-weight-bold">This is title of the news</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>24 Food Swaps That Slash Calories.</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>How to Make a Beet Cocktail?</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>8 Sneaky Reasons You're Always Hungry.</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>5 Pressure Cooker Recipes You Need to Try.</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
      </column>

      <column md="12" lg="4" class="mb-lg-0 mb-5">
        <view-wrapper hover rounded class="z-depth-1-half mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" alt="Sample image"/>
          <a>
            <md-mask overlay="white-slight" class="waves-light" waves/>
          </a>
        </view-wrapper>
        <row class="mb-3">
          <column col="12">
            <a><badge color="deep-orange"><fa icon="plane" class="pr-2" aria-hidden="true"/>Travel</badge></a>
          </column>
        </row>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a class="font-weight-bold">This is title of the news</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>Trends in the blogosphere for 2018.</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>Where can you eat the best lunch in Warsaw?</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>What camera is worth taking for holidays?</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>Why should you visit Lisbon?</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
      </column>

      <column md="12" lg="4" class="mb-lg-0 mb-5">
        <view-wrapper hover rounded class="z-depth-1-half mb-4">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" alt="Sample image"/>
          <a>
            <md-mask overlay="white-slight" class="waves-light" waves/>
          </a>
        </view-wrapper>
        <row class="mb-3">
          <column col="12">
            <a><badge color="success-color"><fa icon="leaf" class="pr-2" aria-hidden="true"/>Nature</badge></a>
          </column>
        </row>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a class="font-weight-bold">This is title of the news</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>How to recognize the footsteps of wild animals?</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>National Parks in Poland.</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between news">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>Traveling without littering the planet.</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <column col="11" class="text-truncate pl-0 mb-3">
            <a>How to protect rainforests?</a>
          </column>
          <a><fa icon="angle-double-right"/></a>
        </div>
      </column>
    </row>
  </container>
</template>

<script>
import { Container, Row, Column, ViewWrapper, Fa, MdMask, Badge } from 'mdbvue';

export default {
  name: 'MagazinePage',
  components: {
    Container,
    Row,
    Column,
    ViewWrapper,
    Fa,
    MdMask,
    Badge
  },

};
</script>

<style scoped>
.news {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 1.5rem;
}
</style>
