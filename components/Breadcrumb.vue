<template>
  <header>
    <ul v-if="showRoute" class="breadcrumb">
      <li
        v-for="(element, elementIndex) of selectedRoute"
        :key="'li-' + elementIndex"
      >
        <nuxt-link style="text-decoration: none; color:#C13939" :to="element.path" >{{ element.title }}</nuxt-link>
      </li>
      <li>{{ currentPage }}</li>
    </ul>
   </header>
</template>

<script>
export default {
  props: {
    /** default-route: the default breadcrumb defined as an array of pairs (path,title). It's shown when no other alternative route is activated */
    defaultRoute: { type: Array, default: () => [] },
    /** alt-routes: array of alternative breadcrumbs . The alternative to be shown at position 'route'. */
    altRoutes: { type: Array, default: () => [] },
    /** current-page: name of the current page to be shown in the breadcrumb */
    currentPage: { type: String, default: () => '' },
  },
  data() {
    return {
      /** Visibility flag for the breadcrumb */
      showRoute: this.defaultRoute.length > 0,
      /** Route selected to be shown in the breadcrumb */
      selectedRoute: this.defaultRoute,
    }
  },
  created() {
    /** Fetch the selected route from the query parameters */
    const index = this.$route.query.route
    if (index > -1) {
      this.selectedRoute = this.altRoutes[index]
    }
  },
}
</script>

<style scoped>
/* Spacing for the list */
ul.breadcrumb {
  padding: 0px;
  margin-top: 20px;
  margin-bottom: 0px;
  font-family: "Josefin Sans";
  margin-left: 12px;
  margin-bottom:-30px;
  font-size: 20px;

}
/* Apperence of the list elements  */
ul.breadcrumb li {
  display: inline;
}
ul.breadcrumb li + li:before {
  padding: 6px;
  color: black;
  content: '\003E';
}
ul.breadcrumb li a:hover {
  text-decoration: none;
}


</style>
