<template>
  <div class= "carousel">
    <slot> </slot>
    <button @click= "next"
            class = "btn-next btn-container">
      <div class = "mdi mdi-menu-down" />
    </button>
    <button @click= "prev"
            class = "btn-prev btn-container">
      <div class = "mdi mdi-menu-up" />
    </button>
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
  }

  .mdi.mdi-menu-down {
    color: #C13939;
    font-size: 120px;
    text-align: center;
    vertical-align: center;
    line-height: 20px;
    margin: auto;
  }

  .mdi.mdi-menu-up {
    color: #C13939;
    font-size: 120px;
    text-align: center;
    vertical-align: center;
    line-height: 20px;
    margin: auto;
  }

  .btn-prev {
    top: 0;
  }

  .btn-next {
    bottom: 0;
  }

  .btn-container{
    position: absolute;
    height: 50px;
    width: 80px;
    left: calc(50% - 40px);
    display: flex;
    border: none;
    background: transparent;
    align-content: center;
    justify-content: center;
    overflow: hidden;
  }

  .mdi.mdi-menu-down:hover {
    font-size: 140px;
  }

  .mdi.mdi-menu-up:hover {
    font-size: 140px;
  }


</style>
