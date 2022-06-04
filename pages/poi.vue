<template>
  <div class="App">
    <TheHeader/>
    <section class="breadcrumb-section">
      <Breadcrumb :crumbs="crumbs" @selected="selected"/>
    </section>
    <div class="carouselDiv">
      <div class="indicatorList">
        <div class = "list">
        <carousel-indicator
            v-for = "poi in poiList"
            :key = "poi.id"
            :title = "poi.name"
            @change = "change(poi.id)"
            class = "carousel-indicator"
          ></carousel-indicator>
        </div>
      </div>
      <carousel
        @next="next"
        @prev="prev"
        class = "carousel"
      >
        <carousel-slide v-for = "(poi, index) in poiList"
                        :key="poi"
                        :index="index"
                        :visibleSlide = "visibleSlide"
                        :id="poi.id"
        >
          <div class="imageContainer">
            <img class= "carouselImg" :src="require(`@/static/carousel/${poi.img1}`)" :alt="poi.name">
            <div class="textContainer">{{poi.name}}</div>
          </div>
        </carousel-slide>
      </carousel>
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
    // const { data } = await $axios.get('api/cats')
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
    padding-top: 5%;
    padding-bottom: 3%;
    padding-left: 4%;
  }

  carousel-slide {
    left: 0;
  }

  .imageContainer {
    /*border: solid blue 2px;*/
    width: 950px;
    height: 600px;
    overflow: hidden;
    margin-left: 0;
    margin-top: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .carouselImg:hover {
    -webkit-filter: blur(4px);
    cursor: pointer;
    transition: 200ms;
  }

  .carouselImg {
     aspect-ratio: auto;
     margin-left: 0;
     flex-shrink: 0;
     min-width: 100%;
     min-height: 100%;

  }

  div.textContainer{
    color: white ;
    font-size: 80px;
    line-height: normal;
    font-family: "Josefin Sans";
    text-transform: uppercase;
    float: left;
    position: absolute;
    bottom: 28px;
    width: 800px;
    left: 0;
    margin-bottom: 2.5%;
  }

  .App {
    background-color: #EBEBEB;
  }

  div.indicatorList {
    height: 600px;
    width: 200px;
    position: relative;
    float: right;
    margin-top: 6%;
    margin-right: 2%;
    padding: 0;
    font-size: 20px;
  }

  .carousel-indicator {
    position: relative;
    color: black;
  }

  .carousel-indicator:hover {
    color: #C13939;
  }

  ul.list {
    width: 200px;
    padding-left: 0;
  }

  @media screen and (max-width: 1220px) {
    .indicatorList{
      display: none;
    }
  }
</style>
