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
    width: 70vw;
    height:50vw;
    overflow: hidden;
  }

  .mdi.mdi-menu-down {
    color: #C13939;
    font-size: 8vw;
    text-align: center;
    vertical-align: center;
    line-height: 20px;
    margin: auto;
  }

  .mdi.mdi-menu-up {
    color: #C13939;
    font-size: 8vw;
    text-align: center;
    vertical-align: center;
    line-height: 2vw;
    margin: auto;
  }

  .btn-prev {
    top: 0;
  }

  .btn-next {
    bottom: 0;
  }

  .btn-container{
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
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
