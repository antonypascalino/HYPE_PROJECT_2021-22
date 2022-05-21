<!--
  Component: TheFooter
  Description: Footer of the website with company icon and social icons
-->

<template>
  <!-- Footer -->
  <footer class="page-footer text-center text-lg-start text-muted">
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Rimani connesso sui nostri social Network: </span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="https://www.facebook.com" class="me-4 text-reset">
          <i class="mdi mdi-facebook"></i>
        </a>
        <a href="https://www.twitter.com" class="me-4 text-reset">
          <i class="mdi mdi-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" class="me-4 text-reset">
          <i class="mdi mdi-linkedin"></i>
        </a>
        <a href="https://www.instagram.com" class="me-4 text-reset">
          <i class="mdi mdi-instagram"></i>
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

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
            <p>
              <img class="logo" src="~/static/logoCompatto_rosso.png" alt="logo_compatto_rosso">
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">

            </h6>
            <p>
              <a href="/about" class="text-reset">  Chi siamo </a>
            </p>
            <p>
              <a href="/contatti" class="text-reset">Contattaci</a>
            </p>
            <p>
              <a href="/bolognainbreve" class="text-reset">Bologna in Breve</a>
            </p>
            <p>
              <a href="https://www.bolognatoday.it/meteo/" class="text-reset">Meteo</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              LINK UTILI
            </h6>
            <p>
              <a href="#!" class="text-reset">Area Legale</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Informativa sulla Privacy</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Cookie e Pubblicità</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
             &nbsp; &nbsp; CONTATTI
            </h6>
            <p><i class="fas fa-home me-3"></i> Via Mecenate 12, Bologna</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              insidebo@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i>TEL: +39 3319212318</p>
            <p><i class="fas fa-print me-3"></i>FAX: +39 011 7234011</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="copyright text-center p-4">
      © 2022 Tutti i diritti sono riservati:
      <a class="text-reset fw-bold" href="https://insidebo.herokuapp.com/">insideBO</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>

export default {
  name: 'TheFooter',
}
</script>

<style scoped>

.copyright{
  background-color: #C13939;
  color:white
}
.page-footer{
  background-color: white;
}
.container1{
  background-color: white;
  color:black
}
.logo{

  margin: auto;
}
</style>
