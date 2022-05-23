<template>
  <div class="page-container">
    <div class ="app-container">
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
      <div v-for="image in carousel" :key="image.id">
        <h1>{{ image.title }}</h1>
        <img :src="require(`@/static/puntidiinteresse/${image.img}.jpg`)" alt=""/>
        <button type="button">Click Me!</button>
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
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}






</style>
