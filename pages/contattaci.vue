<!--
  Page: Contattaci
  Description: In this page is described all the ways to contact insideBO team. It's a static page.
-->
<template>
  <main class="page-container">
    <!-- BreadCrumb Section -->
    <section class="breadcrumb-section">
      <breadcrumb
        :default-route="[{ title: 'HOME', path: '/' }]"
        current-page="Contattaci"
      />
    </section>

    <!-- Body Section -->
    <div class="body-container">
      <section class="section-common section-sedeEcontatti">
        <div class="title-container">CONTATTI</div>
        <!-- Bootstrap Container -->
        <div class="container-fluid">
          <div
            class="row"
            style="text-align: justify; text-justify: inter-word"
          >
            <!-- First Column -->
            <div class="col-xl-3 col-lg-4 col-md-6" style="margin-top: 15px">
              <span class="mdi mdi-map-marker"></span> Via San Gervasio 12,
              Bologna
              <br />
              <span class="mdi mdi-clock"></span> 8:00/12:00 da Lunedì a Venerdì
            </div>
            <!-- End First Column -->
            <!-- Second Column -->
            <div
              class="col-xl-3 col-lg-4 col-md-6"
              style="margin-top: 10px; text-align: center; margin-bottom: 10px"
            >
              <div class="phone-number">
                <span class="mdi mdi-phone"></span> Tel:
                <a href="tel:+393347711504">+39 3319212318</a>
              </div>
              <div class="fax-number">
                <span class="mdi mdi-fax"></span> Fax:
                <a href="fax:+393347711504">+39 011 7234011</a>
              </div>
              <div class="mail">
                <span class="mdi mdi-email"></span>
                <a href="insideBO@gmail.com">insideBO@gmail.com</a>
              </div>
            </div>
            <!--End Second Column -->
          </div>
        </div>
      </section>

      <section class="section-common section-la-nostra-missione">
        <div class="title-container">LA NOSTRA MISSIONE</div>
        <p class="text-container">
          Per noi non è il Cittadino che deve arrivare all’informazione ma è
          l’informazione a doverlo raggiungere, in un' ottica "Prima l'Utente" .
          Sempre. InsideBO è la nostra piccola rivoluzione. Il nostro intento è
          quello di attirare i turisti nella nostra bellissima Italia. Dopo 2
          anni così difficili per tutti noi, è il momento di tornare a scoprire
          tutto ciò che di bello la nostra Bologna offre.
        </p>
      </section>
    </div>
  </main>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'

export default {
  layout: 'default',

  components: {
    Breadcrumb,
  },

  head() {
    return {
      title: 'insideBO • Contattaci',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'The "Contattaci" page is the page that helps users to find and to contact the team. ',
        },
      ],
    }
  },
}
</script>
<style scoped>
.page-container {
  margin-top: -40px;
  background-color: #f2f2f2;
}
.body-container {
  margin-top: 60px;
}
.breadcrumb-section {
  margin-top: 110px;
}
.title-container {
  margin-top: 40px;
  width: 100%;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  color: #c13939;
  background-color: #f2f2f2;
  padding-left: 80px;
}
.section-common {
  font-family: 'Raleway', 'Avenir', sans-serif;
  font-style: normal;
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 500;
  background-color: #f2f2f2;
  text-align: justify;
  text-justify: inter-word;
}
.text-container {
  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px;
}
.container-fluid {
  margin-top: 10px;
  justify-content: center;
  align-content: center;
  text-align: center;
  border: 3px solid lightgray;
  background-color: white;
  width: 60%;
  vertical-align: center;
}
.row {
  align-content: center;
  justify-content: center;
}
/*Mobile visualization*/
@media screen and (max-width: 500px) {
  .title-container {
    padding-left: 0px;
    text-align: center;
  }
  .text-container {
    font-size: 16px;
  }
  .container-fluid {
    width: 80%;
  }
}
</style>
