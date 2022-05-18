<template>

  <div class="container">
    <img class="image-container" src="/Bologna_Homepage_1.jpg">
    <div class="bottom-left">Bottom Left</div>
    <div class="top-left">Top Left</div>
    <div class="top-right">Top Right</div>
    <div class="bottom-right">Bottom Right</div>
    <div class="centered">Centered</div>
  </div>
</template>


<style scoped>
/* Container holding the image and the text */
.container {
  margin: 20px;
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;

}


/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}



/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}



/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}
.image-container {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

</style>
