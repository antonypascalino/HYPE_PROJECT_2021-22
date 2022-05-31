<!--
  Layout: default
  Description: This page represents the layout of a page with header and footer
-->
<template>
  <div class="main-page">
    <the-header />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
/*Color of the page */
.main-page{
  background: #F2F2F2;
}
</style>
