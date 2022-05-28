
<template>
  <div class="slider-container">
    <img class="image-container" :src="slide">
    <div class="text-block">
      <h4>{{title}}</h4>
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

.image-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  margin-top:-20px;
  position:relative;
}

.text-block {
  bottom: 20px;
  right: 20px;
  background-color: #c13939;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 90;
  text-align: center;
}

</style>
