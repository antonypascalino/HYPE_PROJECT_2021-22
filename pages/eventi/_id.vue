<!--
  Page: eventi/_id
  Description: In this page is described a specific event
-->

<template>
  <main class="page-container">
    <!-- Body Section -->
    <div class="body-container">
      <!-- Static Half image Section -->
      <StaticHalfImage :slide="`../Events/${imgBackground}`" :title="name" />
      <!-- BreadCrumb Section -->
      <section class="breadcrumb-section2">
        <breadcrumb
          :default-route="[
            { title: 'HOME', path: '/' },
            { title: 'Eventi', path: '/eventi/' },
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
            :img="`../Events/${img}`"
          />
        </div>
      </section>

      <!--Dov'è section-->
      <section class="section-description"><div class="title-container">LUOGO DELL'EVENTO</div></section>
      <section class="section-container bib">
        <!--Cards of Points of interest (Bootstrap)-->
        <div class="card-poi">
          <div class="poi-card-container row mt-4 poiEv">
            <cardInfo
              class="col-sm-1 m-2"
              :key="`index-${index}`"
              :name="poiList.name"
              :img="`../Poi/${poiList.imgBackground}`"
              :id="poiList.id"
              link="pois"
            />
          </div>
        </div>
      </section>

      <!-- Information Section -->
      <section class="container4">
        <div class="title-container">INFORMAZIONI</div>
        <br />
        <div class="row row1">
          <div class="col-sm-3">
            <h6 class="text-uppercase fw-bold mb-4 mdi mdi-tag">PREZZO</h6>
            <p>{{ price }}</p>
          </div>
          <div class="col-sm-3">
            <h6
              class="mdi mdi-map-marker-check-outline text-uppercase fw-bold mb-4"
            >
              INDIRIZZO
            </h6>
            <p>{{ address }}</p>
          </div>

          <div class="col-sm-3">
            <h6 class="mdi mdi-calendar-blank text-uppercase fw-bold mb-4">
              DATA
            </h6>
            <p>{{ date }}</p>
          </div>

          <div class="col-sm-4">
            <br />
            <h6 class="mdi mdi-web text-uppercase fw-bold mb-4">SITO WEB</h6>
            <a :href="website"
              ><p class="p-website">{{ website }}</p></a
            >
          </div>
        </div>
      </section>

      <div class="button-container">
        <baseButton title="Tutti gli eventi" goto="/eventi/" />
      </div>
    </div>
  </main>
</template>

<script>
import CommonMixin from '~/mixins/common'
import staticHalfImage from '~/components/StaticHalfImage'
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components: {
    staticHalfImage,
    Breadcrumb,
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const [data1,data2] = await Promise.all([
      // $axios.get('http://localhost:3000/api/events/' + id),
      // $axios.get('http://localhost:3000/api/poiGuestsEvent/' +id),
      $axios.get('api/events/' + id),
      $axios.get('api/poiGuestsEvent/' + id)
    ])
    return {
      name: data1.data.name,
      date: data1.data.date,
      imgBackground: data1.data.imgBackground,
      imgArray: data1.data.imgArray,
      description: data1.data.description,
      address: data1.data.address,
      price: data1.data.price,
      website: data1.data.website,
      poiList: data2.data[0].poi,
    }

  },

  methods: {
    backToList() {
      this.$router.push('/eventi/')
    },
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
  background-color: #f2f2f2;
  text-align: justify;
  text-justify: inter-word;
}

.section-container.bib {
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
.poi-card-container.row.mt-4.poiEv {
  justify-content: flex-start;
  margin-left: 7vw;
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
.breadcrumb-section2 {
  margin-right: 20px;
  margin-top: -5px;
}

.button-container {
  text-align: right;
}

.title-container {
  margin-left: 0;
}
.row.row1 {
  text-align: center;
  background-color: white;
  border: 4px solid #c13939;
  font-size: 20px;
  font-family: 'Josefin Sans';
  margin-left: 60px;
  margin-right: 60px;
  width: auto;
}
.mdi-map-marker-check-outline {
  color: #c13939;
}
.mdi-calendar-blank {
  color: #c13939;
}
.mdi-web {
  color: #c13939;
}
.mdi-tag {
  color: #c13939;
}

/*Mobile visualization*/
@media screen and (max-width: 500px) {
  .title-container {
    padding-left: 0px;
    text-align: center;
  }
  .p-website {
    font-size: 13px;
  }
  .text-container {
    font-size: 16px;
  }
}
</style>
