<template>
  <nuxt-link :to="`/${name}/${id}`">
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
  </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['visibleSlide', 'index','id','name'],
  data() {
    return {}
  },

  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>

<style>
</style>
