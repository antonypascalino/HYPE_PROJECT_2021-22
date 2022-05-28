*/This page is the "Chi siamo" page that describes the company insideBo, in particular the team. It's a static page.*/

<template>
  <main class="page-container">

    <section class="breadcrumb-section">
      <Breadcrumb :crumbs="crumbs" @selected="selected"/>
    </section>

    <div class="body-container">
      <section class="section-chi-siamo">
        <div class="title-container">La nostra Sede e contatti</div>
        <map-view>
          <p>
            <span class="mdi mdi-map-marker"></span> Via Mecenate 12, Bologna

            <br />
            Orari: 8:00/12:00 da Lunedì a Venerdì
          </p>
          <div class="phone-number">
            <span class="mdi mdi-phone"></span> Tel:
            <a href="tel:+393347711504"> +39 3319212318</a>
          </div>
          <div class="phone-number">
            <span class="mdi mdi-fax"></span> Fax:
            <a href="fax:+393347711504">+39 011 7234011</a>
          </div>
          <div class="mail">
            <span class="mdi mdi-email"></span> Mail:
            <a href="insideBO@gmail.com">insideBO@gmail.com</a>
          </div>
        </map-view>
      </section>

      <section class="section-la-nostra-missione">
        <div class="title-container">La nostra Missione</div>
        <p>Per noi non è il Cittadino che deve arrivare all’informazione ma è l’informazione a doverlo raggiungere, in un' ottica "Prima l'Utente" . Sempre. InsideBO è la nostra piccola rivoluzione.
          Il nostro intento è quello di attirare i turisti nella nostra bellissima Italia. Dopo 2 anni così difficili per tutti noi, è il momento di tornare a scoprire tutto ciò che di bello la nostra Bologna offre. </p>
      </section>

    </div>

  </main>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
import MapView from '~/components/MapView.vue'
export default {
  layout: 'default',
  components: {
    Breadcrumb,
    MapView
  },

  data() {
    return {
      crumbs: ['HOME', 'CONTATTACI'],
      methods: {
        selected(crumb) {
          console.log(crumb);
        },
      },
    }
  },
  head(){
    return{
      title: 'insideBO|contattaci',
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
  margin-top: -60px;
}
.body-container{
  margin-top: 60px;
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
  margin-top: 20px;
}

</style>
