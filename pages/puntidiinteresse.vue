<template>
  <div class="page-container">
    <div class ="app-container">
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
      <div class = "PDI" :carousel="carousel" @selected="selected">
        <div class = "title" v-for="image in carousel" :key="image.id">
          <h1>{{ image.title }}</h1>
          <div class = "image">
          <img :src="require(`@/static/puntidiinteresse/${image.img}.jpg`)" alt=""/>
            </div>
        <button type="button">Click Me!</button>
      </div>
    </div>
      </div>
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
      carousel: [
        {id: 1, title: "Piazza Maggiore", img: "1"},
        {id: 2, title: "Nettuno", img: "2"}
      ]
    };
  }
};


</script>

<style scoped>

.title{
  font-family: "Josefin Sans";
}

.image{
  size: A4;
}




</style>
