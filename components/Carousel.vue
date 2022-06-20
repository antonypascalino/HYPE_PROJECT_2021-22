<template>
  <div class="carousel">
    <slot> </slot>
    <button class="btn-next btn-container" @click="next">
      <div class="mdi mdi-menu-down" />
    </button>
    <button class="btn-prev btn-container" @click="prev">
      <div class="mdi mdi-menu-up" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    },
  },
}
</script>

<style>
.carousel {
  position: relative;
  width: 70vw;
  height: 88vh;
  overflow: hidden;
  /*border: solid limegreen 2px;*/
  display: flex;
}

.mdi.mdi-menu-down {
  color: #c13939;
  font-size: 8vw;
  text-align: center;
  vertical-align: center;
  line-height: 20px;
  margin: auto;
}

.mdi.mdi-menu-up {
  color: #c13939;
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

.btn-container {
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  position: absolute;
  height: 5vh;
  width: 10%;
  left: calc(50% - 40px);
  display: flex;
  border: none;
  background: transparent;
  align-content: center;
  justify-content: center;
  overflow: hidden;
}

.mdi.mdi-menu-down {
  transition: 200ms;
}

.mdi.mdi-menu-up {
  transition: 200ms;
}

.mdi.mdi-menu-down:hover {
  font-size: 160px;
  transition: 200ms;
}

.mdi.mdi-menu-up:hover {
  font-size: 160px;
  transition: 200ms;
}
</style>
