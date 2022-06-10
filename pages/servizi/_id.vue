<template>
  <main class="page-container">

    <div class="body-container">
      <StaticHalfImage :slide="`../Services/${imgBackground}`" :title=name />
      <section class="breadcrumb-section">
        <Breadcrumb :crumbs="crumbs" :optional=name @selected="selected"/>
      </section>

      <section class="section-description">
        <div class="title-container">DESCRIZIONE</div>
        <p class="text-container">{{description}}</p>
      </section>


      <section class="container1">
        <div class="title-container">INFORMAZIONI</div>
        <div class="container-info container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">

            <!-- Grid column -->
            <div class=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">ORARIO</h6>
              <p class="mdi mdi-clock-outline">{{ opening_hours }}</p>
            </div>
            <!-- Grid column -->
            <!-- Grid column -->
            <div class=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">INDIRIZZZO</h6>
              <p class="mdi mdi-map-marker-check-outline">{{address}}</p>
            </div>
            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">SITO WEB</h6>

              <p class="mdi mdi-web">{{website}}  </p>

            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>

      <div class="button-container">
        <button
          type="button"
          class="btn btn-outline-secondary px-4"
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
    // const { data } = await $axios.get('api/pois/'+ id)
    const { data } = await $axios.get('http://localhost:3000/api/services/'+ id)
    return {
      name: data.name,
      opening_hours: data.opening_hours,
      imgBackground: data.imgBackground,
      address:data.address,
      description: data.description,
      website:data.website
    }
  },
  data() {
    return {
      crumbs: ['HOME', 'SERVIZI', ],
    };
  },
  methods: {
    backToList() {
      this.$router.push('/servizi/')
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
.row{
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
.btn{
  float:right;
  color:black
}
.text-container{
  padding: 10px ;
}

</style>
