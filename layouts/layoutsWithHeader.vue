<template>
  <div class="main-page">
    <the-header />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  name: 'LayoutsWithHeader',
  components: {
    TheHeader,
  },
}
</script>

<style>
.main-page{
  background: #F2F2F2;
}


</style>
