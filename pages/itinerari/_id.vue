<template>
  <main class="page-container">

    <div class="body-container">
      <StaticHalfImage :slide="`../Itineraries/${imgBackground}`" :title=name />
      <section class="breadcrumb-section">
        <Breadcrumb :crumbs="crumbs" :optional=name @selected="selected"/>
      </section>

      <section class="section-description">
        <div class="title-container">I LUOGHI DELL'ITINERARIO</div>
        <p class="text-container"></p>
      </section>

      <section class="section-description">
        <div class="title-container">DESCRIZIONE</div>
        <p class="text-container">{{description}}</p>
      </section>
      <section class="section-description">
        <div class="title-container">DURATA</div>
        <p class="text-container">{{duration}}</p>
      </section>

      <section class="section-description">
        <div class="title-container">MAPPA ITINERARIO</div>

        <div class="map-container">
          <img class="img-map" :src="require(`@/static/Itineraries/${map}`)"/>
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
    const { data } = await $axios.get('http://localhost:3000/api/itineraries/'+ id)
    return {
      name: data.name,
      duration: data.duration,
      imgBackground: data.imgBackground,
      description: data.description,
      map: data.map,
    }
  },
  data() {
    return {
      crumbs: ['HOME', 'ITINERARI', ],
    };
  },
  methods: {
    backToList() {
      this.$router.push('/itinerari/')
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
  height: 100px;
  padding: 20px;
}
.btn{
  float:right;
  color:black
}
.text-container{
  padding: 10px ;
}
.map-container{
  width:95vw;
  height:40vw;
  display: flex;
}
.img-map{
  width: 90%;

}
</style>
