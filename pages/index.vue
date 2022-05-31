<!--
  Page: index
  Description: This page represents the Homepage of the website.
-->
<template>
  <div class="page-container" >
    <!--Homepage full page slide  -->
    <StaticFullimage slide="/Bologna_Homepage_1.jpg" />
    <!--Highlights section -->
    <section class="section-container">
      In Primo Piano
      <div class="highlights-container">
      </div>
    </section>
    <!--Events section -->
    <section class="section-container">
      Prossimi Eventi
      <div class="events-container">
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style scoped>

.section-container{
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 33px;
  line-height: 80px;
  color: #C13939;
  text-align: center;
}
.highlights-container {
  background-color: black;
  width: 100%;
  height:400px
}
.events-container{
  background-color: black;
  width: 100%;
  height:400px
}

</style>
