<template>
  <button @click="change" class = "carousel-indicator">

  </button>
</template>

<script>
export default {
  name: "Carousel-indicator",

  data() {
    return {

    }
  },
  methods: {
    change() {
      this.$emit('change')
    },
  }
}



</script>

<style>

  .carousel-indicator {
    position: absolute;
    height: 40px;
    width: 50px;
    left: 60%;
    background-color: black;
    border: none;
    color: white;
    margin-left: 0;
    padding: 0;
  }

  .carousel-indicator:hover {
    background-color: #C13939;
  }

</style>
