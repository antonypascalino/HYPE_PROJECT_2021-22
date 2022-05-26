<template>
  <div class="App">
    <TheHeader/>
    <div class="carouselDiv">
      <div class="indicatorList">
        <carousel-indicator
          @change="change"
          class = "carousel-inidcator"
        />
      </div>
      <carousel
        @next="next"
        @prev="prev"
        class = "carousel"
      >
        <carousel-slide v-for = "(slide,index) in slides"
                        :key="slide"
                        :index="index"
                        :visibleSlide = "visibleSlide"
        >
          <div class="imageContainer">
            <img class= "carouselImg" :src="slide">
          </div>
        </carousel-slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "~/components/Carousel";
import CarouselSlide from "~/components/CarouselSlide";
import TheHeader from "~/components/TheHeader";

export default {
  layout: 'empty',

  data() {
    return {
        slides: [
          require('@/static/carousel/piazzamaggiore01.jpg'),
          require('@/static/carousel/2.jpg'),
          require('@/static/carousel/piazzamaggiore02.jpg'),
        ],
        visibleSlide :0,
    }
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    }
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
    change() {
      this.visibleSlide = 2;
    }
  },
  components : {
    Carousel,
    CarouselSlide,
    TheHeader
  }
}
</script>

<style>

  .carouselDiv {
    padding-top: 5%;
    padding-bottom: 3%;
    padding-left: 4%;
    border: 2px solid blue;

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
  }

  .carouselImg {
     aspect-ratio: auto;
     margin-left: 0;
     flex-shrink: 0;
     min-width: 100%;
     min-height: 100%
  }

  .App {
    background-color: #EBEBEB;
  }

  .indicatorList {
    height: 600px;
    width: 200px;
    border: 2px solid blue;
    position: relative;
    overflow: hidden;
    float: right;
    margin-top: 6%;
  }


</style>
