<template>
    <button @click="change" class = "carousel-indicator">
      {{ title }}
      <i class = "icon">
        <i class = "dot mdi mdi-moon-full">
        </i>
      </i>
    </button>
</template>

<script>
export default {
  name: "Carousel-indicator",

  data() {
    return {

    }
  },
  props: ['title', 'selected', 'index'],
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
    background-color: transparent;
    color: black;
    margin: 2px;
    font-size: 10px;
    font-family: "Josefin Sans";
  }

  button.carousel-indicator:hover {
    color: #C13939;
  }

  .icon{
    float: right;
    color: black;
  }

  .icon :hover{
    color: #c13939;
  }

  button.carousel-indicator:active {
    color: #C13939;
  }








</style>
