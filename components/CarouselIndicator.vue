<template>

    <button @click="change" class = "carousel-indicator">
      {{ title }}
    </button>
</template>

<script>
export default {
  name: "Carousel-indicator",

  data() {
    return {

    }
  },
  props: ['title'],
  methods: {
    change() {
      this.$emit('change')
    },
  }
}



</script>

<style>

  button.carousel-indicator {
    height: 40px;
    width: 150px;
    border: 2px solid black;
    background-color: transparent;
    color: black;
    font-size: 10px;
  }

  button.carousel-indicator:hover {
    border: 2px solid #C13939;
    color: #C13939;
  }



</style>
