
<template>
  <div class="slider-container">
    <img class="image-container" :src="slide" alt="image-header">
    <div class="text-block">
      <h2>{{title}}</h2>
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
  margin-top: 0px;
}

.text-block {
  background-color: #ffffff;
  color: #c13939;
  text-align: center;
}

</style>
