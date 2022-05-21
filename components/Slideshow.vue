
<template>
  <div class="slider-container">
    <img class="image-container" src="/Bologna_Homepage_1.jpg">
    <div class="top-left1">SCOPRI</div>
    <div class="top-left2">BOLOGNA</div>
  </div>
</template>
<script>

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
  margin-left: 0;
  padding-left: 0;
}

.top-left1{
  position: absolute;
  top: 130px;
  left: 100px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: #000000;
}
.top-left2{
  position: absolute;
  left: 122px;
  top: 165px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  color: #C13939;
}


</style>
