<template>
  <div>
    {{ title }}
    <button @click="change" class = "carousel-indicator"></button>
  </div>
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
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: black;
    color: black;
    border-radius: 100%;
    margin-left: 0;
    rigth:0;
    text-align: left;
  }

  button.carousel-indicator:hover {
    background-color: #C13939;
    color: #C13939;
  }

</style>
