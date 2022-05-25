<template>
  <div class="App">
    <carousel
      @next="next"
      @prev="prev"
    >
      <carousel-slide v-for = "(slide,index) in slides"
                      :key="slide"
                      :index="index"
                      :visibleSlide = "visibleSlide"
                      >
        <img :src= "slide" :alt="slide"/>
      </carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from "~/components/Carousel";
import CarouselSlide from "~/components/CarouselSlide";

export default {
  data() {
    return {
        slides: [
          '@/static/carousel/piazzamaggiore01.jpg',
          '@/static/carousel/2.jpg',
          '@/static/carousel/piazzamaggiore02.jpg',
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
    }
  },
  components : {
    Carousel,
    CarouselSlide,
  }
}
</script>

<style>
  .app {
    display: flex;
    justify-content: center;
  }
</style>
