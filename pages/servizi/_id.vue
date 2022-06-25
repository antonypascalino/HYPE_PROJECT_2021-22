<template>
  <main class="page-container">
    <div class="body-container">
      <StaticHalfImage
        :slide="`../Services/${imgTypeService}`"
        :title="nameTypeService"
      />
      <section class="breadcrumb-section3">
        <breadcrumb
          :default-route="[
            { title: 'HOME', path: '/' },
            { title: 'Servizi', path: '/servizi/' },
          ]"
          :current-page="nameTypeService"
        />
      </section>

      <section class="container1">
        <div class="title-container">DESCRIZIONE</div>
        <p class="text-container">{{ descriptionServiceType }}</p>
      </section>

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
            :phone="s.phone_number"
            :website="s.website"
          />
        </div>
      </section>

      <div class="button-container">
        <baseButton title="Tutti i tipi di servizi" goto="/servizi/">
        </baseButton>
      </div>
    </div>
  </main>
</template>

<script>
import CommonMixin from '~/mixins/common'
import cardService from '~/components/CardService'

export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components: {
    cardService,
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    // const { data } = await $axios.get('api/services/'+ id)
    const serviceType = await $axios.get(
      'http://localhost:3000/api/specificService/' + id
    )
    const service = await $axios.get('http://localhost:3000/api/Services/' + id)
    return {
      nameTypeService: serviceType.data[0].name,
      imgTypeService: serviceType.data[0].imgBackground,
      descriptionServiceType: serviceType.data[0].service_desc,
      serviceList: service.data,
    }
  },

  methods: {
    backToList() {
      this.$router.push('/servizi/')
    },
  },
  head() {
    return {
      title: 'insideBO | ' + this.nameTypeService,
    }
  },
  mounted() {
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
}
</script>
<style>
.text-container {
  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px;
}

.page-container {
  margin-top: -65px;
  background-color: #f2f2f2;
}
.body-container {
  margin-top: 110px;
}
.title-container {
  margin-top: 40px;
  width: 100%;
  margin-top: 40px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  display: flex;
  color: #c13939;
  background-color: #f2f2f2;
  padding-left: 80px;
}

.button-container {
  width: 100%;
  height: 60px;
  padding: 20px;
}

.text-container {
  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px;
}

.row {
  margin: auto;
  width: 100%;
  justify-content: center;
  padding: 10px;
}
.button-container {
  text-align: right;
  width: 100%;
  height: 60px;
  padding: 20px;
}

.breadcrumb-section3 {
  margin-right: 20px;
  margin-top: -5px;
}

.button-container {
  text-align: right;
}

.main-page {
  background-color: #f2f2f2;
}
</style>
