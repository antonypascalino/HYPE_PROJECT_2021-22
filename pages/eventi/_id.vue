<template>
  <main class="page-container">

    <div class="body-container">
      <StaticHalfImage :slide="`../Events/${imgBackground}`" :title=name />
      <section class="breadcrumb-section2">
        <breadcrumb
          :default-route="[{ title: 'HOME', path: '/' },{ title: 'Eventi', path: '/eventi/' }]"
          :current-page=name
        />  </section>

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

      <section class="container4">
        <div class="title-container">INFORMAZIONI</div>
        <br>
        <div class="row row1">
          <div class="col-sm-3">
            <h6 class="text-uppercase fw-bold mb-4 mdi mdi-tag">PREZZO</h6>
            <p>{{price}}</p>  </div>
          <div class="col-sm-3">  <h6 class=" mdi mdi-map-marker-check-outline text-uppercase fw-bold mb-4">INDIRIZZO</h6>

            <p >{{address}}</p></div>
          <div class="col-sm-3"> <h6 class="mdi mdi-calendar-blank text-uppercase fw-bold mb-4">DATA</h6>

            <p >{{ date }}</p></div>
          <div class="col-sm-4"> <br><h6 class="mdi mdi-web text-uppercase fw-bold mb-4">SITO WEB</h6>

            <a :href=website><p>{{ website }}</p> </a>
          </div>
        </div>
      </section>


      <div class="button-container">
        <baseButton title="Tutti gli eventi" goto="/eventi/">
        </baseButton>
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

.section-description{
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

.text-container{
  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px
}


.row{
  margin: auto;
  width: 100%;
  justify-content: center;
  padding: 10px;

}
.breadcrumb-section2{
  float:right;
  margin-right: 20px;
  margin-top: -10px;
}

.button-container{
  text-align: right;
}

.row1{
  text-align: center;
  border: 3px solid #C13939;
  font-size: 20px;
  font-family: "Josefin Sans";
}
.mdi-map-marker-check-outline{
  color: #C13939;
}
.mdi-calendar-blank{
  color: #C13939;
}
.mdi-web{
  color: #C13939;
}
.mdi-tag{
  color: #C13939;
}

.container4{
  margin:30px
}
</style>
