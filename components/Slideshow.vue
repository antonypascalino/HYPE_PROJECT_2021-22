
<template>
  <div class="slider-container">
    <img class="image-container" src="/Bologna_Homepage_1.jpg">
    <div class="top-left1">SCOPRI</div>
    <div class="top-left2">BOLOGNA</div>
  <br>
    <br>
  <section class="section-container">
    In Primo Piano
  </section>
  </div>
</template>
<script>

</script>

<style scoped>
/* Component containers  */
.slider-container {
  height: 90vh;
  min-height: 520px;
  position: relative;
}

.image-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  margin-top:50px;
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
.section-container{
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 80px;
  color: #C13939;
  text-align: center;
}

</style>
