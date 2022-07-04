<!--
  Page: Area Legale
  Description: In this page is described the "area legale" of insideBO. It's a static page.
-->
<template>
  <main class="page-container">
    <!-- BreadCrumb Section -->
    <section class="breadcrumb-section">
      <breadcrumb
        :default-route="[{ title: 'HOME', path: '/' }]"
        current-page="Area Legale"
      />
    </section>

    <!-- Body Section -->
    <div class="body-container">
      <section class="section-arealegale">
        <div class="title-container">AREA LEGALE</div>
        <h4 class="copyright">Copyright</h4>
        <p>
          La documentazione, le immagini, i caratteri, il lavoro artistico, la
          grafica, il software e altri contenuti del sito sono di proprietà di
          insideBO. Il materiale contenuto nel sito web è protetto da copyright:
          non è consentito usare il contenuto o i marchi del sito per ogni altro
          scopo e fine se non quello espressamente citato. La riproduzione, la
          pubblicazione e la distribuzione, totale o parziale, di tutto il
          materiale originale contenuto in questo sito (tra cui, a titolo
          esemplificativo e non esaustivo, i testi, le immagini, le elaborazioni
          grafiche) sono espressamente vietate in assenza di autorizzazione
          scritta.
        </p>

        <h4 class="copyright">Assunzione di responsabilità</h4>
        <p>
          insideBO non assume alcuna responsabilità per eventuali errori od
          omissioni di qualsiasi tipo e per qualunque tipo di danno diretto,
          indiretto o accidentale derivante dalla lettura o dall’impiego delle
          informazioni pubblicate, o di qualsiasi forma di contenuto presente
          nel sito o per l’accesso o l’uso del materiale contenuto in altri siti
          ad esso collegati.
        </p>

        <h4 class="copyright">GOOGLE ANALITYCS</h4>
        <p>
          Questo sito web utilizza Google Analytics, un servizio di analisi web
          fornito da Google, Inc. (“Google”). Google Analytics utilizza dei
          “cookies”, che sono file di testo che vengono depositati sul Vostro
          computer per consentire al sito web di analizzare come gli utenti
          utilizzano il sito. Le informazioni generate dal cookie sull’utilizzo
          del sito web da parte Vostra (compreso il Vostro indirizzo IP)
          verranno trasmesse a, e depositate presso i server di Google negli
          Stati Uniti. Google utilizzerà queste informazioni allo scopo di
          tracciare e esaminare il Vostro utilizzo del sito web, compilare
          report sulle attività del sito web per gli operatori del sito web e
          fornire altri servizi relativi alle attività del sito web e
          all’utilizzo di Internet. Google può anche trasferire queste
          informazioni a terzi ove ciò sia imposto dalla legge o laddove tali
          terzi trattino le suddette informazioni per conto di Google. Google
          non assocerà il vostro indirizzo IP a nessun altro dato posseduto da
          Google. Potete rifiutarvi di usare i cookies selezionando
          l’impostazione appropriata sul vostro browser, ma ciò potrebbe
          impedirvi di utilizzare tutte le funzionalità di questo sito web.
          Utilizzando il presente sito web, voi acconsentite al trattamento dei
          Vostri dati da parte di Google per le modalità e i fini sopraindicati.
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
      title: 'insideBO • Area Legale',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is the "Area Legale" page',
        },
      ],
    }
  },
}
</script>
<style scoped>
.page-container {
  background-color: #f2f2f2;
  margin-top: -5px;
}
.breadcrumb-section {
  margin-top: 60px;
}
.body-container {
  margin-top: 40px;
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
  color: #c13939;
}
.section-arealegale {
  font-family: 'Raleway', 'Avenir', sans-serif;
  font-style: normal;
  margin-left: 8px;
  margin-right: 8px;
  text-align: justify;
  text-justify: inter-word;
}
h4.copyright {
  font-weight: bold;
}
</style>
