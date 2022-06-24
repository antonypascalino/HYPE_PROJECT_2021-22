<template>
  <main class="page-container">
    <div class="body-container">
      <StaticHalfImage
        :slide="`../Itineraries/${imgBackground}`"
        :title="name"
      />
      <section class="breadcrumb-section5">
        <breadcrumb
          :default-route="[
            { title: 'HOME', path: '/' },
            { title: 'Itinerari', path: '/Itinerari/' },
          ]"
          :current-page="name"
        />
      </section>

      <div class="title-container">I LUOGHI DELL'ITINERARIO</div>

      <ItineraryPath />

      <!--      <section class="section-description">-->
      <!--        <div class="poi-card-container row mt-4">-->
      <!--          <cardInfo-->
      <!--            v-for="(poi, index) of poiList"-->
      <!--            class="col-sm-1 m-2"-->
      <!--            :key="`index-${index}`"-->
      <!--            :name="poi.name"-->
      <!--            :img="`../Poi/${poi.imgBackground}`"-->
      <!--            :id="poi.id"-->
      <!--            link="pois"-->
      <!--          />-->
      <!--        </div>-->
      <!--        <p class="text-container"></p>-->
      <!--      </section>-->

      <section class="section-description">
        <div class="title-container">DESCRIZIONE</div>
        <p class="text-container">{{ description }}</p>
      </section>
      <section class="section-description">
        <div class="title-container">DURATA</div>
        <p class="text-container">{{ duration }}</p>
      </section>

      <section class="section-description">
        <div class="title-container">MAPPA ITINERARIO</div>
        <div class="map-container">
          <a  target="_blank" :href=link>

          <img class="map-image" :src="require(`@/static/Itineraries/${this.map}`)"/>
          </a>
          <div class="map-text"> <a target="_blank" style="text-decoration: none;color: #C13939" :href=link> Apri in Maps</a></div>
        </div>

      </section>

      <div class="button-container">
        <baseButton title="Tutti gli itinerari" goto="/itinerari/">
        </baseButton>
      </div>
    </div>
  </main>
</template>

<script>
import CommonMixin from '~/mixins/common'
import staticHalfImage from '~/components/StaticHalfImage'
import Breadcrumb from '~/components/Breadcrumb.vue'
// import cardInfo from '~/components/CardInfo'
import ItineraryPath from '~/components/ItineraryPath'

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components: {
    staticHalfImage,
    Breadcrumb,
    // cardInfo,
    ItineraryPath,
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    // const { data } = await $axios.get('api/itineraries/'+ id)
    const { data } = await $axios.get(
      'http://localhost:3000/api/itineraries/' + id
    )
    return {
      name: data.name,
      duration: data.duration,
      imgBackground: data.imgBackground,
      description: data.description,
      map: data.map,
      link:data.link
    }
  },
  data() {
    return {
      crumbs: ['HOME', 'ITINERARI'],
    }
  },
  methods: {
    backToList() {
      this.$router.push('/itinerari/')
    },
  },
  head() {
    return {
      title: 'insideBO | ' + this.name,
    }
  },
  mounted() {
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
}
</script>
<style>
.section-description {
  font-family: 'Raleway', sans-serif;
  font-style: normal;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 500;
  background-color: #f2f2f2;
  text-align: justify;
  text-justify: inter-word;
}

.page-container {
  margin-top: -65px;
  background-color: #f2f2f2;
}
.body-container {
  margin-top: 110px;
}
.title-container {
  margin-top: 40px;
  width: 100%;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  display: flex;
  color: #c13939;
  background-color: #f2f2f2;
  padding-left: 80px;
}
.row {
  margin: auto;
  width: 100%;
  justify-content: center;
  padding: 10px;
}
.button-container {
  width: 100%;
  height: 100px;
  padding: 20px;
}

.text-container {
  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px;
}

.button-container {
  text-align: right;
}

.breadcrumb-section5 {
  float: right;
  margin-right: 20px;
  margin-top: -10px;
}
.main-page {
  background-color: #f2f2f2;
}

.map-container{
  margin:20px;
  width:60%;
  overflow: hidden;
  transition: 300ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
}

.map-image {
  aspect-ratio: auto;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 300ms ease-in-out;
  text-align: center;
}

.map-container:hover .map-text,
.map-container.hover .map-text {
  opacity: 100%;
  transition: 300ms ease-in-out;
}

.map-container:hover .map-image,
.map-container.hover .map-image {
  opacity: 30%;
  transition: 300ms ease-in-out;
}
.map-text {
  opacity: 0;
  color: #c13939;
  position: absolute;
  text-align: center;
  text-justify: inter-word;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  font-size: 1.2vw;
}
</style>
