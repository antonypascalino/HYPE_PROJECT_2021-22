*/This page is the "Chi siamo" page that describes the company insideBo, in particular the team. It's a static page.*/

<template>
  <main class="page-container">

    <section class="breadcrumb-section">
      <breadcrumb
        :default-route="[{ title: 'HOME', path: '/' }]"
        current-page="Area Legale"
      />
    </section>

    <div class="body-container">
      <section class="section-chi-siamo">
        <div class="title-container">Area Legale</div>
        <h4 class="copyright">Copyright</h4>
        <p>La documentazione, le immagini, i caratteri, il lavoro artistico, la grafica, il software e altri contenuti del sito sono di proprietà di insideBO.
          Il materiale contenuto nel sito web è protetto da copyright: non è consentito usare il contenuto o i marchi del sito per ogni altro scopo e fine se non quello espressamente citato. La riproduzione, la pubblicazione e la distribuzione, totale o parziale, di tutto il materiale originale contenuto in questo sito (tra cui, a titolo esemplificativo e non esaustivo, i testi, le immagini, le elaborazioni grafiche) sono espressamente vietate in assenza di autorizzazione scritta.
        <h4>Assunzione di responsabilità</h4>
          insideBO non assume alcuna responsabilità per eventuali errori od omissioni di qualsiasi tipo e per qualunque tipo di danno diretto, indiretto o accidentale derivante dalla lettura o dall’impiego delle informazioni pubblicate, o di qualsiasi forma di contenuto presente nel sito o per l’accesso o l’uso del materiale contenuto in altri siti ad esso collegati.</p>
      <h4>GOOGLE ANALITYCS</h4>
        <p>Questo sito web utilizza Google Analytics, un servizio di analisi web fornito da Google, Inc. (“Google”). Google Analytics utilizza dei “cookies”, che sono file di testo che vengono depositati sul Vostro computer per consentire al sito web di analizzare come gli utenti utilizzano il sito. Le informazioni generate dal cookie sull’utilizzo del sito web da parte Vostra (compreso il Vostro indirizzo IP) verranno trasmesse a, e depositate presso i server di Google negli Stati Uniti. Google utilizzerà queste informazioni allo scopo di tracciare e esaminare il Vostro utilizzo del sito web, compilare report sulle attività del sito web per gli operatori del sito web e fornire altri servizi relativi alle attività del sito web e all’utilizzo di Internet. Google può anche trasferire queste informazioni a terzi ove ciò sia imposto dalla legge o laddove tali terzi trattino le suddette informazioni per conto di Google. Google non assocerà il vostro indirizzo IP a nessun altro dato posseduto da Google. Potete rifiutarvi di usare i cookies selezionando l’impostazione appropriata sul vostro browser, ma ciò potrebbe impedirvi di utilizzare tutte le funzionalità di questo sito web. Utilizzando il presente sito web, voi acconsentite al trattamento dei Vostri dati da parte di Google per le modalità e i fini sopraindicati.</p>

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

  head(){
    return{
      title: 'insideBO | Area Legale',
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
.breadcrumb-section{
  margin-top: 60px;
}
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

p{
  margin-top: 20px;
}

h4{
  font-weight: bold;
}
.copyright{
  margin-top: 20px;
}
</style>
