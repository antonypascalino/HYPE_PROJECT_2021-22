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
            <img class= "carouselImg" :src="require(`@/static/Poi/${poi.imgBackground}`)" :alt="poi.name">
            <div class="textContainer-carousel">{{ poi.name }}</div>
          </div>
        </carousel-slide>
      </carousel>
      <div class="carouselScroll"
                      v-for = "(poi, index) in poiList"
                      :key="index"
                      :id="poi.id">
        <div class="imageContainer container-scroll">
          <img class= "carouselImg image-scroll" :src="require(`@/static/Poi/${poi.imgBackground}`)" :alt="poi.name">
          <p class="textContainer-scroll">{{poi.name}}</p>
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
    padding-left: 4%;
    width: 100%;
    height: 100%;
  }

  carousel-slide {
    left: 0;
  }

  .imageContainer {
    position: relative;
    /*border: solid blue 2px;*/
    width: 70vw;
    height: 76vh;
    margin-top: 5vh;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .carouselImg {
    display: block;
    margin-left: 0;
    width: 100%;
    height: 74vh;
    aspect-ratio: auto;
    object-fit: cover;
    /*margin-bottom: 100px;*/
  }

  .carouselImg:hover {
    -webkit-filter: blur(4px);
    cursor: pointer;
    transition: 200ms;
  }

  .imageContainer.container-scroll {
    height: 38vh;
    margin-right: 0;
    margin-top: 0;
    margin-left: 10vw;
  }

  .carouselImg.image-scroll {
    margin-bottom: 50px;
  }

  .textContainer-scroll {
    margin-top: -90px;
    color: white ;
    font-size: 5vw;
    font-family: "Josefin Sans";
    text-transform: uppercase;
    box-sizing: content-box;
    float: left;
  }

  div.textContainer-carousel {
    color: white ;
    font-size: 5vw;
    /*line-height: normal;*/
    font-family: "Josefin Sans";
    text-transform: uppercase;
    float: left;
    position: absolute;
    width: 100%;
    /*border: solid 2px blue;*/
    margin-bottom: 0;
    bottom: 0;
  }


  .App {
    background-color: #EBEBEB;
    height: auto;
  }

  div.indicatorList {
    /*border: solid 2px blue;*/
    width: 20vw;
    height: 76vh;
    position: relative;
    float: right;
    margin-top: 3%;
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

  @media screen and (max-width: 880px) {
    .indicatorList{
      display: none;
    }
    .carousel {
      display: none;
    }
  }

  @media screen and (min-width: 881px) {
    .carouselScroll {
      display: none;
    }
  }

</style>
