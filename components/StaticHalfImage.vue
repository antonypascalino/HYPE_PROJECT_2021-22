
<template>
  <div class="slider-container">
    <img class="image-container" :src="slide">
    <div class="bottom-left">BOLOGNA</div>
  </div>
</template>

<script>
export default {
  props:{
    slide:{type:String, required:true}
  }
}
</script>

<style scoped>
/* Component containers  */
.slider-container {
  position: relative;
}

.image-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height:400px;
  margin-left: 0;
  padding-left: 0;
  margin-top:-20px;
}
.bottom-left {
}


</style>
