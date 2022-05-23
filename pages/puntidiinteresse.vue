<template>
  <div class="page-container">
    <div class ="app-container">
      <img src="@/static/puntidiinteresse/1.jpg"/>
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
    </div>
    <br>

    <section class="section-1">
      <div class="punti-di-interesse-container"> Punti di Interesse</div>
      <br>
      <p>Figa
      </p>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "~/components/Breadcrumb";

export default {
  layout: 'default',
  components: {Breadcrumb},
  data() {
    return {
      crumbs: ['HOME', 'PUNTI DI INTERESSE'],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
}


</script>

<style scoped>

</style>
