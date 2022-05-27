<template>
  <div class= "carousel">
    <slot> </slot>
    <button @click="next" class = "next">Next</button>
    <button @click="prev" class = "prev">Prev</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    }
  }
}
</script>

<style>
  .carousel {
    position: relative;
    width: 950px;
    height: 720px;
    overflow: hidden;
    /*border: 2px solid black;*/
  }

  button:focus, button:hover {
    outline: none;
    cursor: pointer;
  }
  .next {
    bottom: 0;
    position: absolute;
    height: 40px;
    width: 50px;
    left: calc(50% - 25px);
    background-color: #C13939;
    border: none;
    color: white;
  }
  .prev {
    top: 0;
    position: absolute;
    height: 40px;
    width: 50px;
    left: calc(50% - 25px);
    background-color: #C13939;
    border: none;
    color: white;
  }

</style>
