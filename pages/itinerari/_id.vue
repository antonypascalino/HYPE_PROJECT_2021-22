<template>
  <main class="page-container">

    <div class="body-container">
      <StaticHalfImage :slide="`../Itineraries/${imgBackground}`" :title=name />
      <section class="breadcrumb-section5">
        <breadcrumb
          :default-route="[{ title: 'HOME', path: '/' },{ title: 'Itinerari', path: '/Itinerari/' }]"
          :current-page=name
        />  </section>

      <div class="title-container">I LUOGHI DELL'ITINERARIO</div>

      <div class = "itinerario-container" >
        <img class = "itinerario-img" src = "@/static/itinerarioidea1.jpg"/>
      </div>

      <section class="section-description">

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
import staticHalfImage from "~/components/StaticHalfImage";
import Breadcrumb from '~/components/Breadcrumb.vue';
import cardInfo from "~/components/CardInfo";

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components:{
    staticHalfImage,
    Breadcrumb,
    cardInfo
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    // const { data } = await $axios.get('api/itineraries/'+ id)
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
  background-color: #f2f2f2;
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

.text-container{
  font-family: Raleway;
  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px
}


.button-container{
  text-align: right;
}

.breadcrumb-section5{
  float:right;
  margin-right: 20px;
  margin-top: -10px;
}

.itinerario-container{
  width:100%;
  height: 300px;
  margin-left: 0;
  margin-top: 0;
  align-content: center;
  overflow: hidden;
  justify-content: center;
  display: flex;
}

.itinerario-img{
  object-fit: cover;
  width: auto;
  height: auto;
  aspect-ratio: auto;
  margin-left: 0;
  vertical-align: center;
  min-width: 100%;
  min-height: 100%;
  display: block;
}


</style>
