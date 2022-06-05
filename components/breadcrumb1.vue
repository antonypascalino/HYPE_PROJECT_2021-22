<!--
  Component: Breadcrumb
  Description:  A dynamic breadcrumb. The route to be shown is defined by the parameter
                'route' in the URL. Specifically:
                - if its value is not specified (or is equal to -1) the default-route is displayed;
                - otherwise (>=0) its value represent the index of the alt-route array to be displayed.
                A single route (made up of the traversed pages) is specified as an array of objects (specifying path and title of the traversed pages)

  Props:
  ├── default-route: the default breadcrumb defined as an array of pairs (path,title). It's shown when no other alternative route is activated
  ├── alt-routes: array of alternative breadcrumbs . The alternative to be shown at position 'route'.
  └── current-page: name of the current page to be shown in the breadcrumb
-->

<template>
  <header>
    <ul v-if="showRoute" class="breadcrumb">
      <li
        v-for="(element, elementIndex) of selectedRoute"
        :key="'li-' + elementIndex"
      >
        <nuxt-link :to="element.path">{{ element.title }}</nuxt-link>
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
  margin-top: 10px;
  margin-bottom: 0px;
  font-family: "Josefin Sans";
}

/* Apperence of the list elements  */
ul.breadcrumb li {
  display: inline;
}
ul.breadcrumb li + li:before {
  padding: 6px;
  content:"/";
  color: #C13939;
}
ul.breadcrumb li a:hover {
  text-decoration: underline;
}

</style>
