<template>
  <div class="page-container" >
    <slideshow :slides="slides" />
    <section class="section-container">
      In Primo Piano
    </section>

    <section class="section-container">
      Prossimi Eventi
    </section>

  </div>
</template>

<script>
  export default {
    layout: 'default'
  }
</script>

<style scoped>
.page-container{
  margin-top: 45px; /*allow partially overlap between header and the photo */
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
