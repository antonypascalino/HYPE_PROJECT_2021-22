<!--
  Page: bolognainbreve
  Description: It's the page that describe the city of Bologna.
-->

<template>
  <main class="page-container">
    <div class="body-container">
      <StaticHalfImage slide="/bolognaInBreve.jpg" title="BOLOGNA" />
      <div class="breadcrumb-section">
        <Breadcrumb :crumbs="crumbs" @selected="selected"/>
      </div>
      <br>
      <section class="section-la-nostra-missione">
        <p>Capoluogo della Città metropolitana e della regione Emilia Romagna, Bologna è situata tra le montagne dell'Appennino tosco-emiliano ed il cuore della Pianura Padana. Punto d’incontro tra nord e sud, tra est e ovest, da Bologna si raggiungono facilmente la Riviera Adriatica nonché Venezia, Firenze, Milano e Roma.
        </p>
      </section>

      <section class="section-la-nostra-missione">
        <div class="title-container">Perchè visitarla</div>
        <p>Città d’arte, cultura e commercio con un'efficiente struttura fieristica e una rinomata tradizione manifatturiera e motoristica, Bologna è nota per i quasi 40 km di portici, i più lunghi del mondo.
          Chiamata anche la “Dotta”, per via della sua antica Università, e la “Grassa” per la sua gastronomia, la città si fregia del titolo "Città creativa della Musica UNESCO" e vanta un centro storico medievale tra i più estesi e meglio conservati d’Europa, brulicante di locali, osterie, teatri e botteghe.
          Patria di grandi artisti tra cui Giorgio Morandi, Guido Reni, i Carracci, Guercino, Aspertini, il suo fascino ha catturato anche personaggi illustri come Mozart, Carducci, Dante, Rossini e il Nobel per la Fisica, Guglielmo Marconi.</p>
         </section>
      <section class="section-la-nostra-missione">
        <div class="title-container">Sulla Tavola</div>
        <p>Bologna è sinonimo di enogastronomia. Mortadella, "ragù alla Bolognese", tortellini, lasagne, tagliatelle, bollito, certosino, sono solo alcuni dei prodotti che l’hanno resa famosa nel mondo insieme alle mitiche sfogline, i cui corsi di cucina sono frequentati da visitatori di ogni continente. Altrettanto noti sono i Vini DOC dei Colli Bolognesi, fra i quali il tipico Pignoletto.</p>
      </section>
      <section class="section-la-nostra-missione">
        <div class="title-container">Per Divertirsi</div>
       <p>La città pulsa di vita di giorno e di notte nelle numerose osterie, teatri, gallerie, librerie, piazze e negozi. Nelle suggestive stradine adiacenti Piazza Maggiore, dove si snoda tra botteghe di prodotti tipici il vivace e pittoresco mercato del Quadrilatero, i più golosi non possono rinunciare ad una sosta nel più antico e rinomato laboratorio di cioccolato della città e all’aperitivo in un'antica enoteca.</p>
         </section>
      <section class="section-la-nostra-missione">
        <div class="title-container">Informazioni e consigli utili </div>
       <p>Bologna è ancora una città a misura d’uomo e, almeno nella zona del centro storico, le distanze si coprono a piedi in poco tempo. Arrivati in città, è consigliabile lasciare la macchina in uno dei numerosi parcheggi perché il centro è Zona a Traffico Limitato.</p>
         </section>
    </div>

  </main>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue';
import StaticHalfImage from "~/components/StaticHalfImage";

export default {
  layout: 'default',
  components: {
    Breadcrumb,
    StaticHalfImage
  },

  data() {
    return {
      crumbs: ['HOME', 'BOLOGNA IN BREVE'],
    };
  },
  methods: {
    selected(crumb) {
      console.log(crumb);
    },
  },
  head(){
    return{
      title: 'insideBO | Bologna in Breve',
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
  margin-top: -40px;
}
.body-container{
  margin-top: 60px;
}
.breadcrumb-section{
  margin-top: 10px;
}
.title-container {
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
