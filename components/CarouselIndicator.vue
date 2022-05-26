<template>
    <button @click="change" class = "carousel-indicator"></button>
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
    height: 20px;
    width: 20px;
    left: 60%;
    background-color: black;
    color: black;
    border-radius: 100%;
    margin-left: 0;
    padding: 0;
  }

  .carousel-indicator:hover {
    background-color: #C13939;
  }

</style>
