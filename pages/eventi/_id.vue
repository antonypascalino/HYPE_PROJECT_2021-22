<template>
  <main class="page-container">

    <div class="body-container">
      <StaticHalfImage :slide="`../Events/${imgBackground}`" :title=name />
      <section class="breadcrumb-section">
        <Breadcrumb :crumbs="crumbs" :optional=name @selected="selected"/>
      </section>

      <section class="section-description">
        <div class="title-container">DESCRIZIONE</div>
        <p class="text-container">{{description}}</p>
      </section>

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

      <section class="container1">
        <div class="title-container">INFORMAZIONI</div>
        <div class="container-info container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row-container row mt-3">

            <!-- Grid column -->
            <div class=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">INDIRIZZO</h6>

              <p class="mdi mdi-map-marker-check-outline">{{address}}</p>
            </div>
            <!-- Grid column -->
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">PREZZO</h6>

              <p class="mdi mdi-tag">{{price}}  </p>

            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">DATA</h6>

              <p class="mdi mdi-calendar-blank">{{ date }}</p>

            </div>
            <!-- Grid column -->


            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">SITO WEB</h6>

              <p class="mdi mdi-web">{{ website }}</p>

            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>

      <div class="button-container">
        <button
          type="button"
          class="btn1 btn btn-outline-secondary px-4" style="float:right"
          @click="backToList"
        >
          Torna indietro
        </button>
      </div>
    </div>

  </main>
</template>

<script>

import CommonMixin from '~/mixins/common'
import staticHalfImage from "~/components/StaticHalfImage";
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components:{
    staticHalfImage,
    Breadcrumb
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    // const { data } = await $axios.get('api/events/'+ id)
    const { data } = await $axios.get('http://localhost:3000/api/events/'+ id)
    return {
      name: data.name,
      date: data.date,
      imgBackground: data.imgBackground,
      imgArray:data.imgArray,
      description: data.description,
      address: data.address,
      price: data.price,
      website: data.website,
    }
  },
  data() {
    return {
      crumbs: ['HOME', 'EVENTI', ],
    };
  },
  methods: {
    backToList() {
      this.$router.push('/eventi/')
    }
  },
  head(){
    return {
      title: "insideBO | "+this.name
    }
  },
  mounted(){
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },


}
</script>
<style>

section-description{

  font-family: 'Inria Sans';
  font-style: normal;
  font-size: 17px;
  margin-left: 8px;
  margin-right: 8px;
}

.page-container{
  margin-top: -65px;
}
.body-container{
  margin-top: 110px;
}
.title-container{
  margin-top: 40px;
  width: 100%;
  margin-top: 40px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  display: flex;
  color: #C13939;
  background-color: #EBEBEB;
  padding-left: 5px;
}
.row-container{
  margin: auto;
  width: 100%;
  justify-content: center;
  padding: 10px;

}
.button-container{
  width: 100%;
  height: 60px;
  padding: 20px;
}

.text-container{
  padding: 10px ;
}


</style>
