<template>
  <menu class = "indicatorMenu">
    <button @click="change" class = "carousel-indicator">
      {{ title }}
    </button>
  </menu>
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
    position: relative;
    height: 40px;
    width: 150px;
    border: 2px solid black;
    background-color: transparent;
    color: black;
    font-size: 10px;
    padding: 0;
    margin-right: 400px;
    text-align: right;
  }

  button.carousel-indicator:hover {
    border: 2px solid #C13939;
    color: #C13939;
  }

  carousel-indicator * {

  }

  menu.indicatorMenu.carousel-indicator {
    padding-left: 0;
  }

</style>
