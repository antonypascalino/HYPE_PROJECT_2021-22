<template>
  <main class="page-container">
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
       <h1>{{name}}</h1>
        <p>{{description}}</p>
      </div>
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="backToList"
      >
      </button>

    </div>
  </div>
  </main>
</template>

<script>

import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],

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

  methods: {
    backToList() {
      this.$router.push('/poi')
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
