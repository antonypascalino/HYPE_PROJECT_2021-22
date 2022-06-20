/*
• Events – At least 10 instances
• Points of Interest – At least 15 instances
      o There must be enough instances of POI to populate the 3 itineraries, assuming that
        a realistic itinerary has at least 5 POIs
• Itineraries – At least 3 instances
• Service types – At least 5 instances
 */
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
      x:44.49371,
      y:11.34304
    },
    {
      name: "Fontana del Nettuno",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Situata al centro dell’omonima piazza, la fontana troneggiata dalla divinità conduce alla più grande Piazza Maggiore. Soprannominata in dialetto al Żigànt (il Gigante), fu ultimata nel 1566 per mano di Giambologna e Tommaso Laureto al fine di glorificare il governo pontificio di Pio IV.\n" +
        "La figura in bronzo del Nettuno è alta circa 3,2 metri. La posa solenne è un simbolo della potenza dello stato pontificio di quell’epoca: la mano sinistra dal palmo aperto diretta controvento quasi a voler calmare i flutti e la mano destra che regge un imponente tridente. L’intera composizione è caratterizzata da un grande slancio e dinamismo dovuta alle figure implementate sul blocco centrale ricoperto di marmo di Verona, come le nereidi e i delfini.\n" +
        "Il tridente impugnato dal Nettuno è stata fonte di ispirazione per il logo della casa di auto sportive Maserati che lo introdusse a partire dal 1926.\n",
      imgBackground: "fontanaNettuno01.jpg",
      imgArray:["fontanaNettuno02.jpg","fontanaNettuno03.jpg"],
      x:44.49426,
      y:11.34266
    },
    {
      name: "Basilica di San Petronio",
      visit_info:"Tutti i giorni ingresso libero dalle 8.30 alle 13.30 e dalle 15.00 alle 18.30.",
      description: "La basilica di San Petronio è la chiesa più grande della città, nonché una delle più grandi basiliche italiane ed europee. La sua estensione raggiunge i 132 metri di lunghezza e 51 di altezza. La peculiarità, tuttavia è che risulta incompiuta: lo si può chiaramente notare dalla facciata, ricoperta solo per metà in marmo.\n" +
        "Iniziata nel 1390, è l’ultima grande opera tardo gotica italiana. Il progetto inizialmente era a carico di Antonio di Vincenzo ma nel 1514, durante i lavori di costruzione, Arduino degli Arriguzzi propose un nuovo piano: un’imponente pianta a croce latina che superava le dimensioni della basilica di San Pietro a Roma. Per questo motivo, secondo la leggenda, il papa Pio IV interruppe la realizzazione, focalizzando le risorse sull’Archiginnasio.\n" +
        "L’interno è suddiviso in tre navate e fu attuato in epoche diverse. Si contano ben ventidue cappelle, dove si possono scorgere dipinti e decorazioni di illustri artisti del tempo, tra cui Donato Creti e Girolamo Mazzola detto “Parmigianino”. Tra queste raffigurazioni, tuttavia, vi è un affresco che suscita tutt’ora controversie: ispirandosi all’inferno di Dante, l’autore Giovanni da Modena ha rappresentato una serie di peccatori e dannati tra cui Maometto che viene scuoiato da un diavolo.\n" +
        "Un’ulteriore caratteristica di San Petronio è la meridiana che si trova al suo interno e che si estende nella pavimentazione per una lunghezza di circa 67 metri, rendendola la più lunga al mondo.\n" ,
      imgBackground: "sanPetronio01.jpg",
      imgArray:["sanPetronio02.jpg","sanPetronio03.jpg","sanPetronio04.jpg"],
      x:44.49273,
      y:11.34303
    },
    {
      name: "Palazzo Re Enzo",
      visit_info:"Ingressi ogni 10 minuti, dalle 10:00 alle 12:20 e dalle 14 alle 18:00.",
      description: "Palazzo Re Enzo è un palazzo storico situato in Piazza Maggiore di fronte alla basilica di San Petronio. Fu costruito tra il 1244 e il 1246 per soddisfare un’esigenza di ampliamento degli edifici del comune. Il nome fu attribuito poiché nel 1249 divenne la “dimora” di Enzo, re di Sardegna, figlio di Federico II di Svevia, catturato durante la battaglia di Fossalta che vide le truppe felsinee sormontare l’esercito imperiale. Dopo 23 anni di prigionia, Re Enzo morì e fu sepolto come sua volontà nella basilica bolognese di San Domenico, dove tutt’oggi è presente la sua tomba.\n" +
        "Il palazzo ha uno stile gotico-medievale frutto anche degli importanti restauri avvenuti nel 1905.\n" ,
      imgBackground: "palazzoReEnzo01.jpg",
      imgArray:["palazzoReEnzo02.jpg","palazzoReEnzo03.jpg"],
      x:44.49491,
      y:11.34317
    },
    {
      name: "Palazzo D’Accursio",
      visit_info:"martedì, mercoledì, giovedì, sabato e domenica dalle ore 10.00 alle ore 18.30 e venerdì dalle 15 alle 18.30 (lunedì chiuso). INGRESSO LIBERO.",
      description: "Sede del comune dal 1336, Palazzo d’Accursio è uno degli edifici che completano Piazza Maggiore. Deve il nome all’importante giurista e maestro di diritto Accursio (1184-1236). L’imponente edificio di circa 15.000 mq è caratterizzato da una torre con un orologio, costruito nella seconda metà del XV secolo. La facciata su Piazza Grande presenta anche una statua del Papa Gregorio XIII ed ulteriori decorazioni caratteristiche, come una rappresentazione della Madonna con bambino. \n" +
        "Si hanno due ingressi principali, quello su Piazza del Nettuno però non conduce alle camere del comune, bensì alla biblioteca Sala Borsa, la più grande ed importante della città. \n" +
        "Superato il cortile interno dall’ingresso di Piazza Maggiore, si arriva ad una particolare scalinata attribuita al Bramante, l’ampiezza della costruzione facilitava l’ingresso a cavallo dei rappresentanti comunali.\n" +
        "All’interno si trovano numerose sale decorate ed in particolare La Collezione di Arte Comunale, tra cui si possono osservare le opere del pittore bolognese Giorgio Morandi.\n" ,
      imgBackground: "palazzoAccursio01.jpg",
      imgArray:["palazzoAccursio02.jpg","palazzoAccursio03.jpg"],
      x:44.49399,
      y:11.34217
    },
    {
      name: "Torre degli Asinelli e Garisenda",
      visit_info:"La Torre degli Asinelli è aperta CON PRENOTAZIONE OBBLIGATORIA con i seguenti orari:\n" +
        "Tutti i giorni\n" +
        "Quattro ingressi all'ora (ai 00, ai 15, ai 30 e ai 45), primo ingresso ore 10:00, ultimo ore 17:00.",
      description: "Il simbolo della città, poste in Piazza di Porta Ravegnana, punto di incontro delle principali vie del centro, sono l’elemento più riconoscibile di Bologna. \n" +
        "La prima, la torre degli Asinelli deve presumibilmente la sua realizzazione al cavaliere ghibellino Gerardo Asinelli. I lavori iniziarono nel 1109 e terminarono dieci anni più tardi. L’altezza è di circa 97 metri e presenta una scalinata di 498 gradini.\n" +
        "La torre Garisenda invece fu sempre costruita per mano ghibellina, per il volere della famiglia omonima. Inizialmente alta 60 metri, venne ridotta a 48 per via di cedimenti strutturali insorti durante la realizzazione che ne conferirono la peculiare pendenza. La torre fu anche soggetto di paragone nella Divina Commedia, dove Dante la utilizzò come similitudine per indicare il Gigante Anteo nel canto XXXI dell’Inferno.\n" ,
      imgBackground: "torri01.jpg",
      imgArray:["torri02.jpg","torri03.jpg"],
      x:44.49420,
      y:11.34677
    },
    {
      name: "Archiginnasio",
      visit_info:"Lunedì-venerdì 9-19. Sabato ore 9-14.",
      description: "A pochi passi dalla basilica di San Petronio e da Piazza Maggiore si colloca uno degli edifici più significativi della città. La biblioteca comunale dell’Archiginnasio, divenuta tale nel 1838, presenta una ricca collezione di volumi antichi. \n" +
        "L’interno è costituito da diverse sale studio riccamente decorate dagli stemmi delle ricche famiglie felsinee dell’epoca. \n" +
        "La sala più caratteristica è certamente il teatro anatomico, un anfiteatro in legno d’abete corredato da statue.\n" +
        "L’Archiginnasio fu gravemente colpito dai bombardamenti della Seconda Guerra Mondiale. Oggi, tuttavia, lo si può ammirare in tutto il suo splendore grazie ai restauri e ricostruzioni effettuati nei decenni successivi.\n" ,
      imgBackground: "archiginnasio02.jpg",
      imgArray:["archiginnasio01.jpg","archiginnasio03.jpg"],
      x:44.49205,
      y:11.34341
    },
    {
      name: "Sala Borsa",
      visit_info:"Salaborsa è aperta dal lunedì al venerdì dalle 13 alle 19.",
      description: "Situata all’ingresso di Piazza del Nettuno di Palazzo d’Accursio, Sala Borsa è la biblioteca pubblica multimediale più celebre di Bologna. Al suo interno possono essere consultati sia volumi cartacei che digitali, oltre che a CD, DVD e fumetti.\n" +
        "Numerosi sono gli eventi e gli ospiti illustri che vi partecipano ogni anno. Solo nel 2019 a Sala Borsa sono stati effettuati 530.000 prestiti. \n" +
        "Nell’androne principale, il pavimento in vetro rivela delle rovine romane visitabili.\n" ,
      imgBackground: "salaBorsa01.jpg",
      imgArray:["salaBorsa02.jpg","salaBorsa03.jpg"],
      x:44.49469,
      y:11.34214
    },
    {
      name: "Piazza Santo Stefano",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Proseguendo dalle due Torri e superando piazza della Mercanzia si può facilmente raggiungere Piazza Santo Stefano. \n" +
        "Lo slargo triangolare è circondato da importanti palazzi, tra cui Corte Isolani. La piazza è anche comunemente chiamata “Piazza delle Sette Chiese”, poiché sul fronte opposto si erge il complesso della Basilica di Santo Stefano.\n" +
        "La piazza è celebre anche per le manifestazioni ed il mercato di antiquariato che si svolge ogni primo week end del mese.\n" ,
      imgBackground: "piazzaSantoStefano01.jpg",
      imgArray:["piazzaSantoStefano02.jpg","piazzaSantoStefano03.jpg"],
      x:44.49213,
      y:11.34828
    },
    {
      name: "Basilica di Santo Stefano",
      visit_info:"Aperta tutti i giorni 8.00 – 19.00 (durante le funzioni religiose la visita turistica potrebbe essere limitata o sospesa.",
      description: "Conosciuto anche come il complesso delle “Sette Chiese”, si affaccia sul lato sud-est della piazza omonima.\n" +
        "Fondata in epoca romana intorno al 100 d.C., la basilica, inizialmente tempio pagano dedicato ad Iside, fu soggetto di numerose ricostruzioni ed ampliamenti che passano dall’epoca romana alle prime invasioni longobarde. Gli ultimi edifici risalgono al periodo tra il X e il XIII secolo e furono edificati dall’organo dei Benedettini.\n" +
        "La chiesa del Crocefisso di origine longobarda si affaccia su Piazza Santo Stefano mentre all’interno si hanno cortili di stampo romano, come il cortile di Pilato ed il museo che conserva opere di diverse epoche.\n" ,
      imgBackground: "basilicaSantoStefano01.jpg",
      imgArray:["basilicaSantoStefano02.jpg","basilicaSantoStefano03.jpg"],
      x:44.49207,
      y:11.34877
    },
    {
      name: "Il Mercato del Quadrilatero",
      visit_info:"Segue gli abituali orari di apertura dei negozi.",
      description: "A partire dalle prime ore del giorno un insieme di schiamazzi, odori, bancarelle e botteghe contenenti cibi di ogni genere fanno da sfondo al vivo brulicare di venditori e clienti che si accalcano nelle sinuose vie adiacenti a Piazza Maggiore denominate “il Quadrilatero”. Qui è possibile trovare le fresche pietanze bolognesi ricche di gusto e sapore. Dai salumi più pregiati al pesce fresco, pasta sfoglia e tortellini fatti a mano con cura. In questo mercato si può scorgere un lato più vero della città e meno turistico" ,
      imgBackground: "quadrilatero01.jpg",
      imgArray:["quadrilatero02.jpg","quadrilatero03.jpg"],
      x:44.49353,
      y:11.34518
    },
    {
      name: "Via D’Azeglio",
      visit_info:"via D’Azeglio è liberamente accessibile senza limitazioni di orario. La casa di Lucio Dalla viene aperta solo in alcuni periodi dell’anno.",
      description: "Celebre via del centro storico di Bologna che collega Piazza Maggiore a Via San Mamolo, deve il nome al politico, storico, scrittore e patriota italiano Massimo D’Azeglio.\n" +
        "Via di importanza sociale per i cittadini bolognesi, è suddivisa in una parte pedonale dove sono presenti un insieme di negozi moderni e botteghe storiche e una parte dove è consentita anche la circolazione dei mezzi. \n" +
        "Nella via vi è la dimora del defunto cantautore bolognese di fama internazionale Lucio Dalla. \n" ,
      imgBackground: "viaAzeglio01.jpg",
      imgArray:["viaAzeglio02.jpg","viaAzeglio03.jpg"],
      x:44.48856,
      y:11.33986
    },
    {
      name: "La Cattedrale di San Pietro",
      visit_info:"Orari di apertura ; Giovedi, 08:00 - 18:45 ; Venerdi, 08:00 - 18:45 ; Sabato, 08:00 - 18:45 ; Domenica, 08:00 - 18:45.",
      description: "San Pietro è la cattedrale della città. Collocata in Via Indipendenza, la chiesa fu consacrata ufficialmente nel 1184.\n" +
        "La cattedrale fu soggetta a diversi cambiamenti fino ad assestarsi con uno stile barocco, che tuttavia, fece perdere ogni traccia del precedente impianto romano. La facciata è composta da mattoni rossi e decorazioni in marmo bianco che lasciano spazio ai mastodontici portali che suggeriscono l’impianto interno a tre navate.\n" +
        "Il campanile è la seconda torre più alta di Bologna con ben 70 metri.\n" ,
      imgBackground: "cattedraleSanPietro01.jpg",
      imgArray:["cattedraleSanPietro02.jpg","cattedraleSanPietro03.jpg"],
      x:44.49570,
      y:11.34350
    },
    {
      name: "La finestrella sul Canale",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Raggiungendo via Piella è possibile scorgere una piccola apertura quadrata che affaccia su un canale. Questa “finestrella” è celebre poiché suggerisce il passato di Bologna, tanto che quell’insieme di vie è soprannominato “la piccola Venezia”. \n" +
        "Fino al primo dopoguerra, Bologna era pervasa da canali che estendevano il corso del fiume Reno e semplificavano il trasporto di materie prime che giungevano per essere lavorate nei vari opifici, in particolare nei laboratori di produzione della seta.\n" +
        "Dai primi anni del Novecento, i canali furono tutti cementati, fatta eccezione per quello di via delle Moline, osservabile dalla suggestiva finestra.\n" ,
      imgBackground: "finestra01.jpg",
      imgArray:["finestra02.jpg","finestra03.jpg"],
      x:44.49856,
      y:11.34520
    },
    {
      name: "I Portici",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Nominati patrimonio dell’umanità dall’Unesco, i portici sono la caratteristica dominante e più peculiare della città. Solamente nel centro storico si dipanano per circa 40 km e aggiungendo anche le strade fuori porta raggiungono la lunghezza di quasi 65km, tanto da rendere Bologna l’unica città al mondo ad averne un così alto numero.\n" +
        "Nacquero nel tardo medioevo per espandere inizialmente gli spazi abitativi dei piani superiori, successivamente vennero impiegati per commerciare nelle strade con qualsiasi condizione atmosferica.\n" +
        "Vi sono diversi stili che delineano le varie epoche di realizzazione. I più antichi di epoca medievale possono essere trovati in via Marsala o in Strada Maggiore, sono di semplice costruzione poiché utilizzano principalmente delle travi in legno. \n" +
        "Il complesso più celebre tuttavia è quello che, partendo da Porta Saragozza, conduce fino alla chiesa di San Luca, arroccata sul Colle della Guardia.\n" ,
      imgBackground: "portici01.jpg",
      imgArray:["portici02.jpg","portici03.jpg"],
      x:44.49181,
      y:11.34398
    },
    {
      name: "San Luca e i Portici",
      visit_info:"L'ingresso è gratuito durante la settimana e a pagamento nei giorni festivi",
      description: "Partendo da Porta Saragozza si può procedere con una lunga camminata di quasi 4km interamente all’ombra di un complesso di un numero simbolico 666 portici. Giunti a destinazione in cima al Colle della Guardia si potrà accedere al Santuario della Madonna di San Luca. \n" +
        "La chiesa barocca color mattone è sormontata da una cupola dotata di osservatorio alta ben 42 metri. All’interno della struttura dalla pianta a croce greca è custodita l’icona della Vergine col Bambino, che ritualmente una volta ogni anno nel mese di maggio viene prelevata e portata seguita da una lunga processione di prelati e fedeli di tutta la città nella cattedrale di San Pietro in Via dell’Indipendenza.\n" +
        "Sull’altare sono inoltre presenti le pale di Guido Reni, Donato Creti e Guercino.\n" ,
      imgBackground: "porticiSanLuca01.png",
      imgArray:["porticiSanLuca02.jpg", "porticiSanLuca03.jpg"],
      x:44.47909,
      y:11.29812
    },
    {
      name: "Mura e Porte",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Le mura hanno cinto la città di Bologna a partire dal III secolo d.C. e l’hanno fatto fino all’inizio del XX secolo quando sono state parzialmente abbattute per lasciare spazio ai viali di circonvallazione.\n" +
        "I resti più antichi sono stati edificati in corrispondenza del crollo dell’Impero Romano di Occidente al fine di difendersi dalle invasioni barbariche. Il materiale di cui erano composte era la selenite. Una seconda cinta fu costruita in epoca medievale intorno all’anno 1100, di proporzioni maggiori rispetto alle precedenti mura. La terza cerchia è nominata “Circla” è la più recente e corrisponde come forma a quella degli attuali viali.\n" +
        "Le porte sono uno degli ultimi baluardi delle antiche mura che dal III secolo d.C. hanno accerchiato e difeso la città. Si hanno in totale 12 porte, di cui due non sono più esistenti. Ogni porta, di stampo romano, ha uno stile diverso. Porta Castiglione, ad esempio è alta ed imponente, mentre Porta Saragozza, con le sue torri ha uno sviluppo più orizzontale che ne conferisce stabilità.\n" ,
      imgBackground: "porta01.jpg",
      imgArray:["porta02.jpg", "porta03.jpg", "porta04.jpg"],
      x:44.4470,
      y:11.4138
    },
    {
      name: "Zona Universitaria",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "“La Dotta”, uno degli appellativi con cui si fa riferimento a Bologna, deve la propria origine alla lunga storia universitaria della città. Attualmente la maggior parte delle sedi sono concentrate nella zona lungo Via Zamboni, che è diventata inoltre negli anni uno dei centri della vita notturna degli studenti. \n" +
        "La strada che inizia a partire da Piazza di Porta Ravegnana, sotto le due torri, vede un susseguirsi di locali e bar, superando il conservatorio, si termina nella celebre Piazza Verdi, denominata così in onore del compositore italiano. È il principale luogo di ritrovo dei giovani. Qui possiamo osservare gli splendidi edifici di stampo medievale e l’importante Teatro Comunale.\n" +
        "Via Zamboni prosegue il suo corso tra gli edifici universitari fino a Porta San Donato.\n" ,
      imgBackground: "universita01.jpg",
      imgArray:["universita02.jpg", "universita03.jpg"],
      x:44.49748,
      y:11.35341
    },
    {
      name: "Giardini Margherita",
      visit_info:"Il parco è aperto tutti i giorni della settimana 24h al giorno.",
      description: "Con i suoi 26 ettari, si tratta del parco più grande di Bologna. I Giardini Margherita furono inaugurati nel 1879. Ispirati ai giardini inglesi del periodo romantico, tutt’ora mantengono le caratteristiche originali del tempo. Gli ampi prati e la vegetazione rigogliosa lasciano spazio al laghetto centrale, abitato da numerosi pesci e tartarughe.\n" +
        "Luogo prediletto dai bolognesi durante le afose giornate estive, durante la costruzione fu rinvenuta una tomba etrusca tutt’ora presente.\n" ,
      imgBackground: "giardiniMargherita01.jpg",
      imgArray:["giardiniMargherita02.jpg","giardiniMargherita03.jpg"],
      x:44.4822,
      y:11.3526
    },
    {
      name: "Stadio Renato Dall’Ara ",
      visit_info:"Aperto in occasione di eventi e partite.",
      description: "Lo stadio più importante e grande della città. La storica arena è stata teatro delle più grandi imprese calcistiche della nazionale italiana e dalla squadra del Bologna, oggi allenata da Sinisa Mihajlovic. \n" +
        "Lo stadio fu inaugurato durante l’epoca fascista, più precisamente nel 1927. La caratteristica più particolare è sicuramente la Torre di Maratona, che si erge con i suoi 42 metri di altezza a sostegno della tribuna est.\n" ,
      imgBackground: "stadio01.jpg",
      imgArray:["stadio02.jpg","stadio03.jpg"],
      x:44.49229,
      y:11.30997
    }

  ]
  await models.Poi.bulkCreate(poiList)

  //Event Table
  const eventList = [
    {
      name: "Il Cinema Ritrovato",
      description: "Il Cinema Ritrovato è un evento sia per cinefili che per semplici amanti del cinema e impegna per alcuni giorni diverse sale cinematografiche e arene all’aperto ospitando da mattina a notte centinaia di film di tutte le epoche: un vero paradiso!",
      imgBackground: "ilCinemaRitrovato01.jpg",
      imgArray:["ilCinemaRitrovato02.jpg","ilCinemaRitrovato03.jpg"],
      address:"Bologna, Piazza Maggiore",
      date:"25 Giu 2022 - 03 Lug 2022",
      price:"Ingresso gratuito",
      website:"https://festival.ilcinemaritrovato.it/",
      type:0,
      firstDay:'2022-06-25'
    },
    {
      name: "Cersaie",
      description: "Cersaie è la rinomata esposizione internazionale delle ceramiche e dell'arredobagno. Si tiene ogni anno a BolognaFiere ma non mancano gli allestimenti all'interno delle mura dove è possibile osservare delle meravigliose composizioni di design e materiali all'avanguardia",
      imgBackground: "cersaie01.jpg",
      imgArray: ["cersaie02.jpg", "cersaie03.jpg","cersaie04.jpg"],
      address: "Viale della Fiera 20, 40128 Bologna (BO)",
      date: "26 Settembre 2022 - 30 Settembre 2022",
      price: "Ingresso gratuito",
      website: "https://www.cersaie.it/it/index.php",
      type: 0,
      firstDay:'2022-09-26'
    },
    {
      name: "Festival della Mortadella",
      description: "La mortadella, \"regina rosa\" della gastronomia bolognese, è senza dubbio il salume che più di tutti rappresenta il territorio nel mondo, tanto che i termini \"mortadella\" e \"Bologna\" sono spesso usati come sinonimi. Per la precisione è nella cittadina di Zola Predosa che la mortadella ha la sua capitale mondiale: qui hanno sede le principali aziende produttrici della mortadella e qui ogni anno si organizza il festival più rosa e gustoso del mondo: \"Mortadella, please\", che quest'anno festeggia l'edizione numero 13.\n",
      imgBackground: "festivalMortadella01.jpg",
      imgArray:["festivalMortadella02.jpg"],
      address:"Piazza Grande, 40069 Zola Predosa (BO)",
      date:"20 Settembre 2022 - 22 Settembre 2022",
      price:"ingresso libero, ristorazione a pagamento",
      website:"www.mortadellaplease.eu/",
      type:0,
      firstDay:'2022-09-20'
    },
    {
      name: "Arte Fiera",
      description: "Arte Fiera ha riaperto le porte dal 13 al 15 maggio 2022, animata da uno spirito di ripresa e dal desiderio di poter ritrovare in presenza gli operatori e il pubblico dell’arte, dopo la decisione di rimandare la tradizionale edizione di fine gennaio a causa della pandemia.\n" +
        "\n" +
        "Terza edizione fisica sotto la direzione artistica di Simone Menegoi - quella del 2021 è stata sostituita dal progetto culturale online Playlist - Arte Fiera 2022 ha riproposto i punti di forza della formula messa a punto nelle due edizioni precedenti, puntando con decisione alla qualità espositiva. “Arte Fiera si ripresenta a testa alta: con una selezione di gallerie senza cedimenti qualitativi, e che si arricchisce anzi di alcune interessanti new entry; con allestimenti rinnovati; con un percorso di visita più razionale ed efficiente”, dichiarava Menegoi.",
      imgBackground: "arteFiera01.jpg",
      imgArray:["arteFiera03.jpg","arteFiera04.jpg"],
      address:"Viale della Fiera 20, 40128 Bologna (BO)",
      date:" dal 13 al 15 maggio 2022",
      price:"26 euro",
      website:"http://www.artefiera.it/home/776.html",
      type:0,
      firstDay:'2022-05-13'
    },
    {
      name: "Fiera del Libro",
      description: "Dalla prima edizione del 1927, la Fiera del Libro è diventata un appuntamento fisso nell’agenda cittadina, atteso non solo dai bibliofili, ma anche dai semplici appassionati.\n" +
        "\n" +
        "Passeggiando per porta Galliera —a pochi passi dalla Stazione Centrale— potrete trovare una vasta e specializzata offerta di libri, sviluppata in oltre 400 metri quadri d’esposizione: non solo rare edizioni antiche e ricercate, ma anche migliaia di libri di seconda mano o nuovi a metà prezzo, oltre ad una vasta collezione di fumetti, poster vintage e dischi in vinile.",
      imgBackground: "fieraLibro01.jpg",
      imgArray:["fieraLibro02.png", "fieraLibro01.png"],
      address:"Piazza XX Settembre (Porta Galliera), 40121 Bologna (BO)",
      date:"18 Marzo 2022 – 1 Maggio 2022",
      price:"Ingresso gratuito",
      website:"https://www.fieradellibrobologna.it/",
      type:0,
      firstDay:'2022-03-18'
    },
    {
      name: "StraBologna",
      description: "StraBologna è la camminata ludico motoria non competitiva organizzata da UISP Bologna che si svolge nel cuore della città in una domenica di primavera anticipata da due giorni di eventi in Piazza Maggiore, per promuovere gli ideali di benessere, lo sport per tutti, l’inclusione sociale e il divertimento.\n" +
        "L’evento è adatto a: runner, podisti, famiglie anche con passeggini, bambini, disabili, anziani, cani al guinzaglio... insomma è proprio per tutt*! Un’occasione per vivere insieme le bellezze del centro storico di Bologna e per scoprire la città da un nuovo punto di vista.",
      imgBackground: "straBologna01.jpg",
      imgArray:["straBologna02.jpg","straBologna03.jpg","straBologna04.jpg"],
      address:"Piazza Maggiore, 40124 Bologna (BO)",
      date:"22 MAGGIO 2022\n" +
        "ORE 10:30",
      price:"15 euro",
      website:"https://strabologna.it/",
      type:0,
      firstDay:'2022-05-22'
    },
    {
      name: "roBOt",
      description: "roBOt Festival è una manifestazione internazionale nata nel 2008 a Bologna e dedicata alla musica elettronica e alle arti visuali. La direzione artistica del festival è affidata fin dalla sua prima edizione a Marco Ligurgo e Antonio Puglisi. Il festival, che si svolge in autunno, propone ogni anno oltre 100 eventi tra concerti, dj set, performance, proiezioni, installazioni digitali e workshop[2].\n" +
        "\n" +
        "Vi hanno partecipato artisti internazionali come Ryūichi Sakamoto, Alva Noto, Francesco Tristano Schlimé, Nathan Fake, Plaid, Yann Tiersen, Gianluca Petrella, Carl Craig e Pan Sonic.",
      imgBackground: "robot01.jpg",
      imgArray:["robot02.png","robot03.jpg"],
      address:"Via Camillo Casarini 19, 40131 Bologna (BO)",
      date:"23 Settembre 2022 -24 Settembre 2022",
      price:"30 euro",
      website:"https://robotfestival.it/",
      type:0,
      firstDay:'2022-09-23'
    },
    {
      name: "Cosmoprof",
      description: "Cosmoprof è la fiera leader mondiale per l'intera industria della cosmetica e della bellezza professionale.",
      imgBackground: "cosmoprof01.jpg",
      imgArray:["cosmoprof02.jpg", "cosmoprof03.jpg", "cosmoprof04.jpg"],
      address:"Viale della Fiera 20, 40128 Bologna (BO)",
      date:"16 Marzo 2023 - 23 Marzo 2023",
      price:"Ingresso gratuito",
      website:"https://www.cosmoprof.com/",
      type:0,
      firstDay:'2022-03-16'
    },
    {
      name: "Cioccoshow",
      description: "Il Cioccoshow , ossia il Cioccolato tradizionale di alta qualità in fiera, giunto alla sua 15° edizione, si svolge nel centro storico di Bologna. Tra assaggi, degustazioni, laboratori curati da grandi Maestri Cioccolatieri ed esperti di settore.",
      imgBackground: "cioccoShow01.jpg",
      imgArray:["cioccoShow02.jpg", "cioccoShow03.jpg", "cioccoShow04.jpg", "cioccoShow05.jpg"],
      address: "Piazza XX Settembre (Porta Galliera), 40121 Bologna (BO)",
      date: "17 Novembre 2022 - 20 Novembre 2022",
      price: "Ingresso gratuito, consumazioni a pagamento",
      website: "https://cioccoshow.it/",
      type:1,
      firstDay:'2022-10-17'
    },
    {
      name: "BilBOlBul",
      description: "Per tre giorni all'anno, BilBOlbul è un festival internazionale di fumetto che si tiene a Bologna. Il festival porta in Italia artiste e artisti da tutto il mondo, e attraverso il fumetto prova a leggere il presente.",
      imgBackground: "bilbolbul02.jpg",
      imgArray:["bilbolbul01.jpg","bilbolbul03.jpg", "bilbolbul04.jpg"],
      address:"Via del Porto 11/2, 40121 Bologna (BO)",
      date:"03 Dicembre 2022 - 05 Dicembre 2022",
      price:"Ingresso gratuito",
      website:"https://bilbolbul.net/BBB21",
      type:1,
      firstDay:'2022-12-03'
    },
    {
      name: "Bologna Jazz Festival",
      description: "Bologna Jazz Festival (abbreviato BJF) è considerato il più antico festival musicale italiano dedicato al jazz; fu fondato nel 1958. Si svolge annualmente a Bologna, con eventi anche a Ferrara e Modena, nel mese di novembre",
      imgBackground: "jazzFestival04.jpeg",
      imgArray:["jazzFestival01.jpg", "jazzFestival02.jpg", "jazzFestival03.jpg"],
      address:"PalaDozza, Piazza Manfredi Azzarita 3, 40122 Bologna (BO)",
      date:"20 Novembre 2022 - 30 Novembre 2022",
      price:"10 euro",
      website:"https://www.bolognajazzfestival.com/",
      type:1,
      firstDay:'2022-10-20'
    },

  ]
  await models.Events.bulkCreate(eventList)

  //Service Table
  const serviceTypeList = [
    {
      name: "Banche",
      imgBackground: "banche01.jpg"
    },
    {
      name: "Cinema",
      imgBackground: "cinema01.jpg"
    },
    {
      name: "Divertimento",
      imgBackground: "discoteca01.jpg",
    },
    {
      name: "Salute",
      imgBackground: "farmacie01.jpg",
    },
    {
      name: "Ristorazione",
      imgBackground: "ristorazione01.jpg",
    },
  ]
  const servicetype0 = await models.ServiceType.create(serviceTypeList[0])
  const servicetype1 = await models.ServiceType.create(serviceTypeList[1])
  const servicetype2 = await models.ServiceType.create(serviceTypeList[2])
  const servicetype3 = await models.ServiceType.create(serviceTypeList[3])
  const servicetype4 = await models.ServiceType.create(serviceTypeList[4])
  //Bank Table
  const serviceList = [
    {
      name: "BNL BNP Paribas",
      address:"Via Rizzoli 26, 40125 Bologna (BO)",
      opening_hours:"Lun - Ven: 08:20–16:45",
      phone_number: "06 0060",
      website: "https://bnl.it",
      servicetypeId:servicetype0.id
    },
    {
      name: " Intesa San Paolo",
      address:"Via Rizzoli 5, 40125 Bologna (BO)",
      opening_hours:"Lun - Ven: 08:30–13:30, 14:45–16:55",
      phone_number: "051 640 5011",
      website: "https://www.intesasanpaolo.com/it",
      servicetypeId:servicetype0.id
    },
    {
      name: "BPER",
      address:"Via Giacomo Venezian 5A, 40121 Bologna (BO)",
      opening_hours:"Lun - Ven: 8:40-13:00, 15:00-16:00",
      phone_number: "051 275 7811",
      website: "https://www.bper.it",
      servicetypeId:servicetype0.id
    },
    {
      name: "Deutsche Bank",
      address:"Via Farini 17, 40124 Bologna (BO)",
      opening_hours:"Lun - Ven: 08:20–13:20, 14:35–15:35",
      phone_number: "051 295727",
      website: "https://www.deutsche-bank.it",
      servicetypeId:servicetype0.id
    },
    {
      name: "Banco BPM",
      address:"Via de' Carbonesi 11, 40123 Bologna (BO)",
      opening_hours:"Lun - Ven: 08:20–13:20, 14:30–15:30",
      phone_number: "051 559411",
      website: "https://www.bancobpm.it",
      servicetypeId:servicetype0.id
    },

    {
      name: "Medica Palace",
      address:"Via Monte Grappa 9b, 40122 Bologna (BO)",
      opening_hours:"Orario variabile a seconda delle programmazioni",
      phone_number: "051 263826",
      website: "https://medica.popupcinema.18tickets.it/",
      servicetypeId:servicetype1.id
    },
    {
      name: "Rialto Studio",
      address:"Via Rialto 19, 40126 Bologna (BO)",
      opening_hours:"Orario variabile a seconda delle programmazioni",
      phone_number: "051 227926",
      website: "https://rialto.circuitocinemabologna.it/",
      servicetypeId:servicetype1.id
    },
    {
      name: "Odeon",
      address:"Via Mascarella 3, 40126 Bologna (BO)",
      opening_hours:"Orario variabile a seconda delle programmazioni",
      phone_number: "051 227916",
      website: "https://odeon.circuitocinemabologna.it/",
      servicetypeId:servicetype1.id
    },
    {
      name: "Europa",
      address:"Via Pietralata 55, 40100 Bologna (BO)",
      opening_hours:"Orario variabile a seconda delle programmazioni",
      phone_number: "051 523812",
      website: "https://europa.circuitocinemabologna.it/",
      servicetypeId:servicetype1.id
    },
    {
      name: "Lumière",
      address:"Piazzetta P.P.Pasolini 2/b, 40122 Bologna (BO)",
      opening_hours:"Orario variabile a seconda delle programmazioni",
      phone_number: "051 2195311",
      website: "https://programmazione.cinetecadibologna.it/",
      servicetypeId:servicetype1.id
    },

    {
      name: "Matis Club",
      address:"Via Rotta 10, 40132 Bologna (BO)",
      opening_hours:"Ven - Sab: 22:00-04.00",
      phone_number: "389 5654503",
      website: "https://www.facebook.com/matisclubofficial/",
      servicetypeId:servicetype2.id
    },
    {
      name: "Numa Club",
      address:"Via Alfieri Maserati 9, 40127 Bologna (BO)",
      opening_hours:"Mer, Ven, Sab: 21:00-04:00",
      phone_number: "051 363591",
      website: "https://www.facebook.com/numa.club.bologna/",
      servicetypeId:servicetype2.id
    },
    {
      name: "Qubò",
      address:"Via Sampieri 3, 40125 Bologna (BO)",
      opening_hours:"Mar - Sab: 23:30-04:00",
      phone_number: "338 2726397",
      website: "http://qubodiscotecabologna.com/",
      servicetypeId:servicetype2.id
    },
    {
      name: "O2 Oxygen",
      address:"Via dell'Incisore, 2, 40138 Bologna BO",
      opening_hours:"24 ore su 24",
      phone_number: "348 842 3513",
      website: "https://www.facebook.com/Latifoliagroup/",
      servicetypeId:servicetype2.id
    },
    {
      name: "Kindergarden",
      address:"Via Alfredo Calzoni 6h, 40128 Bologna (BO)",
      opening_hours:"Ven - Sab: 23:00-04:00",
      phone_number: "051 365836",
      website: "https://www.derkindergarten.it/",
      servicetypeId:servicetype2.id
    },

    {
      name: "Lloyds Farmacia Centrale",
      address:"Piazza Maggiore 6, 40121 Bologna (BO)",
      opening_hours:"24 ore su 24",
      phone_number: "051 239690",
      website: "https://lloydsfarmacia.it",
      servicetypeId:servicetype3.id
    },
    {
      name: "Farmacia Speranza",
      address:"Via Ugo Bassi 6, 40121 Bologna (BO)",
      opening_hours:"Lun - Sab: 08:30-19:30, Dom: 8:30-19:00",
      phone_number: "051 232436",
      website: "https://www.farmaciediturno.org/farmacia.asp?idf=6987",
      servicetypeId:servicetype3.id
    },
    {
      name: "Antica Farmacia dei Servi",
      address:"Strada Maggiore 39, 40125 Bologna (BO)",
      opening_hours:"Lun - Ven: 08.30-20:00, Sab - Dom: 09:00-19:00",
      phone_number: "051 231638",
      website: "https://www.anticafarmaciadeiservi.it/",
      servicetypeId:servicetype3.id
    },
    {
      name: "Farmacia Alberani",
      address:"Via Farini 19, 40124 Bologna (BO)",
      opening_hours:"Lun - Sab: 08:30–13:30, 15:30–19:30",
      phone_number: "051 224573",
      website: "https://www.facebook.com/farmaciaalberani/",
      servicetypeId:servicetype3.id
    },
    {
      name: "Farmacia D'Azeglio",
      address:"Via d'Azeglio 88, 40123 Bologna (BO)",
      opening_hours:"Lun - Ven: 08:00–13:00, 15:30–19:30, Sab: 09:00–13:00",
      phone_number: "051 459 6403",
      website: "http://www.farmauniti.it/le-farmacie-dettaglio.aspx?id=407",
      servicetypeId:servicetype3.id
    },

    {
      name: "051",
      address:"Via de' Pignattari 1/F, 40124 Bologna (BO)",
      opening_hours:"Tutti i giorni: 12:00–15:00, 19:00–23:00",
      phone_number: "051 510515",
      website: "https://051.it/",
      servicetypeId:servicetype4.id
    },
    {
      name: "Osteria del Cappello",
      address:"Via de' Fusari 9B, 40123 Bologna (BO)",
      opening_hours:"Lun - Sab: 07:00–15:00, 19:30–23:00, Dom: 7.00-11.00",
      phone_number: "051 1998 6887",
      website: "https://www.osteriadelcappello.com/",
      servicetypeId:servicetype4.id
    },
    {
      name: "Al Pappagallo",
      address:"Piazza della Mercanzia 3, 40125 Bologna (BO)",
      opening_hours:"Mer - Gio: 19:30-22.00, Ven - Dom: 12:00–14:30, 19:30–22:00",
      phone_number: "353 4044221",
      website: "https://www.alpappagallo.it",
      servicetypeId:servicetype4.id
    },
    {
      name: "Osteria Bartolini",
      address:"Piazza Malpighi 16, 40123 Bologna (BO)",
      opening_hours:"Tutti i giorni: 12:00–14:30, 19:00–22:30",
      phone_number: "051 262192",
      website: "https://www.osteriabartolinibologna.com/",
      servicetypeId:servicetype4.id
    },
    {
      name: "Pizzeria Vasinikò",
      address:"Via Santo Stefano 40e, 40125 Bologna (BO)",
      opening_hours:"Tutti i giorni: 12:00–15:00, 19:00–00:00 ",
      phone_number: "051 239088",
      website: "http://www.vasiniko.com/",
      servicetypeId:servicetype4.id
    },
    {
      name: "Ca' Shin",
      address:"Via Cavaioni 1, 40136 Bologna (BO)",
      opening_hours:"Mar - Ven: 19.30-23.00, Sab: 12:30–16:30, 19:30–23:00, Dom: 12:30–17:00",
      phone_number: "051 589419",
      website: "https://www.cashin.coop",
      servicetypeId:servicetype4.id
    },
    {
      name: "La Bottega di Franco",
      address:"Via Agucchi 112, 40131 Bologna (BO)",
      opening_hours:"Lun - Ven: 12:30–14:30, 20:00–23:00, Sab: 20:00-23:00",
      phone_number: "051 311243",
      website: "https://labottegadifranco.com",
      servicetypeId:servicetype4.id
    },

  ]
  await models.Service.bulkCreate(serviceList)


  //Itinerary Table
  const itineraryList = [
    {
      name: "Una passeggiata in Centro",
      description: "Partendo da Piazza Maggiore, cuore della città, passeremo in rassegna i principali monumenti del centro storico. La visita alla Basilica di San Petronio sarà seguita dai meravigliosi Palazzo D’Accursio e Re Enzo. Ci soffermeremo in Piazza Nettuno, dove si trova l’omonima e celebre fontana. Infine, passeggiando lungo via Rizzoli raggiungeremo il simbolo di Bologna: la Torre degli Asinelli insieme alla Garisenda.",
      map:"mapPasseggiataInCentro01.jpg",
      duration:"La durata è molto breve. Si tratta di circa 500 metri da percorrere a piedi.",
      imgBackground:"unaPasseggiataInCentro01.jpg"
    },
    {
      name: "I Portici e San Luca",
      description: "La partenza è appena fuori le mura, più precisamente a Porta Saragozza, dove percorreremo il famoso portico ed i suoi archi che ci conducono fino al Colle della Guardia, parte dell’appennino bolognese, dove ci attenderà il Santuario della Madonna di San Luca. Lungo il cammino ci fermeremo ad osservare lo stadio Renato Dall’Ara.",
      map:"mapPortici01.jpg",
      duration:"La durata è molto breve. Si tratta di circa 500 metri da percorrere a piedi.",
      imgBackground:"portici01.jpg"
    },
    {
      name: "Bologna La Dotta ",
      description: "Partendo dalle sale mozzafiato dell’Archiginnasio, ci dirigeremo verso la biblioteca più importante della città, ovvero Sala Borsa. Continuando per Via Dell’Indipendenza, osserveremo la maestosa Cattedrale di San Pietro, per poi dirigerci verso Via Delle Moline, dove ci attenderà la suggestiva finestrella sull’omonimo canale. Da qui, proseguiremo verso il cuore dell’odierna zona universitaria, per ammirare gli splendidi edifici medievali di Via Zamboni e Piazza Verdi.",
      map:"mapLaDotta01.jpg",
      duration:"La durata è molto breve. Si tratta di circa 500 metri da percorrere a piedi.",
      imgBackground:"viaDelleMoline01.jpg"
    },
  ]
  await models.Itinerary.bulkCreate(itineraryList)

}
