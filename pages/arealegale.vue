<template>
<div>
  <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>

</div>
</template>

<script>
import Breadcrumb from "~/components/Breadcrumb";
export default {
  layout: 'default', // you can set a custom layout for the error page
  components: {Breadcrumb},

  data() {
    return {
      crumbs: ['HOME', 'ABOUT','CHI SIAMO'],
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

</style>
