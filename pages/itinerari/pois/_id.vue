<template>
  <main class="page-container">
    <div class="body-container">
      <StaticHalfImage :slide="`../../Poi/${imgBackground}`" :title="name" />
      <section class="breadcrumb-section1">
        <breadcrumb
          :default-route="[
            { title: 'HOME', path: '/' },
            { title: 'Itinerari', path: '/itinerari/' },
          ]"
          :current-page="name"
        />
      </section>

      <section class="section-description">
        <div class="title-container">DESCRIZIONE</div>
        <p class="text-container">{{ description }}</p>
      </section>

      <section class="section-description">
        <div class="title-container">GALLERY</div>
        <div class="row mt-1">
          <card
            v-for="(img, index) of imgArray"
            class="col-sm-2 m-1"
            :key="index"
            :img="`../../Poi/${img}`"
          />
        </div>
      </section>

      <section class="section-description1 dove-si-trova">
        <div class="title-container">DOVE SI TROVA</div>
        <div class="poi-address-container">
          <div class="poi-address">
            <i
              class="mdi mdi-map-marker-check-outline"
              style="margin: 0; color: #c13939"
            />
            {{ address }}


            <a  target="_blank" :href="mapLink">
              <baseButton style="margin-top: 20px;" title="Vedi su Google Maps" goto="" />
            </a>
          </div>
        </div>
        <Map :x="x" :y="y" :name="name"> </Map>
      </section>

      <section class="section-description">
        <div class="title-container">INFORMAZIONI</div>
        <p class="text-container">{{ visit_info }}</p>
      </section>

      <div class="button-container">
        <baseButton title="Tutti gli Itinerari" goto="/itinerari/">
        </baseButton>
      </div>
    </div>
  </main>
</template>

<script>
import CommonMixin from '~/mixins/common'
import staticHalfImage from '~/components/StaticHalfImage'
import Breadcrumb from '~/components/Breadcrumb.vue'
import Map from '~/components/Map'
import baseButton from '~/components/BaseButton'

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components: {
    staticHalfImage,
    Breadcrumb,
    Map,
    baseButton,
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('api/pois/'+ id)
    // const { data } = await $axios.get('http://localhost:3000/api/pois/' + id)
    return {
      name: data.name,
      visit_info: data.visit_info,
      imgBackground: data.imgBackground,
      imgArray: data.imgArray,
      description: data.description,
      x: data.x,
      y: data.y,
      address: data.address,
      mapLink: data.mapLink,
    }
  },
  data() {
    return {
      name1: this.name,
      crumbs: ['HOME', 'PUNTI DI INTERESSE'],
    }
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
.page-container {
  background-color: #f2f2f2;
}

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

.button-container {
  width: 100%;
  height: 60px;
  padding: 20px;
}

.text-container {
  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px;
}

.row {
  margin: auto;
  width: 100%;
  justify-content: center;
  padding: 10px;
}
.breadcrumb-section1 {
  margin-right: 20px;
  margin-top: -5px;
}

.button-container {
  text-align: right;
}

.main-page {
  background-color: #f2f2f2;
}

.poi-address-container {
  position: absolute;
  width: 25vw;
  height: 40vh;
  /*border: 2px solid #c13939;*/
  /*z-index: 2;*/
  right: 5vw;
  margin-top: 1vw;
  vertical-align: middle;
  gap: 5px;
  align-items: center;
  justify-content: center;
}

.poi-address {
  font-family: 'Josefin Sans';
  font-size: 1.5vw;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3vw;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 930px) {
  .poi-address-container{
    display: none;
  }
}
@media screen and (max-width: 500px) {
  .title-container{
    padding-left: 0px;
    text-align: center;
  }

}
</style>
