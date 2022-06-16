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
}

.text-block {
  background-color: #c13939;
  color: #f8f8f8;
  text-align: center;
  height: 50px;
  padding: 5px;
}
h1{
  font-family: "Josefin Sans";
}
</style>
