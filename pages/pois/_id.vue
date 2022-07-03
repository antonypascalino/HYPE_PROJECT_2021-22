<!--
  Page: pois/_id
  Description: In this page is described a specific poi
-->

<template>
  <main class="page-container">
    <!-- Body Section -->
    <div class="body-container">
      <!-- Static Half image Section -->
      <StaticHalfImage :slide="`../Poi/${imgBackground}`" :title="name" />
      <!-- BreadCrumb Section -->
      <section class="breadcrumb-section1">
        <breadcrumb
          :default-route="[
            { title: 'HOME', path: '/' },
            { title: 'Punti di Interesse', path: '/pois/' },
          ]"
          :current-page="name"
        />
      </section>

      <!-- Description Section -->
      <section class="section-description">
        <div class="title-container">DESCRIZIONE</div>
        <p class="text-container">{{ description }}</p>
      </section>

      <!-- Gallery Section -->
      <section class="section-description">
        <div class="title-container">GALLERY</div>
        <div class="row mt-1">
          <card
            v-for="(img, index) of imgArray"
            class="col-sm-2 m-1"
            :key="index"
            :img="`../Poi/${img}`"
          />
        </div>
      </section>

      <!-- Map Section -->
      <section class="section-description1 dove-si-trova">
        <div class="title-container">DOVE SI TROVA</div>
        <div class="poi-address-container">
          <div class="poi-address">
            <i
              class="mdi mdi-map-marker-check-outline"
              style="margin: 0; color: #c13939"
            />
            {{ address }}
            <a target="_blank" :href="mapLink">
              <baseButton
                style="margin-top: 20px"
                title="Vedi su Google Maps"
                goto=""
              />
            </a>
          </div>
        </div>
        <Map :googleLink="googleLink"> </Map>
      </section>

      <section class="section-container">
        <div class="title-container">EVENTI OSPITATI</div>
        <!--Cards of events -->
        <div class="events-container">
          <div class="event-card-container row mt-4">
            <cardInfo
              v-for="(event, index) of eventList"
              class="col-sm-1 m-2"
              :key="`index-${index}`"
              :name="event.name"
              :img="`../Events/${event.imgBackground}`"
              :id="event.id"
              link="eventi"
              :first-day="event.firstDay"
              :address="event.address"
            />
          </div>

          <!--Button for display all the events -->
          <baseButton title="Tutti gli eventi" goto="eventi"></baseButton>
        </div>
      </section>

      <section class="section-container">
        <div class="title-container">ITINERARI CHE PASSANO DA QUI</div>
        <!--Cards of Points of interest (Bootstrap)-->
        <div class="">
          <div class="poi-card-container row mt-4">
            <cardInfo
              v-for="(poi, index) of poiList"
              class="col-sm-1 m-2"
              :key="`index-${index}`"
              :name="poi.name"
              :img="`../Poi/${poi.imgBackground}`"
              :id="poi.id"
              link="pois"
            />
          </div>
        </div>
      </section>

      <!-- Information Section -->
      <section class="section-description">
        <div class="title-container">INFORMAZIONI</div>
        <p class="text-container">{{ visit_info }}</p>
      </section>

      <div class="button-container">
        <baseButton title="Tutti i Punti di interesse" goto="/pois/" />
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
import cardInfo from '~/components/cardInfo'

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components: {
    staticHalfImage,
    Breadcrumb,
    Map,
    baseButton,
    cardInfo,
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('api/pois/' + id)
    // const { data } = await $axios.get('http://localhost:3000/api/pois/' + id)
    const events = await $axios.get(`http://localhost:3000/api/4events1`)
    return {
      name: data.name,
      visit_info: data.visit_info,
      imgBackground: data.imgBackground,
      imgArray: data.imgArray,
      description: data.description,
      googleLink: data.googleLink,
      address: data.address,
      mapLink: data.mapLink,
      eventList: events.data,
    }
  },
  data() {
    return {
      name1: this.name,
    }
  },

  head() {
    return {
      title: 'insideBO • ' + this.name,
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
.body-container {
  margin-top: 110px;
}
.page-container {
  background-color: #f2f2f2;
  margin-top: -65px;
}
.section-description {
  font-family: 'Raleway', 'Avenir', sans-serif;
  font-style: normal;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 500;
  background-color: #f2f2f2;
  text-align: justify;
  text-justify: inter-word;
}
.title-container {
  margin-top: 50px;
  width: 100%;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  color: #c13939;
  background-color: #f2f2f2;
  padding-left: 80px;
}
.button-container {
  width: 100%;
  height: 60px;
  padding: 20px;
}
.poi-address-container {
  position: absolute;
  width: 30vw;
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
  font-size: 1.3vw;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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

.section-container {
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 80px;
  color: #c13939;
  text-align: center;
  align-content: center;
  justify-content: center;
}

.events-container {
  width: 100%;
  align-content: center;
  justify-content: center;
  text-align: center;
}

@media screen and (max-width: 930px) {
  .poi-address-container {
    display: none;
  }
}

/*Mobile visualization*/
@media screen and (max-width: 500px) {
  .title-container {
    padding-left: 0px;
    text-align: center;
  }
  .text-container {
    font-size: 16px;
  }
}
</style>
