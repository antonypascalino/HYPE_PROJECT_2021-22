<!--
  Component: StaticFullimage
  Description: It's the component for the display of a full page image: In the insideBO website is used
  in the homepage.
-->

<template>
  <div class="slider-container">
    <img class="image-container1" :src="slide" alt="image-Homepage"/>
    <div class="scopri-container" :class="{change_color1: scrollPosition > 130,change_color2: scrollPosition > 150,change_color3: scrollPosition > 170}">{{ title1 }}</div>
    <div class="bologna-container" :class="{change_color1: scrollPosition > 200,change_color2: scrollPosition > 200,change_color3: scrollPosition > 230}">{{ title2 }}</div>
    <div class="arrow-down mdi mdi-chevron-double-down" :class="{change_color1: scrollPosition > 700,change_color2: scrollPosition > 750,change_color3: scrollPosition > 800}"  @click="$emit('scrollto', 'anchor')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      distanceScrolled:0,
      changeColor:true,
      scrollPosition:null,
    };

  },
  name: 'StaticFullImage',
  props:{
    slide:{type:String, required:true},
    title1:{type:String},
    title2:{type:String}
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;

    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

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
  height: 100%;
  object-fit: cover;
  object-position: bottom;
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
.arrow-down{
  position: absolute;
  top:45vw ;
  left: calc(50% - 2vw);
  font-size: 4vw;
  color:white;
  display: none;
  cursor: pointer;
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s;
  animation: bounce 2s infinite;
}
@media screen and (max-width: 600px) {
  .scopri-container{
    display: none;
  }
  .bologna-container{
    display: none;
  }
  .image-container1{
    height:400px
  }
}
@media screen and (min-width: 900px) {
  .arrow-down{
    display: block;
  }
}
.change_color1{
  transition: opacity 0.5s linear;
  opacity: 50%;
}
.change_color2{
  transition: opacity 0.5s linear;
  opacity: 30%;
}
.change_color3{
  transition: opacity 0.5s linear;
  opacity: 0%;
}
</style>
