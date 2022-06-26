<template>
  <div class="App">
    <TheHeader />
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
              <div class="hoverText">
                {{ ev.carousel_desc }}
              </div>
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
  </div>
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
      scrollIdleTime: 90, // time interval that we consider a new scroll event: 80 is quite good
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
      this.lastScroll = performance.now()
    },

    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
  head() {
    return {
      title: 'insideBO | Eventi',
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
