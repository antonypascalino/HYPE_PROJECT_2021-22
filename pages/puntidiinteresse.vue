<template>
  <div class="page-container">
    <div class ="app-container">
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
      </div>
    <li v-for="(pointOfInterest, pointOfInterestIndex) of pointOfInterestList"
        class="col-sm-2 m-2"
        :key="`pointOfInterest-index-${pointOfInterestIndex}`"
        :id="pointOfInterest.id"
        :name="pointOfInterest.name"
        :img="pointOfInterest.img"
        :description="pointOfInterest.description"
    />
  </div>
</template>

<script>
 import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  layout: "empty",
  components: {Breadcrumb},
  data() {
    return {
      crumbs: ['HOME', 'PUNTI DI INTERESSE'],
    };
  },
    async asyncData({ $axios }) {
      // const { data } = await $axios.get('http://localhost:3000/api/cats')
      const { data } = await $axios.get('/api/pointsOfInterest')
      return {
        pointOfInterestList: data,
      }

    }
};

</script>

<style scoped>

</style>
