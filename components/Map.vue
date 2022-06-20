<template>
  <div id="mapContainer"></div>
</template>

<script>
import L from "leaflet";

export default {
  name: "LeafletMap",
  data() {
    return {
      map: null
    };
  },
  props:{
    x: {
      type:Number,

      required: true
    },
    y:{
      type:Number,

      required: true
    }
  },
  mounted() {

      this.map = L.map("mapContainer").setView([parseFloat(this.x), parseFloat(this.y)], 20);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:'© OpenStreetMap'
      }).addTo(this.map);
      L.marker([parseFloat(this.x), parseFloat(this.y)]).addTo(this.map);
      L.marker([parseFloat(this.x), parseFloat(this.y)]).addTo(this.map);
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
};
</script>

<style scoped>
#mapContainer {
  width: 92vw;
  height: 40vh;
  margin: 3vw;
  z-index: 2;
}
</style>
