*/This page is the "Chi siamo" page that describes the company insideBo, in particular the team. It's a static page.*/

<template>
  <main class="page-container">

    <section class="breadcrumb-section">
      <Breadcrumb   :crumbs="crumbs" @selected="selected"/>
    </section>

    <div class="body-container">
    <section class="section-chi-siamo">
      <div class="title-container"> Chi Siamo</div>
      <p>Un gruppo di 4 persone orientate alla creazione e sviluppo delle migliori tecnologie e alla comunicazione istituzionale degli Enti governativi italiani.
        Comunicazione tecnologica nel rispetto della normativa, sviluppo siti istituzionali, App native per il mondo mobile e integrazione con il vasto universo dei Social in un'ottica istituzionale, sono le caratteristiche tecniche fondamentali che ci contraddistinguono.
        Il Team sempre aperto a nuove collaborazioni e idee, è formato da ingegneri informatici.
      </p>
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
import Breadcrumb from '~/components/Breadcrumb.vue';

export default {
  layout: 'default',
  components: {
    Breadcrumb,

  },

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
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 200;
  font-size: 17px;
  margin-left: 8px;
  margin-right: 8px;
}

.section-la-nostra-missione{
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 200;
  font-size: 17px;
  margin-left: 8px;
  margin-right: 8px;
}
p{
  margin-top: 20px;
}

</style>
