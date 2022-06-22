<!--
  Component: StaticHalfImage
  Description: It's the component for the display of small band at the top of some pages
-->
<template>
  <div>
    <div class="slider-container">
      <img class="image-container1" :src="slide" alt="image-header">
    </div>
    <div class="text-block">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    slide:{type:String, required:true},
    title:{type:String, required:true}
  }
}
</script>

<style scoped>
/* Component containers  */

.slider-container{
  width:100%;
  height: 300px;
  margin-left: 0;
  margin-top: 0;
  align-content: center;
  overflow: hidden;
  justify-content: center;
  display: flex;
}

.image-container1 {
  object-fit: cover;
  width: auto;
  height: auto;
  aspect-ratio: auto;
  margin-left: 0;
  vertical-align: center;
  min-width: 100%;
  min-height: 100%;
  display: block;
  animation: blurAnimation ease 3s;
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

.text-block {
  color: white;
  text-align: center;
  vertical-align: center;
  position: absolute;
  margin-bottom: 0;
  bottom: 375px;
  margin-left: 380px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
h1{

  font-family: "Josefin Sans";
  text-transform: uppercase;
  font-weight: bold;
  animation: textAnimation ease-out 2s ;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
