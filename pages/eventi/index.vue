<!--
  Page: eventi/Index
  Description: In this page are reported some of the events that the city guests represented in a carousel.
-->
<template>
  <main class="App">
    <!-- Header Section -->
    <TheHeader />

    <!-- BreadCrumb Section -->
    <section class="breadcrumb-section">
      <breadcrumb
        :default-route="[{ title: 'HOME', path: '/' }]"
        current-page="Eventi"
      />
    </section>

    <div class="carouselDiv">
      <div class="indicatorList events">
        <div class="filter-container">
          <select-filter
            class="select-filter"
            @filter-change="filterBySeason"
          />
        </div>
        <div class="list events">
          <carousel-indicator
            v-for="(ev, index) in filteredList"
            :key="ev.id"
            :index="index"
            :visibleSlide="visibleSlide"
            :title="ev.name"
            @change="change(index)"
          />
        </div>
      </div>
      <carousel @next="next" @prev="prev" class="carousel">
        <carousel-slide
          v-for="(ev, index) in filteredList"
          :key="index"
          :index="index"
          :visibleSlide="visibleSlide"
          :id="ev.id"
          :name="'eventi'"
          :direction="direction"
        >
          <div class="imageContainer" @wheel="wheel($event.deltaY)">
            <nuxt-link :to="`/eventi/${ev.id}`">
              <img
                class="carouselImg"
                :src="require(`@/static/Events/${ev.imgBackground}`)"
                :alt="ev.name"
              />
              <div class="textContainer-carousel">{{ ev.name }}</div>
              <div class="hoverText">{{ ev.carousel_desc }}</div>
            </nuxt-link>
          </div>
        </carousel-slide>
      </carousel>
      <div
        class="carouselScroll"
        v-for="(ev, index) in filteredList"
        :key="index"
        :id="ev.id"
      >
        <div class="imageContainer container-scroll">
          <nuxt-link :to="`/eventi/${ev.id}`">
            <img
              class="carouselImg image-scroll"
              :src="require(`@/static/Events/${ev.imgBackground}`)"
              :alt="ev.name"
            />
          </nuxt-link>
          <div class="textContainer-scroll">{{ ev.name }}</div>
          <div class="hoverText scroll">{{ ev.carousel_desc }}</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Carousel from '~/components/Carousel'
import CarouselSlide from '~/components/CarouselSlide'
import CarouselIndicator from '~/components/CarouselIndicator'
import TheHeader from '~/components/TheHeader'
import Breadcrumb from '~/components/Breadcrumb'
import selectFilter from '~/components/SelectFilter'

export default {
  layout: 'empty',

  data() {
    return {
      eventList: [],
      visibleSlide: 0,
      direction: 'left',
      loading: false,
      filteredList: [],
      scrollingDirection: 0,
      lastScroll: 9999,
      scrollIdleTime: 2200, // time interval that we consider a new scroll event: 80 is quite good
    }
  },

  async asyncData({ $axios }) {
    // const { data } = await $axios.get('api/events')
    const { data } = await $axios.get('http://localhost:3000/api/events')
    return {
      eventList: data,
      filteredList: data,
    }
  },

  computed: {
    slidesLen() {
      return this.filteredList.length
    },
  },

  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0
      } else {
        this.visibleSlide++
      }
      this.direction = 'left'
      this.lastScroll = performance.now()
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1
      } else {
        this.visibleSlide--
      }
      this.direction = 'right'
      this.lastScroll = performance.now()
    },
    change(index) {
      if (this.visibleSlide < index) {
        this.direction = 'left'
      } else {
        this.direction = 'right'
      }
      this.visibleSlide = index
    },
    // Change the season filter option
    filterBySeason(chosenValue) {
      this.filteredList = []
      if (chosenValue === 'Estate') {
        for (const x of this.eventList) {
          if (x.type === 0) this.filteredList.push(x)
        }
      } else if (chosenValue === 'Inverno') {
        for (const x of this.eventList) {
          if (x.type === 1) this.filteredList.push(x)
        }
      } else {
        this.filteredList = this.eventList
      }
      this.visibleSlide = 0
    },
    wheel(deltaY) {
      // adding .once in the template after @wheel
      // if(deltaY > 0) {
      //   this.next();
      // } else {
      //   this.prev();
      // }
      const scrollingDirection = this.scrollingDirection
      const lastScroll = this.lastScroll
      const scrollIdleTime = this.scrollIdleTime

      const delta = deltaY
      const timeNow = performance.now()
      if (
        delta > 0 &&
        (scrollingDirection !== 1 || timeNow > lastScroll + scrollIdleTime)
      ) {
        this.next()
        this.scrollingDirection = 1
      } else if (
        delta < 0 &&
        (scrollingDirection !== 2 || timeNow > lastScroll + scrollIdleTime)
      ) {
        this.prev()
        this.scrollingDirection = 2
      }
      // this.lastScroll = performance.now()
    },

    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
  head() {
    return {
      title: 'insideBO • Eventi',
    }
  },
  components: {
    Carousel,
    CarouselSlide,
    TheHeader,
    CarouselIndicator,
    Breadcrumb,
    selectFilter,
  },
}
</script>

<style>
.breadcrumb-section {
  margin-top: 70px;
  background: transparent;
}
.carouselDiv {
  padding-top: 2%;
  padding-left: 4%;
  width: 100%;
  height: 90vh;
}
.imageContainer {
  position: relative;
  width: 70vw;
  height: 74vh;
  margin-top: 7vh;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.35);
  filter: brightness(90%);
}
.imageContainer:hover .hoverText,
.imageContainer.hover .hoverText {
  visibility: visible;
  opacity: 1;
  bottom: 5%;
  transition: 400ms ease-in-out;
  transition-delay: 200ms;
}
.imageContainer:hover .carouselImg,
.imageContainer.hover .carouselImg {
  -webkit-filter: blur(4px) brightness(70%);
  cursor: pointer;
  transition: 400ms ease-in-out;
  transition-delay: 200ms;
}
.imageContainer:hover .carouselImg.image-scroll,
.imageContainer.hover .carouselImg.image-scroll {
  -webkit-filter: blur(4px) brightness(70%);
  cursor: pointer;
  transition: 400ms ease-in-out;
  transition-delay: 200ms;
}
.imageContainer:hover .textContainer-carousel,
.imageContainer.hover .textContainer-carousel {
  bottom: 20%;
  transition: 400ms ease-in-out;
  transition-delay: 200ms;
}
.imageContainer:hover .textContainer-scroll,
.imageContainer.hover .textContainer-scroll {
  bottom: 20%;
  transition: 400ms ease-in-out;
  transition-delay: 200ms;
}
.carouselImg {
  display: block;
  margin-left: 0;
  width: 100%;
  height: 74vh;
  aspect-ratio: auto;
  object-fit: cover;
  transition: 400ms ease-in-out;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.carouselScroll {
  width: auto;
  left: 0;
  margin-right: 0;
}
.imageContainer.container-scroll {
  position: relative;
  height: 38vh;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  margin-left: 15vw;
  margin-right: 0;
}
img.carouselImg.image-scroll {
  display: block;
  margin-bottom: 50px;
  margin-left: 0;
  width: 70vw;
  height: 38vh;
  aspect-ratio: auto;
  object-fit: cover;
}
div.textContainer-scroll {
  color: white;
  font-size: 5vw;
  line-height: normal;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  float: left;
  position: absolute;
  width: 56%;
  margin-bottom: 0;
  bottom: 0;
  transition: 400ms ease-in-out;
}
div.textContainer-carousel {
  color: white;
  font-size: 5vw;
  line-height: normal;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  float: left;
  position: absolute;
  width: 56%;
  margin-bottom: 0;
  bottom: 0;
  transition: 400ms ease-in-out;
}
div.hoverText {
  color: white;
  font-size: 2vw;
  line-height: normal;
  font-family: 'Josefin Sans';
  font-style: italic;
  float: left;
  position: absolute;
  margin-bottom: 0;
  bottom: 0;
  height: auto;
  left: 5px;
  visibility: hidden;
  opacity: 0;
  transition: 400ms ease-in-out;
  width: 70vw;
}
div.hoverText.scroll {
  width: 70vw;
}
span {
  top: 50%;
  /*border: solid 2px yellow;*/
}
.App {
  background-color: #f2f2f2;
  height: auto;
}
body {
  overscroll-behavior-y: none;
  background-color: #f2f2f2;
}
div.indicatorList {
  /*border: solid 2px blue;*/
  width: 20vw;
  height: 76vh;
  position: relative;
  float: right;
  margin-top: 4%;
  margin-right: 2%;
  padding: 0;
  font-size: 20px;
}
/* Mobile visualization without indicator list*/
@media screen and (max-width: 880px) {
  .indicatorList {
    display: none;
  }
  .carousel {
    display: none !important;
  }

  .carouselDiv {
    padding-left: 0;
  }
}

/* Desktop visualization */
@media screen and (min-width: 881px) {
  .carouselScroll {
    display: none;
  }
}
div.indicatorList.events {
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  vertical-align: middle;
}
div.list.events {
  width: auto;
  margin-top: 50px;
}
.filter-container {
  /*border: solid 2px black;*/
  height: auto;
  width: auto;
}
.indicatorList.events .carousel-indicator {
  height: 5vh;
}

@media screen and (max-width: 880px) {
  div.indicatorList.events {
    display: none;
  }
}
</style>
