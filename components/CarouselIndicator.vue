<template>
  <button
    @click="change"
    class="carousel-indicator"
    :style="getTextColor(index, visibleSlide)"
  >
    {{ title }}
    <i :class="getSymbol(index, visibleSlide)" />
  </button>
</template>

<script>
export default {
  name: 'Carousel-indicator',

  data() {
    return {}
  },
  props: ['title', 'selected', 'index', 'visibleSlide'],
  methods: {
    change() {
      this.$emit('change')
    },
    getTextColor(index, visibleSlide) {
      if (visibleSlide === index) {
        return (
          'color: #C13939;\n ' +
          'transform: scale(1.3);\n ' +
          'transition: 1100ms;\n ' +
          'transform-origin: right;'
        )
      }
    },
    getSymbol(index, visibleSlide) {
      if (visibleSlide === index) {
        return 'dot mdi mdi-moon-full visible'
      } else return 'dot mdi mdi-moon-new'
    },
  },
}
</script>

<style>
.carousel-indicator * {
  float: right;
}

.carousel-indicator {
  /*border: solid 2px yellow;*/
  width: 100%;
  height: 3.8vh;
  background-color: transparent;
  color: black;
  font-size: 1.1vw;
  font-family: 'Josefin Sans';
  float: right;
  margin-right: 0;
  text-align: right;
  border: none;
  transition: 200ms;
  transform-origin: right;
}

.carousel-indicator:hover {
  color: #c13939;
  transform: scale(1.3);
  transform-origin: right;
  transition: 200ms;
}
i {
  margin-left: 5px;
  color: black;
}

i.visible,
.carousel-indicator:hover i {
  color: #c13939;
  /*transition: 200ms;*/
}

/*Per distanziare i pallini dal nome*/
</style>
