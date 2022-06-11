<template>
  <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>

      <nuxt-link :to="`/eventi/${id}`">
        <div class="btn btn-primary btn-orange">Vedi Dettagli</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid lightgray;
  background-color: #EBEBEB;
}

.btn-orange{
  background-color: #C13939;
  color: #ffffff;
  border: 2px solid #C13939;
}

.btn-orange:hover{
  background-color: #ffffff;
  color: black;
}
.card-image {
  margin-top: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>

<script>
export default {
  name: 'CardiInfo',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/eventi/${this.id}`)
    },
  },
}
</script>
