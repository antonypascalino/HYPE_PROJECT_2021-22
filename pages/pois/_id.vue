<template>
  <main class="page-container">

    <div class="body-container">
      <StaticHalfImage :slide="`../Poi/${imgBackground}`" :title=name />
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
            :img="`../Poi/${img}`"
          />
        </div>
      </section>

      <section class="section-description">
        <div class="title-container">INFORMAZIONI</div>
        <p class="text-container">{{visit_info}}</p>
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
    const { data } = await $axios.get('http://localhost:3000/api/pois/'+ id)
    return {
      name: data.name,
      visit_info: data.visit_info,
      imgBackground: data.imgBackground,
      imgArray:data.imgArray,
      description: data.description,
    }
  },
  data() {
    return {
      crumbs: ['HOME', 'PUNTI DI INTERESSE', ],
    };
  },
  methods: {
    backToList() {
      this.$router.push('/pois/')
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

.row{
  margin: auto;
  width: 100%;
  justify-content: center;
  padding: 10px;

}

</style>
