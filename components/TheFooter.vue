<!--
  Component: TheFooter
  Description: Footer of the website with company icon and social icons
-->

<template>
  <!-- Footer -->
  <footer class="page-footer text-center text-lg-start text-muted">

    <!-- Section: Links  -->
    <section class="container1">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>
            </h6>
              <img class="logo" src="~/static/logoCompatto_bianco.png" alt="logo_compatto_rosso">
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class=" col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">

            </h6>
            <p>
              <a href="/about" class="text-reset">> Chi siamo </a>
            </p>
            <p>
              <a href="/contatti" class="text-reset">> Contattaci</a>
            </p>
            <p>
              <a href="/bolognainbreve" class="text-reset">> Bologna in Breve</a>
            </p>
            <p>
              <a href="https://www.bolognatoday.it/meteo/" class="text-reset">> Meteo</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
            </h6>
            <p>
              <a href="/arealegale" class="text-reset"> > Area Legale</a>
            </p>
            <p>
              <a  href="/privacy" class="text-reset">> Informativa sulla Privacy</a>
            </p>
            <p>
              <a href="/cookie" class="text-reset"> > Cookie e Pubblicità</a>
            </p>
          </div>
          <!-- Grid column -->


          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Section: Social media -->
    <section
      class="container2 d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
          © 2022 Tutti i diritti sono riservati:
          <a class="text-reset fw-bold" href="https://insidebo.herokuapp.com/">insideBO</a>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="https://www.facebook.com" class="me-1 text-reset">
          <i class="mdi mdi-facebook"></i>
        </a>
        <a href="https://www.twitter.com" class="me-1 text-reset">
          <i class="mdi mdi-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" class="me-1 text-reset">
          <i class="mdi mdi-linkedin"></i>
        </a>
        <a href="https://www.instagram.com" class="me-1 text-reset">
          <i class="mdi mdi-instagram"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

  </footer>
  <!-- Footer -->
</template>

<script>
  export default {
    name: 'TheFooter',
  }
</script>

<style scoped>

.container1{
  background-color: #c13939;
  color: white;
  border-bottom: 1px solid #F2F2F2;
}
.container2{
  background-color: #c13939;
  color: white;
}
.logo{
  margin: auto;
}
.page-footer{
  width: 100%;
  position:inherit ;
  bottom:0;
}

a{
  text-decoration: none;
}

a:hover{
  color: #9a9a9a;
}

img{
  float:inherit;
  width:150px;
}

/* Colored social icons on mouse hover */
.mdi-twitter:hover {
  color: #00d9ff;
}
.mdi-facebook:hover {
  color: #005eff;
}
.mdi-linkedin:hover {
  color: #137ffa;
}
.mdi-instagram:hover {
  color: #e95950;
}

</style>
