<template>
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['visibleSlide', 'index','id','name'],
  data() {
    return {}
  }
}
</script>

<style>
</style>
