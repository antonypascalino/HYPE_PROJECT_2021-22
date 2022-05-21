<template>
  <div class="page-container">
    <div class ="app-container">
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
    </div>
 <div class="chi-siamo-container"> <h1>f</h1></div>
  </div>

</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  layout: 'default',
  components: {Breadcrumb},

  data() {
    return {
      crumbs: ['HOME', 'ABOUT'],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
}
</script>
<style>

.page-container{
}

.app-container {
  float: left;
  position: fixed;
  margin-left: 40px;
  z-index: 90;
}
.chi-siamo-container{
  margin-top: 100px;
}
</style>
