*/This page is the "Chi siamo" page that describes the company insideBo, in particular the team. It's a static page.*/

<template>
  <main class="page-container">
    <div class="body-container">
    <section class="breadcrumb-section">
      <breadcrumb
        :default-route="[{ title: 'HOME', path: '/' }]"
        current-page="Contattaci"
      />
    </section>

    <div class="body-container">
      <section class="section-chi-siamo">
        <div class="title-container">La nostra Sede e contatti</div>
        <div class="row">
          <div class="col-sm-9"><Map :x=43.78198 :y=11.28143 name="Via San Gervasio, 12"></Map></div>
          <div class="col-sm-3">
            <br><br><br>
            <p class="address-container">
              <span class="mdi mdi-map-marker"></span> Via San Gervasio 12, Bologna

              <br />
              <span class="mdi mdi-clock"></span>  8:00/12:00 da Lunedì a Venerdì
            </p>

            <br />
            <div class="phone-number">
              <span class="mdi mdi-phone"></span> Tel:
              <a href="tel:+393347711504"> +39 3319212318</a>
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
        </div>


      </section>

      <section class="section-la-nostra-missione">
        <div class="title-container">La nostra Missione</div>
        <p>Per noi non è il Cittadino che deve arrivare all’informazione ma è l’informazione a doverlo raggiungere, in un' ottica "Prima l'Utente" . Sempre. InsideBO è la nostra piccola rivoluzione.
          Il nostro intento è quello di attirare i turisti nella nostra bellissima Italia. Dopo 2 anni così difficili per tutti noi, è il momento di tornare a scoprire tutto ciò che di bello la nostra Bologna offre. </p>
      </section>

    </div>
    </div>
  </main>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
import map from "~/components/Map";
export default {
  layout: 'default',
  components: {
    Breadcrumb,
    map
  },

  head(){
    return{
      title: 'insideBO | Contattaci',
      meta:[
        {
          hid: 'description',
          name: 'description',
          content: '',
        }
      ]
    }
  }
}
</script>
<style scoped>
.page-container{
  margin-top: -5px;
}
.body-container{
  margin-top: 40px;
}
.title-container{
  margin-top: 40px;
  width: 100%;
  margin-top: 40px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  display: flex;
  color: #C13939;
  background-color: #EBEBEB;

}
.section-chi-siamo{
  font-family: 'Inria Sans';
  font-style: normal;

  font-size: 17px;
  margin-left: 8px;
  margin-right: 8px;
}

.section-la-nostra-missione{
  font-family: 'Inria Sans';
  font-style: normal;

  font-size: 17px;
  margin-left: 8px;
  margin-right: 8px;
}
p{

  padding-top: 10px;
  padding-left: 8vw;
  padding-right: 8vw;
  font-size: 22px
}
a{
  text-decoration: none;
  color:black
}
.address-container{
  text-align: center;
}
.phone-number{
  text-align: center;
}

.mail{
  text-align: center;
}
.fax-number{
  text-align: center;
}

.breadcrumb-section{
  margin-top: 60px;
}

</style>
