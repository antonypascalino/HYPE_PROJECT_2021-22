
export default async (models) => {

  //Point of Interest Table
  const poiList = [
    {
      name: "Piazza Maggiore",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.",
      img1: "piazzamaggiore01.jpg"
    },
    {
      name: "Fontana di Nettuno",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "ciao",
      img1:"2.jpg"
    },
    {
      name: "San Petronio",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.",
      img1:"2.jpg"
    },

  ]
  await models.Poi.bulkCreate(poiList)

  //Event Table
/*  const eventList = [
    {
      name: "Piazza Maggiore",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.\n" +
        "Risale al 1200, quando il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l'importanza dell'istituzione comunale e dall'altro riunire le varie attività cittadine (scambi, commerci e servizi di vario genere).\n" +
        "Soltanto dal Cinquecento è iniziata a essere conosciuta come Piazza Maggiore, anche se dalla cacciata degli austriaci al 1944 alla piazza venne attribuito il nome del Re d'Italia, Vittorio Emanuele II. Quindi solo a partire dal 1945 la piazza e il territorio immediatamente circostante iniziarono a conoscersi ufficialmente con il nome attuale: Piazza Maggiore.",
      images:"require('@/static/carousel/2.jpg')"
    },
  ]
  await models.Event.bulkCreate(eventList)*/
}
