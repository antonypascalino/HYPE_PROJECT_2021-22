<template>
    <button @click="change"
            class = "carousel-indicator"
            :style = "getTextColor(index,visibleSlide)"
    >
            {{ title }}
      <i
        :class = "getSymbol(index,visibleSlide)"
        :style = "getColor(index,visibleSlide)"
      />
    </button>
</template>

<script>
export default {
  name: "Carousel-indicator",

  data() {
    return {

    }
  },
  props: ['title', 'selected', 'index','visibleSlide'],
  methods: {
    change() {
      this.$emit('change')
    },
    getTextColor(index,visibleSlide) {
      if (visibleSlide === index) {
        return "color: #C13939;\n " +
                "font-size: 1.4vw;"
      }
    },
    getSymbol(index, visibleSlide) {
      if (visibleSlide === index) {
        return "dot mdi mdi-moon-full"
      }
      else return "dot mdi mdi-moon-new"
    },
    getColor(index, visibleSlide) {
      if (visibleSlide === index) {
        return  "color: #C13939"
      }
      else return "color: black;"
    }
  }
}



</script>

<style>

  .carousel-indicator * {
    float: right;
  }

  .carousel-indicator {
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
    transition: 200ms;
  }

  .carousel-indicator:hover {
    color: #C13939;
    font-size: 1.4vw;
    transition: 200ms;
  }

  /*Per distanziare i pallini dal nome*/
  i {
    margin-left: 5px;
  }





</style>
