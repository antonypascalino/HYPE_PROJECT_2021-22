<template>
  <div id="mapContainer" class="map-container"></div>
</template>

<script>
import L from 'leaflet'

export default {
  name: 'LeafletMap',
  data() {
    return {
      map: null,
    }
  },
  props: {
    x: {
      type: Number,

      required: true,
    },
    y: {
      type: Number,

      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const redIcon = new L.Icon({
      iconUrl:
        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    })
    this.map = L.map('mapContainer').setView(
      [parseFloat(this.x), parseFloat(this.y)],
      20
    )
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map)
    const marker1 = L.marker([parseFloat(this.x), parseFloat(this.y)], {
      icon: redIcon,
    }).addTo(this.map)

    marker1.bindPopup('<b>' + this.name + '</b>').openPopup()
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove()
    }
  },
}
</script>

<style scoped>
.map-container {
  height: 40vh;
  left: 3vw;
  margin-top: 2vw;
  margin-right: 0;
  z-index: 2;
  width: 70vw;
}

@media screen and (max-width: 590px) {
  #mapContainer {
    width: 90vw;
  }
}
</style>
