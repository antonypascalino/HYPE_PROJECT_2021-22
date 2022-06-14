<template>
    <button @click="change"
            class = "carousel-indicator">
      {{ title + ' ' }}
        <i class = "dot mdi mdi-moon-new"/>

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

  .carousel-indicator * {
    float: right;
  }

  button.carousel-indicator {
    width: 100%;
    height: 3.8vh;
    background-color: transparent;
    color: black;
    font-size: 1.1vw;
    font-family: "Josefin Sans";
    float: right;
    margin-right: 0;
    text-align: right;
    border: none;
  }

  /*Per distanziare i pallini dal nome*/
  i.mdi.mdi-moon-new {
    margin-left: 3px;
  }



</style>
