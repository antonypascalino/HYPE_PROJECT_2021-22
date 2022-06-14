<template>
  <div class="card" style="width: 25rem">
    <a :href=img>
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    </a>
  </div>
</template>

<style scoped>

.card:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
  z-index: 90;
}

.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 180px;
}
</style>

<script>
export default {
  name: 'CardComponent',
  props: {
    img: {
      type: String,
      required: true,
    }
  },
}
</script>
