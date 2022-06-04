<template>
  <main class="page-container">

    <div class="body-container">
      <StaticHalfImage :slide="`../Poi/${img1}`" :title=name />

      <div class="breadcrumb-section">
        <Breadcrumb :crumbs="crumbs" @selected="selected"/>
      </div>
      <br>

      <section class="section-description">
        <div class="title-container">DESCRIZIONE</div>
        <p>{{description}}</p>
      </section>

      <section class="section-description">
        <div class="title-container">GALLERY</div>

        <div class="row mt-3">
          <card
            class="col-sm-2 m-2"
            :img="`../Poi/${img1}`"
          />
          <card
            class="col-sm-2 m-2"
            :img="`../Poi/${img1}`"
          />
          <card
            class="col-sm-2 m-2"
            :img="`../Poi/${img1}`"
          />
        </div>
      </section>

      <section class="section-description">
        <div class="title-container">INFORMAZIONI</div>
        <p>{{visit_info}}</p>
      </section>

      <button
        type="button"
        class="btn btn-outline-secondary px-4"
        @click="backToList"
      >
        Torna indietro
      </button>
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
      img1: data.img1,
      description: data.description
    }
  },
  data() {
    return {
      crumbs: ['HOME', 'POIS', ],
    };
  },

  methods: {
    backToList() {
      this.$router.push('/pois/')
    },
    selected(crumb) {
      console.log(crumb);
    },
  },
  head(){
    return {
      title: this.name
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
p{
  margin-top: 20px;
}
.page-container{
  margin-top: -60px;
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
}



</style>
