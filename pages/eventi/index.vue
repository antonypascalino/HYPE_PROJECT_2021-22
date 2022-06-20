<template>
  <div class="App">
    <TheHeader />
    <section class="breadcrumb-section">
      <breadcrumb
        :default-route="[{ title: 'Home', path: '/' }]"
        current-page="Eventi"
      />
    </section>
    <div class="carouselDiv">
      <div class="indicatorList events">
        <select-filter @filter-change="filterBySeason"/>
        <div class="list">
          <carousel-indicator
            v-for="(ev, index) in eventList"
            :key="ev.id"
            :index="index"
            :visibleSlide="visibleSlide"
            :title="ev.name"
            @change="change(ev.id)"
          ></carousel-indicator>
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
            </nuxt-link>
            <div class="textContainer-carousel">{{ ev.name }}</div>
            <div class="hoverText">Scopri di più</div>
          </div>
        </carousel-slide>
      </carousel>
      <div
        class="carouselScroll"
        v-for="(ev, index) in eventList"
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
          <div class="hoverText">Scopri di più</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '~/components/Carousel'
import CarouselSlide from '~/components/CarouselSlide'
import CarouselIndicator from '~/components/CarouselIndicator'
import TheHeader from '~/components/TheHeader'
import Breadcrumb from '~/components/Breadcrumb'
import SelectFilter from "~/components/SelectFilter";

export default {
  layout: 'empty',

  data() {
    return {
      filteredList: [],
      eventList: [],
      visibleSlide: 0,
      crumbs: ['HOME', 'EVENTI'],
      direction: 'left',
      loading: false,

      scrollingDirection: 0,
      lastScroll: 9999,
      scrollIdleTime: 90, // time interval that we consider a new scroll event: 80 is quite good
    }
  },

  async asyncData({ $axios }) {
    // const { data } = await $axios.get('api/events')
    const { data } = await $axios.get('http://localhost:3000/api/events')
    return {
      eventList: data,
    }
  },

  computed: {
    slidesLen() {
      return this.eventList.length
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
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1
      } else {
        this.visibleSlide--
      }
      this.direction = 'right'
    },
    change(index) {
      this.visibleSlide = index - 1
    },
    // Change the season filter option
    filterBySeason (chosenValue) {
      this.filteredList = [];
      if(chosenValue === 'Estate'){
        for (const x of this.eventList){
          if(x.type === 0)
            this.filteredList.push(x)
        }
      }else if (chosenValue === 'Inverno'){
        for (const x of this.eventList){
          if(x.type === 1)
            this.filteredList.push(x)
        }
      }else{
        this.filteredList = this.eventList
      }
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
      this.lastScroll = performance.now()
    },

    selected(crumb) {
      console.log(crumb)
    },
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
  components: {
    Carousel,
    CarouselSlide,
    TheHeader,
    CarouselIndicator,
    Breadcrumb,
    SelectFilter
  },
}
</script>

<style>
div.indicatorList.events {
  margin-top: 20vh;
  height: 40vh;
}

.indicatorList.events .carousel-indicator {
  height: 5vh;
}
</style>
