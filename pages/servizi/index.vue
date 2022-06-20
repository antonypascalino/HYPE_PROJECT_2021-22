<template>
  <div class="App">
    <TheHeader />
    <section class="breadcrumb-section">
      <Breadcrumb :crumbs="crumbs" @selected="selected" />
    </section>
    <div class="carouselDiv">
      <div class="indicatorList services">
        <div class="list">
          <carousel-indicator
            v-for="(service, index) in serviceList"
            :key="service.id"
            :index="index"
            :visibleSlide="visibleSlide"
            :title="service.name"
            @change="change(service.id)"
          ></carousel-indicator>
        </div>
      </div>
      <carousel @next="next" @prev="prev" class="carousel">
        <carousel-slide
          v-for="(service, index) in serviceList"
          :key="index"
          :index="index"
          :visibleSlide="visibleSlide"
          :id="service.id"
          :name="'servizi'"
          :direction="direction"
        >
          <div class="imageContainer" @wheel="wheel($event.deltaY)">
            <nuxt-link :to="`/servizi/${service.id}`">
              <img
                class="carouselImg"
                :src="require(`@/static/Services/${service.imgBackground}`)"
                :alt="service.name"
              />
            </nuxt-link>
            <div class="textContainer-carousel">{{ service.name }}</div>
            <div class="hoverText">Scopri di più</div>
          </div>
        </carousel-slide>
      </carousel>
      <div
        class="carouselScroll"
        v-for="(service, index) in serviceList"
        :key="index"
        :id="service.id"
      >
        <div class="imageContainer container-scroll">
          <nuxt-link class="scroll-link" :to="`/servizi/${service.id}`">
            <img
              class="carouselImg image-scroll"
              :src="require(`@/static/Services/${service.imgBackground}`)"
              :alt="service.name"
            />
          </nuxt-link>
          <div class="textContainer-scroll">{{ service.name }}</div>
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

export default {
  layout: 'empty',

  data() {
    return {
      serviceList: [],
      visibleSlide: 0,
      crumbs: ['HOME', 'SERVIZI'],
      direction: 'left',
      loading: false,

      scrollingDirection: 0,
      lastScroll: 9999,
      scrollIdleTime: 90, // time interval that we consider a new scroll event: 80 is quite good
    }
  },

  async asyncData({ $axios }) {
    // const { data } = await $axios.get('api/services')
    const { data } = await $axios.get('http://localhost:3000/api/services')
    return {
      serviceList: data,
    }
  },

  computed: {
    slidesLen() {
      return this.serviceList.length
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
  },
}
</script>

<style>
div.indicatorList.services {
  margin-top: 30vh;
  height: 12vh;
}

.indicatorList.services .carousel-indicator {
  height: 5vh;
}
</style>
