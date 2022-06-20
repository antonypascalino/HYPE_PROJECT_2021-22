<template>
  <transition :name="direction" mode="in-out">
    <div
      v-show="visibleSlide === index"
      class="carousel-slide"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['visibleSlide', 'index','id','name','direction'],
  data() {
    return {}
  },
}
</script>

<style>

  .carousel-slide {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .left-enter-active {
    animation: leftInAnimation 1.1s ease-in-out;
  }
  .left-leave-active {
    animation: leftOutAnimation 1.1s ease-in-out;
  }

  @keyframes leftInAnimation {
    from { transform: translateY(100%);}
    to { transform: translateY(0%);}
  }

  @keyframes leftOutAnimation {
    from { transform: translateY(0);}
    to {
      transform: translateY(-100%);
      opacity: 0;
    }
  }

  .right-enter-active {
    animation: rightInAnimation 1.1s ease-in-out;
  }
  .right-leave-active {
    animation: rightOutAnimation 1.1s ease-in-out;
  }
  @keyframes rightInAnimation {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @keyframes rightOutAnimation {
    from { transform: translateY(0);}
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
</style>
