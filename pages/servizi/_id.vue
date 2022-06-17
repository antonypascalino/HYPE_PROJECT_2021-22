<template>
  <main class="page-container">
    <div class="body-container">

      <section class="container1">
        <div class="title-container">INFORMAZIONI</div>
        <!--Cards of events -->

          <div class="event-card-container row mt-4">
            <cardService
              v-for="(s, index) of serviceList"
              class="col-sm-1 m-2"
              :key="`index-${index}`"
              :name="s.name"
              :address="s.address"
              :opening_hours="s.opening_hours"

            />
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
import cardService from "~/components/CardService";

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components:{
    cardService
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    // const { data } = await $axios.get('api/services/'+ id)
    const { data } = await $axios.get('http://localhost:3000/api/services/'+ id)
    return {
      serviceList: data,
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
