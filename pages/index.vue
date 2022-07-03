<!--
  Page: index
  Description: This page represents the Homepage of the website.
-->
<template>
  <div class="page-container" >

    <!--Homepage full page slide  -->
    <StaticFullImage @scrollto="goto" slide="/Bologna_Homepage_1.webp" title1="SCOPRI" title2="BOLOGNA"/>
    <!--Fake section used as anchor of the arrow down scroll  -->
    <section class="fake-section" ref="anchor"></section>
    <br><br><br>

    <!--Points of interest section -->
    <section class="section-container">
     <h1 class="section-title">IN PRIMO PIANO</h1>
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
        <!--Button for display all the points of interest -->
        <baseButton title="Scopri di più" goto="pois"></baseButton>
      </div>
    </section>

    <br><br><br><br>

    <!--Events section -->
    <section class="section-container" >
      <h1 class="section-title">PROSSIMI EVENTI</h1>
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

  </div>
</template>

<script>
import cardInfo from "~/components/CardInfo";
import staticFullImage from "~/components/StaticFullImage";
import baseButton from "~/components/BaseButton";
export default {
  components:{
    cardInfo,
    staticFullImage,
    baseButton
  },
  // function to implement the scroll in the homepage
  methods: {
    goto(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;
      window.scrollTo(0, top);
    }
  },

  //Query functions
  async asyncData({ route, $axios }) {

    //GET on Local DB
    // const events = await $axios.get(`http://localhost:3000/api/4events1`)
    // const pois = await $axios.get(`http://localhost:3000/api/4pois`)

    //GET on Remote DB
    const events = await $axios.get(`api/4events1`)
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
  align-content: center;
  justify-content: center;
}
.section-title{
  text-align: center;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  color: #c13939;
}
.events-container{
  width: 100%;
  align-content: center;
  align-content: center;
  justify-content: center;
  text-align: center;
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
h1.section-title{
  color:#C13939;
}
</style>
