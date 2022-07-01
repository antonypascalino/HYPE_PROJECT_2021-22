<template>
  <div class="map-container2">
    <iframe :src="googleLink"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>
<script>

export default {
  name: 'Map',
  props: {
    googleLink: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
.map-container2 {
  margin-left: 60px;
}
iframe {
  height: 40vh;
  margin:auto;
  z-index: 2;
  width: 53vw;
  border-radius: 10px;
  border: 5px solid #C13939;
}
@media screen and (max-width: 930px) {
  iframe {
    width: 100% !important;
  }
  .map-container2 {
    margin-left: 0;
  }
}

</style>
