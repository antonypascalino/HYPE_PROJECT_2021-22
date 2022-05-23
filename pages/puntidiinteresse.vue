<template>
  <div class="page-container">
    <div class ="app-container">
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
      <div v-for="image in carousel" :key="image.id">
        <h1>{{ image.title }}</h1>
        <img :src="require(`@/static/puntidiinteresse/${image.img}.jpg`)" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
 import Breadcrumb from '~/components/Breadcrumb.vue';
export default {
  layout: "default",
  components: {Breadcrumb},
  data() {
    return {
      crumbs: ['HOME', 'PUNTI DI INTERESSE'],
      carousel: [
        [{id: 1, title: "Piazza Maggiore", img: "1"},
          {id: 2, title: "Piazza Maggiore", img: "2"}]
      ]
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
};


</script>

<style scoped>

</style>
