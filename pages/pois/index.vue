<template>
  <div class="App">
    <TheHeader/>
    <section class="breadcrumb-section">
      <breadcrumb
      :default-route="[{ title: 'HOME', path: '/' }]"
      current-page="Punti di Interesse"
      />
    </section>
    <div class="carouselDiv">
      <div class="indicatorList">
        <div class = "list">
          <carousel-indicator
              v-for = "(poi,index) in poiList"
              :key = "poi.id"
              :index = "index"
              :visibleSlide = "visibleSlide"
              :title = "poi.name"
              @change = "change(poi.id)"

            />
        </div>
      </div>
      <carousel
        @next="next"
        @prev="prev"
        class = "carousel"
      >
        <carousel-slide v-for = "(poi, index) in poiList"
                        :key="index"
                        :index="index"
                        :visibleSlide = "visibleSlide"
                        :id="poi.id"
                        :name='"pois"'
        >
          <div class="imageContainer">
            <nuxt-link :to="`/pois/${poi.id}`">
              <img class= "carouselImg" :src="require(`@/static/Poi/${poi.imgBackground}`)" :alt="poi.name">
            </nuxt-link>
            <div class="textContainer-carousel">{{ poi.name }}</div>
            <div class="hoverText">Scopri di più</div>
          </div>
        </carousel-slide>
      </carousel>
      <div class="carouselScroll"
                      v-for = "(poi, index) in poiList"
                      :key="index"
                      :id="poi.id">

          <div class="imageContainer container-scroll">
            <nuxt-link :to="`/pois/${poi.id}`">
              <img class= "carouselImg image-scroll" :src="require(`@/static/Poi/${poi.imgBackground}`)" :alt="poi.name">
            </nuxt-link>
            <div class="textContainer-scroll">{{poi.name}}</div>
            <div class="hoverText">Scopri di più</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/Carousel";
import CarouselSlide from "~/components/CarouselSlide";
import CarouselIndicator from "~/components/CarouselIndicator";
import TheHeader from "~/components/TheHeader";
import Breadcrumb from "~/components/Breadcrumb";


export default {
  layout: 'empty',

  data() {
    return {
        poiList:[],
        visibleSlide : 0,
        crumbs: ['HOME','PUNTI DI INTERESSE'],
    }
  },

  async asyncData({ $axios }) {
    // const { data } = await $axios.get('api/pois')
    const { data } = await $axios.get('http://localhost:3000/api/pois')
    return {
      poiList: data,
    }
  },

  computed: {
    slidesLen() {
      return this.poiList.length;
    },
  },

  methods : {
    next() {
      if(this.visibleSlide >= this.slidesLen - 1 ) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
    },
    prev() {
      if(this.visibleSlide <= 0 ) {
        this.visibleSlide =  this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
    },
    change(index) {
      this.visibleSlide = index-1;
    },

    selected(crumb) {
      console.log(crumb);
    },
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
  components : {
    Carousel,
    CarouselSlide,
    TheHeader,
    CarouselIndicator,
    Breadcrumb,
  }
}

</script>

<style>


  .carouselDiv {
    padding-top: 2%;
    padding-left: 4%;
    width: 100%;
    height: 100vh;
  }

  carousel-slide {
    left: 0;
  }

  .imageContainer {
    position: relative;
    width: 70vw;
    height: 74vh;
    margin-top: 7vh;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }

  .imageContainer:hover .hoverText, .imageContainer.hover .hoverText {
    visibility: visible;
    opacity: 1;
    bottom: 20%;
    transition: 350ms ease-in-out;
  }

  .imageContainer:hover .carouselImg, .imageContainer.hover .carouselImg {
    -webkit-filter: blur(4px);
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  .imageContainer:hover .carouselImg.image-scroll, .imageContainer.hover .carouselImg.image-scroll {
    -webkit-filter: blur(4px);
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  .imageContainer:hover .textContainer-carousel, .imageContainer.hover .textContainer-carousel {
    bottom: 40%;
    transition: 400ms ease-in-out;
  }

  .imageContainer:hover .textContainer-scroll, .imageContainer.hover .textContainer-scroll {
    bottom: 40%;
    transition: 400ms ease-in-out;
  }

  .carouselImg {
    display: block;
    margin-left: 0;
    width: 100%;
    height: 74vh;
    aspect-ratio: auto;
    object-fit: cover;
    transition: 200ms ease-in-out;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
  }

  .carouselScroll {
    width: 70vh;
    left: 0;
    margin-right: 0;
  }

  .imageContainer.container-scroll {
    position: relative;
    height: 38vh;
    width: 70vh;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-left: 15vw;
  }

  .carouselImg.image-scroll {
    display: block;
    margin-bottom: 50px;
    margin-left: 0;
    width: 70vw;
    height: 38vh;
    aspect-ratio: auto;
    object-fit: cover;
  }

  div.textContainer-scroll {
    color: white ;
    font-size: 5vw;
    line-height: normal;
    font-family: "Josefin Sans";
    text-transform: uppercase;
    float: left;
    position: absolute;
    width: 100%;
    /*border: solid 2px blue;*/
    margin-bottom: 0;
    bottom: 0;

  }

  div.textContainer-carousel {
    color: white ;
    font-size: 5vw;
    line-height: normal;
    font-family: "Josefin Sans";
    text-transform: uppercase;
    float: left;
    position: absolute;
    width: 56%;
    /*border: solid 2px blue;*/
    margin-bottom: 0;
    bottom: 0;
    transition: 400ms ease-in-out;
  }

  div.hoverText {
    color: white ;
    font-size: 3vw;
    line-height: normal;
    font-family: "Josefin Sans";
    font-style: italic;
    float: left;
    position: absolute;
    width: 30%;
    /*border: solid 2px blue;*/
    margin-bottom: 0;
    bottom:0;
    height: auto;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: 350ms ease-in-out;
  }

  span {
    top: 50%;
    /*border: solid 2px yellow;*/
  }


  body {

    background-color: #F2F2F2;
  }

  .App {
    background-color: #F2F2F2;
    height: auto;
  }

  div.indicatorList {
    /*border: solid 2px blue;*/
    width: 22vw;
    height: 76vh;
    position: relative;
    float: right;
    margin-top: 4%;
    margin-right: 2%;
    padding: 0;
    font-size: 20px;
  }

  @media screen and (max-width: 880px) {
    .indicatorList{
      display: none;
    }
    .carousel {
      display: none;
    }

    .carouselDiv {
      padding-left: 0 ;
    }
  }

  @media screen and (min-width: 881px) {
    .carouselScroll {
      display: none;
    }
  }

</style>
