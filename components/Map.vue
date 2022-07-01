<template>
  <div  class="map-container">
    <iframe :src=googleLink  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
.map-container {
  margin-left: 30px;
}

iframe {
  height: 40vh;
  margin:auto;
  z-index: 2;
  width: 60vw;
}
@media screen and (max-width: 930px) {
  iframe {
    width: 100% !important;
  }
  .map-container {
    margin-left: 0;
  }
}

</style>
