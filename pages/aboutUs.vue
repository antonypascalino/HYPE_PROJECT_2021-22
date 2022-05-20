<template>
    <div class="page-container">

      <div id="app container">
      <Breadcrumb class="row justify-content-center mt-4" :crumbs="crumbs" @selected="selected" />
    </div>
    </div>

</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
export default {
  layout:'empty',
  name: 'App',
  components: { Breadcrumb },

}
</script>
<style scoped>

.chi-siamo-container{
  background: #EBEBEB;
}
.app-container{

}
</style>
