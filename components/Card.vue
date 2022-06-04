<template>
  <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>

  </div>
</template>

<style scoped>
.card {
  border: 2px solid lightgray;
}
.card:hover {
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5);
  z-index: 90;
}
.btn-orange {
  background-color: orange;
  border: 2px solid orange;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
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
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>
