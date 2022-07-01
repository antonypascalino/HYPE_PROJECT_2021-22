<!--
  Component: Card
  Description: This is the component for the design and the implementation of the card used for the visualization of images (pois, events, ..): img
  is the path of the image.
-->
<template>
  <div class="card" style="width: 25rem">
    <a>
      <div class="card-image" :style="{ 'background-image': 'url(' + img + ')' }"></div>
      <div class="overlay">
        <a target="_blank" :href="img" class="icon" title="User Profile">
          <i class="mdi mdi-magnify-plus-outline"></i>
        </a>
      </div>
    </a>
  </div>
</template>

<style scoped>
.card {
  border: 0px solid transparent;
}
.card {
  border-color: transparent;
  background-color: transparent;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 180px;
  border-color: transparent;
  background-color: transparent;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: rgba(255, 255, 255, 0.4);
  vertical-align: center;
  justify-content: center;
  text-align: center;
}
.icon {
  position: relative;
  top: 40%;
  transform: translateY(-50%);
  color: black;
  font-size: 30px;
}
@media screen and (min-width: 600px) {
  /*On desktop visualization the card grows in size on a mouse hover*/
  .card:hover {
    -ms-transform: scale(1.5); /* IE 9 */
    transform: scale(1.5);
    z-index: 2;
  }
  .card:hover .overlay {
    opacity: 1;
  }
}
/*Mobile visualization(reduce of the font size)*/
@media screen and (max-width: 500px) {
.overlay{
  background-color: rgba(255, 255, 255, 0);
  opacity: 1;}
}
</style>

<script>
export default {
  name: 'CardComponent',
  props: {
    img: {
      type: String,
      required: true,
    },
  },
}
</script>
