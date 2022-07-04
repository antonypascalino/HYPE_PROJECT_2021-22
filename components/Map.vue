<!--
  Component: Map
  Description: This is the component for the design and the implementation of the map used in pois.
-->
<template>
  <div class="map-container2">
    <!--We have decided to use Iframe for the visualization of a google maps map-->
    <iframe
      :src="googleLink"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: 'Map',
  props: {
    googleLink: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.map-container2 {
  margin-left: 120px;
  margin-top: 20px;
}
iframe {
  height: 40vh;
  margin: auto;
  z-index: 2;
  width: 53vw;
  border-radius: 10px;
  border: 5px solid #c13939;
}
/*When the small is screen the map is wide as the screen*/
@media screen and (max-width: 930px) {
  iframe {
    width: 90% !important;
  }
  .map-container2 {
    margin-left: 0;
    text-align: center;
  }
}
</style>
