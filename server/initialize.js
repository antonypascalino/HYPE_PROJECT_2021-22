export default async (models) => {
    const pointOfInterestList = [
        {
            title: "Piazza Maggiore",
            description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.\n" +
              "\n" +
              "Risale al 1200, quando il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l'importanza dell'istituzione comunale e dall'altro riunire le varie attività cittadine (scambi, commerci e servizi di vario genere).\n" +
              "\n" +
              "Soltanto dal Cinquecento è iniziata a essere conosciuta come Piazza Maggiore, anche se dalla cacciata degli austriaci al 1944 alla piazza venne attribuito il nome del Re d'Italia, Vittorio Emanuele II. Quindi solo a partire dal 1945 la piazza e il territorio immediatamente circostante iniziarono a conoscersi ufficialmente con il nome attuale: Piazza Maggiore.",
            img: ["@/static/puntidiinteresse/piazzamaggiorefoto/piazzamaggiore01", "@/static/puntidiinteresse/piazzamaggiorefoto/piazzamaggiore02"],
            visitInfo: "Orario: aperto sempre"
        },
      {
        title: "Piazza Maggiore1",
        description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.\n" +
          "\n" +
          "Risale al 1200, quando il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l'importanza dell'istituzione comunale e dall'altro riunire le varie attività cittadine (scambi, commerci e servizi di vario genere).\n" +
          "\n" +
          "Soltanto dal Cinquecento è iniziata a essere conosciuta come Piazza Maggiore, anche se dalla cacciata degli austriaci al 1944 alla piazza venne attribuito il nome del Re d'Italia, Vittorio Emanuele II. Quindi solo a partire dal 1945 la piazza e il territorio immediatamente circostante iniziarono a conoscersi ufficialmente con il nome attuale: Piazza Maggiore.",
        img: ["@/static/puntidiinteresse/piazzamaggiorefoto/piazzamaggiore01", "@/static/puntidiinteresse/piazzamaggiorefoto/piazzamaggiore02"],
        visitInfo: "Orario: aperto sempre"
      },
      {
        title: "Piazza Maggiore2",
        description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.\n" +
          "\n" +
          "Risale al 1200, quando il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l'importanza dell'istituzione comunale e dall'altro riunire le varie attività cittadine (scambi, commerci e servizi di vario genere).\n" +
          "\n" +
          "Soltanto dal Cinquecento è iniziata a essere conosciuta come Piazza Maggiore, anche se dalla cacciata degli austriaci al 1944 alla piazza venne attribuito il nome del Re d'Italia, Vittorio Emanuele II. Quindi solo a partire dal 1945 la piazza e il territorio immediatamente circostante iniziarono a conoscersi ufficialmente con il nome attuale: Piazza Maggiore.",
        img: ["@/static/puntidiinteresse/piazzamaggiorefoto/piazzamaggiore01", "@/static/puntidiinteresse/piazzamaggiorefoto/piazzamaggiore02"],
        visitInfo: "Orario: aperto sempre"
      },
    ]
    await models.pointOfInterest.bulkCreate(pointOfInterestList)
}
