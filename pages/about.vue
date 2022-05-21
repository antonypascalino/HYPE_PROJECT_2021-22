*/This page is the "Chi siamo" page that describes the company insideBo, in particular the team. It's a static page.*/

<template>
  <div class="page-container">

    <div class ="app-container">
      <Breadcrumb class="row justify-content-center mt-1" :crumbs="crumbs" @selected="selected"/>
    </div>
    <br>

    <section class="section-1">
      <div class="chi-siamo-container"> Chi Siamo</div>
      <br>
      <p>Un gruppo di 4 persone orientate alla creazione e sviluppo delle migliori tecnologie e alla comunicazione istituzionale degli Enti governativi italiani.
        Comunicazione tecnologica nel rispetto della normativa, sviluppo siti istituzionali, App native per il mondo mobile e integrazione con il vasto universo dei Social in un'ottica istituzionale, sono le caratteristiche tecniche fondamentali che ci contraddistinguono.
        Il Team sempre aperto a nuove collaborazioni e idee, è formato da ingegneri informatici.
      </p>
  </section>


    <section class="section-2">
      <div class="chi-siamo-container">Il team</div>
    </section>


    <section class="section-3">
      <div class="chi-siamo-container">La nostra Missione</div>
      <br>
      <p>Per noi non è il Cittadino che deve arrivare all’informazione ma è l’informazione a doverlo raggiungere, in un' ottica "Prima l'Utente" . Sempre. InsideBO è la nostra piccola rivoluzione.
        Il nostro intento è quello di attirare i turisti nella nostra bellissima Italia. Dopo 2 anni così difficili per tutti noi, è il momento di tornare a scoprire tutto ciò che di bello la nostra Bologna offre. </p>
    </section>

  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  layout: 'default',
  components: {Breadcrumb},

  data() {
    return {
      crumbs: ['HOME', 'ABOUT','CHI SIAMO'],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
}
</script>
<style>

.page-container{
}

.app-container {
  float: left;
  position: fixed;
  margin-left: 40px;
  z-index: 90;
}
.chi-siamo-container{
  margin-top: 90px;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 50px;
  display: flex;
  align-items: center;
  color: #C13939;
  background-color: #EBEBEB;
  width: inherit;

}
.section-1{
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  margin-left: 8px;
  margin-right: 8px;
}

.section-3{
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
}

</style>
