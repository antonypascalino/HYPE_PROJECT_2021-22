*/This page is the "Chi siamo" page that describes the company insideBo, in particular the team. It's a static page.*/

<template>
  <main class="page-container">

    <section class="breadcrumb-section">
      <Breadcrumb   :crumbs="crumbs" @selected="selected"/>
    </section>

    <div class="body-container">
      <section class="section-chi-siamo">
        <div class="title-container">PRIVACY</div>
        <p>Ai sensi dell’art. 13 Regolamento (UE) n. 2016/679 (“Regolamento”), insideBO fornisce le seguenti informazioni in merito alle modalità di gestione e ai trattamenti dei dati. </p>
     <h4>1. Tipi di dati raccolti, finalità e base giuridica del trattamento</h4>
        <p> sistemi informatici e le procedure software preposte al funzionamento del Sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet. In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dei terminali degli utenti che si connettono al sito, i MAC (Media Access Control) address, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l’orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all’ambiente informatico dell’utente. </p>
        <h4>2. Periodo di conservazione dei dati</h4>
        <p>I Dati raccolti ed elaborati a seguito della navigazione del Sito saranno conservati per tutto il periodo di erogazione del servizio e comunque cancellati o resi anonimi nel termine di 7 giorni. I Dati inviati autonomamente dagli Interessati attraverso gli strumenti presenti sul Sito saranno cancellati dopo aver fornito il servizio richiesto o aver risposto agli stessi e comunque nel termine massimo di 6 mesi dall’esaurimento di tale attività, ad eccezione di quelli necessari per il rispetto di normative fiscali, contabili e amministrative o per adempiere ad altri obblighi di legge e per documentare le attività svolte.</p>
     <h4>3. Modalità del trattamento</h4>
        <p>I Dati saranno trattati dal personale interno a Confimprese a ciò espressamente autorizzato, con strumenti elettronici, saranno organizzati in database e saranno memorizzati su qualsiasi tipo di supporto idoneo (tra cui quelli informatici e cartacei). Specifiche misure di sicurezza sono osservate per prevenire la perdita dei Dati, eventuali usi illeciti o non corretti degli stessi e accessi da parte di terzi non autorizzati. Il trattamento di Dati svolto da Confimprese non comporta processi decisionali automatizzati.</p>
      <h4>4. Conferimento dei Dati</h4>
        <p>Il conferimento dei Dati di Navigazione è necessario per la fornitura del servizio richiesto (navigazione sul sito) e obbligatoria per tale finalità; il mancato conferimento, comporterà l’impossibilità per Confimprese di consentire la navigazione sul Sito.

          Il conferimento degli ulteriori Dati è facoltativo; il mancato conferimento non comporta conseguenza in capo all’Interessato.</p>
    <h4>5. Comunicazione dei Dati</h4>
        <p>I Dati potranno essere comunicati a:

          (i) soggetti a cui sia riconosciuta la facoltà e l’interesse di accedervi da norme di legge;

          (ii) società, associazioni o studi professionali che prestino servizi ed attività per conto di Confimprese in qualità di Responsabili del Trattamento per l’adempimento di obblighi di legge, nonché per ogni esigenza organizzativa ed amministrativa necessaria per fornire i servizi richiesti (“Responsabili”). I nominativi dei Responsabili sono riportati in un elenco disponibile presso Confimprese (da richiedersi ai recapiti indicati al punto 9).

          I Dati non saranno diffusi.</p>
        <h4>6. Trasferimento di Dati in Paesi che non fanno parte dell’Unione Europea o ad organizzazioni internazionali</h4>
     <p>insideBO non trasferisce i Dati in Paesi che non fanno parte dell’Unione Europea o ad organizzazioni internazionali.</p>
     <h4>7. Collegamento a siti o servizi di soggetti terzi</h4>
        <p>La presente informativa è resa solo per i trattamenti di dati personali effettuati attraverso il Sito o gli strumenti previsti dallo stesso, e non anche per altri siti web eventualmente consultati dall’Interessato tramite collegamento, i cui gestori operano in qualità di titolari autonomi del trattamento. Si invitano pertanto gli Interessati a leggere con attenzione, prima di accedere a servizi di soggetti terzi, le loro informative sul trattamento dei dati personali.</p>
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
      crumbs: ['HOME', 'PRIVACY'],
    };
  },
  head(){
    return{
      title: 'insideBO | Privacy',
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

.breadcrumb-section{
  margin-top: 95px;
}
</style>
