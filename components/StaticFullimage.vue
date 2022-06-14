<!--
  Component: StaticFullimage
  Description: It's the component for the display of a full page image: In the insideBO website is used
  in the homepage.
-->

<template>
  <div class="slider-container">
    <img class="image-container1" :src="slide" alt="image-Homepage">
    <div class="scopri-container">{{ title1 }}</div>
    <div class="bologna-container">{{ title2 }}</div>
  </div>
</template>

<script>
export default {
  props:{
    slide:{type:String, required:true},
    title1:{type:String},
    title2:{type:String}
  }
}
</script>

<style scoped>
/* Component containers  */
.slider-container {
  position: relative;
}

.image-container1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-top:50px;
  margin-left: 0;
}
.scopri-container{
  position: absolute;
  top: 12vw;
  left:15vw;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-size: 3vw;
}

.bologna-container{
  position: absolute;
  top: 15vw;
  left:17vw;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  color: #C13939;
  font-size: 4vw;
}
@media screen and (max-width: 600px) {
  .scopri-container{
    margin-top: 25px;
  }
  .bologna-container{
    margin-top: 25px;
  }
}
</style>
