
export default async (models) => {

  //Point of Interest Table
  const poiList = [
    {
      name: "Piazza Maggiore",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.\n" +
        "Risale al 1200, quando il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l'importanza dell'istituzione comunale e dall'altro riunire le varie attività cittadine (scambi, commerci e servizi di vario genere).\n" +
        "Soltanto dal Cinquecento è iniziata a essere conosciuta come Piazza Maggiore, anche se dalla cacciata degli austriaci al 1944 alla piazza venne attribuito il nome del Re d'Italia, Vittorio Emanuele II. Quindi solo a partire dal 1945 la piazza e il territorio immediatamente circostante iniziarono a conoscersi ufficialmente con il nome attuale: Piazza Maggiore.",
      imgBackground: "piazzaMaggiore01.jpg",
      imgArray:["piazzaMaggiore02.jpg","piazzaMaggiore03.jpg","piazzaMaggiore04.jpg"],
    },
    {
      name: "Fontana del Nettuno",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "La fontana del Nettuno è una struttura in onore dell'omonima divinità, sita in piazza del Nettuno a Bologna: in ragione delle dimensioni, è soprannominata al Żigànt (il Gigante) in dialetto felsineo.Frutto della collaborazione tra Giambologna e Tommaso Laureti, l'opera fu voluta da Pier Donato Cesi (1522-1586) per glorificare il governo pontificio del papa Pio IV e fu terminata nel 1566.",
      imgBackground: "fontanaNettuno01.jpg",
      imgArray:["fontanaNettuno02.jpg","fontanaNettuno03.jpg"],
    },

  ]
  await models.Poi.bulkCreate(poiList)

  //Event Table
  const eventList = [
    {
      name: "Il Cinema Ritrovato",
      description: "Il Cinema Ritrovato è un evento sia per cinefili che per semplici amanti del cinema e impegna per alcuni giorni diverse sale cinematografiche e arene all’aperto ospitando da mattina a notte centinaia di film di tutte le epoche: un vero paradiso!",
      imgBackground: "ilCinemaRitrovato01.jpg",
      imgArray:[],
      address:"Bologna, Piazza Maggiore",
      date:"25 Giu 2022 - 03 Lug 2022",
      price:"Ingresso gratuito",
      website:"https://festival.ilcinemaritrovato.it/"
    },
    {
      name: "Festival della mortadella",
      description: "",
      imgBackground: "festivalMortadella01.jpg",
      imgArray:["",""],
      address:"",
      date:"",
      price:"",
      website:""
    },
    {
      name: "Arte Fiera",
      description: "",
      imgBackground: "arteFiera01.jpg",
      imgArray:["",""],
      address:"",
      date:"",
      price:"",
      website:""
    },
    {
      name: "Jazz Festival",
      description: "",
      imgBackground: "jazzFestival01.png",
      imgArray:["",""],
      address:"",
      date:"",
      price:"",
      website:""
    },

  ]
  await models.Events.bulkCreate(eventList)

  //Service Table
  const serviceList = [
    {
      name: "Trasporti",
      description:"Il servizio di trasporti pubblici di Bologna è fornito dalla compagnia emiliana T-Per che con una rete capillare di autobus collega le varie zone del capoluogo estendendosi anche nei comuni limitrofi.",
      address:"Via Guglielmo Marconi, 440122 Bologna BO",
      imgBackground: "trasporti01.jpeg",
      opening_hours:"Lun - Ven 7.00 - 19.00",
      website:"https://www.tper.it/orari"
    },
  ]
  await models.Service.bulkCreate(serviceList)

  //Itinerary Table
  const itineraryList = [
    {
      name: "Una passeggiata in Centro",
      description: "Piazza Maggiore, il salotto di Bologna, è il principale luogo di ritrovo dei bolognesi: sulla destra si può ammirare la Fontana del Nettuno, uno dei simboli della città, opera dello scultore Giambologna.",
      map:"",
      duration:"La durata è molto breve. Si tratta di circa 500 metri da percorrere a piedi.",
      imgBackground:"unaPasseggiataInCentro01.jpg"
    },
  ]
  await models.Itinerary.bulkCreate(itineraryList)

}
