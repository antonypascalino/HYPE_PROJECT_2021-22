<!--
  Page: index
  Description: This page represents the Homepage of the website.
-->
<template>
  <div class="page-container" >

    <!--Homepage full page slide  -->
    <StaticFullImage slide="/Bologna_Homepage_1.jpg" title1="SCOPRI" title2="BOLOGNA" anchor="anchor" />

    <!--Events section -->
    <section class="section-container" >
      In Primo Piano
      <!--Cards of events -->
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
        <!--Button for display all the events -->
        <button type="button" class="btn btn-outline-secondary btn-lg" @click="goToPoi">
          Scopri di più
        </button>
    </div>
    </section>


    <!--Events section -->
    <section class="section-container" ref="anchor">
      Eventi a Bologna
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
          />
        </div>

        <!--Button for display all the events -->
        <button type="button" class="btn btn-outline-secondary btn-lg" @click="goToEvent">
          Tutti gli eventi
        </button>

      </div>
    </section>
  </div>
</template>

<script>
import cardInfo from "~/components/CardInfo";
import staticFullImage from "~/components/StaticFullImage";

export default {
  components:{
    cardInfo,
    staticFullImage
  },

  methods: {
    goToEvent() {
      this.$router.push('/eventi/')
    },
    goToPoi(){
      this.$router.push('/pois/')
    }
  },

  async asyncData({ route, $axios }) {
    //const events = await $axios.get(`http://localhost:3000/api/4events`)
    const events = await $axios.get(`api/4events`)
   // const pois = await $axios.get(`http://localhost:3000/api/4pois`)
    const pois = await $axios.get(`api/4pois`)
      return {
      eventList: events.data,
      poiList:pois.data
    }
  },
}
</script>

<style scoped>
.page-container{
  margin-top:0px ;
}
.section-container{
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 80px;
  color: #C13939;
  text-align: center;
}

.events-container{
  width: 100%;
  align-content: center;
}
.btn{
  background-color: #C13939;
  color: #ffffff;
  border: 2px solid #C13939;
}

.btn:hover{
  background-color: #ffffff;
  color: black;
}

.event-card-container{
  margin: auto;
  width: 90%;
  justify-content: center;
  padding: 5px;
}
.poi-card-container{
  margin: auto;
  width: 90%;
  justify-content: center;
  padding: 5px;
}
</style>
