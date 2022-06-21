<template>
  <div class="card" style="width: 60rem">

      <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text mdi mdi-map-marker-check-outline" >
        {{ address }}
      </p>
      <p class="card-text mdi mdi-clock-outline">
        {{ opening_hours }}
      </p>
        <p class="card-text mdi mdi-phone">
          {{ phone }}
        </p>
        <p class="card-text mdi mdi-web">
        <a :href="website">  {{ website }} </a>
        </p>
      </div>
    </div>

</template>

<style scoped>
.card {
  border: 3px solid lightgray;
  font-size: 20px;
  font-family: "Josefin Sans";
}
.card:hover {
  border: 3px solid #C13939;
}
.card-title{
  font-size: 30px;
  color:#C13939;
}
.mdi{color:black}
p{text-align: center}
</style>

<script>
export default {
  name: 'CardComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    opening_hours: {
      type: String,
      required: true,
    },
    phone:{
      type: String,
      required: true,
    },
    website:{
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
