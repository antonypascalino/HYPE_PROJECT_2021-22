<!--
  Page: index
  Description: This page represents the Homepage of the website.
-->
<template>
  <div class="page-container" >

    <!--Homepage full page slide  -->
    <StaticFullimage slide="/Bologna_Homepage_1.jpg" title1="SCOPRI" title2="BOLOGNA" />

    <!--Events section -->
    <section class="section-container">
      Eventi a Bologna
      <!--Cards of events -->
      <div class="events-container">
        <div class="row mt-4">
          <cardInfo
            v-for="(event, index) of eventList"
            class="col-sm-1 m-2"
            :key="`index-${index}`"
            :name="event.name"
            :img="`../Events/${event.imgBackground}`"
            :id="event.id"
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
import staticFullimage from "~/components/StaticFullimage";

export default {
  components:{
    cardInfo,
    staticFullimage
  },

  methods: {
    goToEvent() {
      this.$router.push('/eventi/')
    },
  },

  async asyncData({ route, $axios }) {
     const { data } = await $axios.get('api/4events')
    //const { data } = await $axios.get('http://localhost:3000/api/4events')
    return {
      eventList: data,
    }
  },
}
</script>

<style scoped>

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
  margin-top: -30px;
}
.btn{
  background-color: #C13939;
  color: #ffffff;
}

.btn:hover{
  background-color: #ffffff;
  color: black;
}

.row{
  margin: auto;
  width: 70%;
  border: 2px solid lightgray;
  justify-content: center;
  padding: 10px;

}

</style>
