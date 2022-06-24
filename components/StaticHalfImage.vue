<!--
  Component: StaticHalfImage
  Description: It's the component for the display of small band at the top of some pages
-->
<template>
  <div class="staticHalfImage">
    <img class="halfImage" :src="slide" alt="image-header" />
    <div class="text-block">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    slide: { type: String, required: true },
    title: { type: String, required: true },
  },
}
</script>

<style scoped>
/* Component containers  */

.staticHalfImage {
  height: 300px;
  /*border: 20px solid orange;*/
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.halfImage {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: auto;
  aspect-ratio: auto;
  margin-left: 0;
  min-width: 100%;
  min-height: 100%;
  display: block;
  animation: blurAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.text-block {
  width: 100vw;
  height: 300px;
  color: white;
  position: absolute;
  /*float: left;*/
  align-items: center;
  justify-content: center;
  display: flex;
  font-family: 'Josefin Sans';
  text-transform: uppercase;
  font-size: 4vw;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  /*border: 10px solid yellow;*/
  animation: textAnimation ease-out 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes blurAnimation {
  0% {
    filter: brightness(100%) blur(0px);
  }
  100% {
    filter: brightness(90%) blur(5px);
  }
}

@keyframes textAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
