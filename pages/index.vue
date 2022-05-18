<template>

  <div
    class="bg-image p-5 text-center shadow-1-strong rounded mb-5 text-white"
    style="background-image: url('static/Bologna_Homepage_1.jpg');"
  >
    <h1 class="mb-3 h2">Jumbotron</h1>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium
      labore accusamus sequi, voluptate debitis tenetur in deleniti possimus modi voluptatum
      neque maiores dolorem unde? Aut dolorum quod excepturi fugit.
    </p>
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
