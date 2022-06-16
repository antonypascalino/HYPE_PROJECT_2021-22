<template>
  <transition :name="direction" mode="in-out">
    <div v-show="visibleSlide === index" class="carousel-slide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['visibleSlide', 'index','id','name','direction'],
  data() {
    return {}
  }
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
    animation: leftInAnimation 200ms ease-in-out;
    -webkit-filter: blur(8px);
  }
  .left-leave-active {
    animation: leftOutAnimation 200ms ease-in-out;
    -webkit-filter: blur(8px);
  }
  @keyframes leftInAnimation {
    from { transform: translateY(100%);}
    to { transform: translateY(0%);}
  }

  @keyframes leftOutAnimation {
    from { transform: translateX(0);}
    to { transform: translateY(-100%);}
  }

  .right-enter-active {
    animation: rightInAnimation 0.4s ease-in-out;
  }
  .right-leave-active {
    animation: rightOutAnimation 0.4s ease-in-out;

  }
  @keyframes rightInAnimation {
    from { transform: translateY(-100%);}
    to { transform: translateY(0%);}
  }

  @keyframes rightOutAnimation {
    from { transform: translateX(0);}
    to { transform: translateY(100%);}
  }
</style>
