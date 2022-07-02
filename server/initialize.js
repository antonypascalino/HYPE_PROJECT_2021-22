/*
  Tables in the DB

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
      carousel_desc: "Il cuore di Bologna, da qui inizia il nostro viaggio.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi." +
        "Risale al 1200, quando il Comune iniziò ad acquisire case e terreni per costruire una piazza che da un lato avrebbe dovuto rappresentare l'importanza dell'istituzione comunale e dall'altro riunire le varie attività cittadine (scambi, commerci e servizi di vario genere)." +
        "Soltanto dal Cinquecento è iniziata a essere conosciuta come Piazza Maggiore, anche se dalla cacciata degli austriaci al 1944 alla piazza venne attribuito il nome del Re d'Italia, Vittorio Emanuele II. Quindi solo a partire dal 1945 la piazza e il territorio immediatamente circostante iniziarono a conoscersi ufficialmente con il nome attuale: Piazza Maggiore.",
      imgBackground: "piazzaMaggiore03.jpg",
      imgArray:["piazzaMaggiore02.jpg","piazzaMaggiore01.jpg"],
      googleLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.044342528252!2d11.340911180196688!3d44.4937582057897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd49586d65539%3A0x3ec4fc9a3ae6b51e!2sPiazza%20Maggiore!5e0!3m2!1sen!2sit!4v1656663470788!5m2!1sen!2sit",
      address:"Piazza Maggiore, 40124 Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Piazza+Maggiore,+Bologna+BO/@44.493977,11.3430258,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4958809a823:0xac6b828612b7247!8m2!3d44.493977!4d11.3430258"
    },
    {
      name: "Fontana del Nettuno",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      carousel_desc: "Il Dio dei Mari si erge imponente nel cuore della città, vieni a rinfrescarti al suo cospetto!",
      description: "Situata al centro dell’omonima piazza, la fontana troneggiata dalla divinità conduce alla più grande Piazza Maggiore. Soprannominata in dialetto al Żigànt (il Gigante), fu ultimata nel 1566 per mano di Giambologna e Tommaso Laureto al fine di glorificare il governo pontificio di Pio IV." +
        "La figura in bronzo del Nettuno è alta circa 3,2 metri. La posa solenne è un simbolo della potenza dello stato pontificio di quell’epoca: la mano sinistra dal palmo aperto diretta controvento quasi a voler calmare i flutti e la mano destra che regge un imponente tridente. L’intera composizione è caratterizzata da un grande slancio e dinamismo dovuta alle figure implementate sul blocco centrale ricoperto di marmo di Verona, come le nereidi e i delfini.\n" +
        "Il tridente impugnato dal Nettuno è stata fonte di ispirazione per il logo della casa di auto sportive Maserati che lo introdusse a partire dal 1926.",
      imgBackground: "fontanaNettuno04.jpg",
      imgArray:["fontanaNettuno01.jpg","fontanaNettuno05.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.017510656729!2d11.340475380196715!3d44.49430800575374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd495860346b7%3A0x8ed55aa49aac8271!2sFountain%20of%20Neptune!5e0!3m2!1sen!2sit!4v1656663558455!5m2!1sen!2sit",
      address: "Piazza del Nettuno, 40124 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Fountain+of+Neptune/@44.494308,11.34047,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd495860346b7:0x8ed55aa49aac8271!8m2!3d44.4943042!4d11.3426587"
    },
    {
      name: "Basilica di San Petronio",
      visit_info:"Tutti i giorni ingresso libero dalle 8.30 alle 13.30 e dalle 15.00 alle 18.30.",
      carousel_desc: "Mai ultimata, è una delle più grandi chiese italiane e la sua costruzione fu fermata dal Papa in persona. Ecco la Basilica di San Petronio!",
      description: "La basilica di San Petronio è la chiesa più grande della città, nonché una delle più grandi basiliche italiane ed europee. La sua estensione raggiunge i 132 metri di lunghezza e 51 di altezza. La peculiarità, tuttavia è che risulta incompiuta: lo si può chiaramente notare dalla facciata, ricoperta solo per metà in marmo." +
        "Iniziata nel 1390, è l’ultima grande opera tardo gotica italiana. Il progetto inizialmente era a carico di Antonio di Vincenzo ma nel 1514, durante i lavori di costruzione, Arduino degli Arriguzzi propose un nuovo piano: un’imponente pianta a croce latina che superava le dimensioni della basilica di San Pietro a Roma. Per questo motivo, secondo la leggenda, il papa Pio IV interruppe la realizzazione, focalizzando le risorse sull’Archiginnasio.\n" +
        "L’interno è suddiviso in tre navate e fu attuato in epoche diverse. Si contano ben ventidue cappelle, dove si possono scorgere dipinti e decorazioni di illustri artisti del tempo, tra cui Donato Creti e Girolamo Mazzola detto “Parmigianino”. Tra queste raffigurazioni, tuttavia, vi è un affresco che suscita tutt’ora controversie: ispirandosi all’inferno di Dante, l’autore Giovanni da Modena ha rappresentato una serie di peccatori e dannati tra cui Maometto che viene scuoiato da un diavolo.\n" +
        "Un’ulteriore caratteristica di San Petronio è la meridiana che si trova al suo interno e che si estende nella pavimentazione per una lunghezza di circa 67 metri, rendendola la più lunga al mondo.\n" ,
      imgBackground: "sanPetronio06.jpg",
      imgArray:["sanPetronio05.jpg","sanPetronio07.jpg"],
      googleLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0839163762785!2d11.340945880196655!3d44.49294730584299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd495860346b7%3A0xa17d71587906b0a5!2sBasilica%20di%20San%20Petronio!5e0!3m2!1sen!2sit!4v1656663616300!5m2!1sen!2sit",
      address: "Piazza Galvani 5, 40124 Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Basilica+di+San+Petronio/@44.4929473,11.3409405,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd495860346b7:0xa17d71587906b0a5!8m2!3d44.4929435!4d11.3431292"
    },
    {
      name: "Palazzo Re Enzo",
      visit_info:"Ingressi ogni 10 minuti, dalle 10:00 alle 12:20 e dalle 14 alle 18:00.",
      carousel_desc: "Uno dei monumenti più importanti del centro bolognese.",
      description: "Palazzo Re Enzo è un palazzo storico situato in Piazza Maggiore di fronte alla basilica di San Petronio. Fu costruito tra il 1244 e il 1246 per soddisfare un’esigenza di ampliamento degli edifici del comune. Il nome fu attribuito poiché nel 1249 divenne la “dimora” di Enzo, re di Sardegna, figlio di Federico II di Svevia, catturato durante la battaglia di Fossalta che vide le truppe felsinee sormontare l’esercito imperiale. Dopo 23 anni di prigionia, Re Enzo morì e fu sepolto come sua volontà nella basilica bolognese di San Domenico, dove tutt’oggi è presente la sua tomba.\n" +
        "Il palazzo ha uno stile gotico-medievale frutto anche degli importanti restauri avvenuti nel 1905.\n" ,
      imgBackground: "palazzoReEnzo01.jpg",
      imgArray:["palazzoReEnzo02.jpg","palazzoReEnzo03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.006773930468!2d11.34084738019671!3d44.4945280057394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be190446a5%3A0x45430544efddaa74!2sPalazzo%20Re%20Enzo!5e0!3m2!1sen!2sit!4v1656663680131!5m2!1sen!2sit",
      address:"Piazza del Nettuno 1/C, Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Palazzo+Re+Enzo/@44.494528,11.340842,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4be190446a5:0x45430544efddaa74!8m2!3d44.4945242!4d11.3430307"
    },
    {
      name: "Palazzo D’Accursio",
      visit_info:"martedì, mercoledì, giovedì, sabato e domenica dalle ore 10.00 alle ore 18.30 e venerdì dalle 15 alle 18.30 (lunedì chiuso). INGRESSO LIBERO.",
      carousel_desc: "La sede del comune di Bologna e molto altro ancora!",
      description: "Sede del comune dal 1336, Palazzo d’Accursio è uno degli edifici che completano Piazza Maggiore. Deve il nome all’importante giurista e maestro di diritto Accursio (1184-1236). L’imponente edificio di circa 15.000 mq è caratterizzato da una torre con un orologio, costruito nella seconda metà del XV secolo. La facciata su Piazza Grande presenta anche una statua del Papa Gregorio XIII ed ulteriori decorazioni caratteristiche, come una rappresentazione della Madonna con bambino. \n" +
        "Si hanno due ingressi principali, quello su Piazza del Nettuno però non conduce alle camere del comune, bensì alla biblioteca Sala Borsa, la più grande ed importante della città. \n" +
        "Superato il cortile interno dall’ingresso di Piazza Maggiore, si arriva ad una particolare scalinata attribuita al Bramante, l’ampiezza della costruzione facilitava l’ingresso a cavallo dei rappresentanti comunali.\n" +
        "All’interno si trovano numerose sale decorate ed in particolare La Collezione di Arte Comunale, tra cui si possono osservare le opere del pittore bolognese Giorgio Morandi.\n" ,
      imgBackground: "palazzoAccursio01.jpg",
      imgArray:["palazzoAccursio02.jpg","palazzoAccursio03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0342549856077!2d11.340223780196641!3d44.49396490577632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4959b6b5b61%3A0x2059a5c0518cc24!2sPalazzo%20d&#39;Accursio!5e0!3m2!1sen!2sit!4v1656663714913!5m2!1sen!2sit",
      address: "Piazza Maggiore 6, 40121 Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Palazzo+d'Accursio/@44.4939611,11.3424071,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4959b6b5b61:0x2059a5c0518cc24!8m2!3d44.4939611!4d11.3424071"

    },
    {
      name: "Torre degli Asinelli e Garisenda",
      visit_info:"La Torre degli Asinelli è aperta CON PRENOTAZIONE OBBLIGATORIA con i seguenti orari:\n" +
        "Tutti i giorni\n" +
        "Quattro ingressi all'ora (ai 00, ai 15, ai 30 e ai 45), primo ingresso ore 10:00, ultimo ore 17:00.",
      carousel_desc: "Simbolo della città di Bologna: ecco a voi la Torre degli Asinelli e la Garisenda!",
      description: "Il simbolo della città, poste in Piazza di Porta Ravegnana, punto di incontro delle principali vie del centro, sono l’elemento più riconoscibile di Bologna. \n" +
        "La prima, la torre degli Asinelli deve presumibilmente la sua realizzazione al cavaliere ghibellino Gerardo Asinelli. I lavori iniziarono nel 1109 e terminarono dieci anni più tardi. L’altezza è di circa 97 metri e presenta una scalinata di 498 gradini.\n" +
        "La torre Garisenda invece fu sempre costruita per mano ghibellina, per il volere della famiglia omonima. Inizialmente alta 60 metri, venne ridotta a 48 per via di cedimenti strutturali insorti durante la realizzazione che ne conferirono la peculiare pendenza. La torre fu anche soggetto di paragone nella Divina Commedia, dove Dante la utilizzò come similitudine per indicare il Gigante Anteo nel canto XXXI dell’Inferno.\n" ,
      imgBackground: "torri01.jpg",
      imgArray:["torri02.jpg","torri03.jpg"],
      googleLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0221371967395!2d11.344547880196698!3d44.494213205760026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be8ea29f71%3A0x28631a8b221623ea!2sTwo%20Towers!5e0!3m2!1sen!2sit!4v1656663750962!5m2!1sen!2sit",
      address: "Piazza di Porta Ravegnana, 40126 Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Two+Towers/@44.4942132,11.3445425,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4be8ea29f71:0x28631a8b221623ea!8m2!3d44.4942094!4d11.3467312"
    },
    {
      name: "Archiginnasio",
      visit_info:"Lunedì-venerdì 9-19. Sabato ore 9-14.",
      carousel_desc: "Una delle biblioteche più suggestive e antiche d'Italia, scoprite di più sull'Archiginnasio.",
      description: "A pochi passi dalla basilica di San Petronio e da Piazza Maggiore si colloca uno degli edifici più significativi della città. La biblioteca comunale dell’Archiginnasio, divenuta tale nel 1838, presenta una ricca collezione di volumi antichi. \n" +
        "L’interno è costituito da diverse sale studio riccamente decorate dagli stemmi delle ricche famiglie felsinee dell’epoca. \n" +
        "La sala più caratteristica è certamente il teatro anatomico, un anfiteatro in legno d’abete corredato da statue.\n" +
        "L’Archiginnasio fu gravemente colpito dai bombardamenti della Seconda Guerra Mondiale. Oggi, tuttavia, lo si può ammirare in tutto il suo splendore grazie ai restauri e ricostruzioni effettuati nei decenni successivi.\n" ,
      imgBackground: "archiginnasio01.jpg",
      imgArray:["archiginnasio02.jpg","archiginnasio03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.1313271355293!2d11.34123668019664!3d44.49197580590689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bfc278adc1%3A0x991786b52ce6d4bc!2sBiblioteca%20Comunale%20dell&#39;Archiginnasio!5e0!3m2!1sen!2sit!4v1656663785011!5m2!1sen!2sit",
      address: "Piazza Galvani 1, 40124 Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Biblioteca+Comunale+dell'Archiginnasio/@44.4919758,11.3412313,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4bfc278adc1:0x991786b52ce6d4bc!8m2!3d44.491972!4d11.34342"
    },
    {
      name: "Sala Borsa",
      visit_info:"Salaborsa è aperta dal lunedì al venerdì dalle 13 alle 19.",
      carousel_desc: "La più importante biblioteca della città. Qui potrete trovare qualsiasi cosa, da libri a film, da riviste a volumi antichi.",
      description: "Situata all’ingresso di Piazza del Nettuno di Palazzo d’Accursio, Sala Borsa è la biblioteca pubblica multimediale più celebre di Bologna. Al suo interno possono essere consultati sia volumi cartacei che digitali, oltre che a CD, DVD e fumetti.\n" +
        "Numerosi sono gli eventi e gli ospiti illustri che vi partecipano ogni anno. Solo nel 2019 a Sala Borsa sono stati effettuati 530.000 prestiti. \n" +
        "Nell’androne principale, il pavimento in vetro rivela delle rovine romane visitabili.\n" ,
      imgBackground: "salaBorsa06.jpg",
      imgArray:["salaBorsa01.jpg","salaBorsa04.jpg"],
      googleLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0025280316945!2d11.340197280196739!3d44.494615005733586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bfc278adc1%3A0xc266fcbe4097cdfd!2sBiblioteca%20Salaborsa!5e0!3m2!1sen!2sit!4v1656663820095!5m2!1sen!2sit",
      address: "Piazza del Nettuno 3, 40124 Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Biblioteca+Salaborsa/@44.494615,11.3401919,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4bfc278adc1:0xc266fcbe4097cdfd!8m2!3d44.4946112!4d11.3423806"
    },
    {
      name: "Piazza Santo Stefano",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      carousel_desc: "Una delle piazze più belle della città.",
      description: "Proseguendo dalle due Torri e superando piazza della Mercanzia si può facilmente raggiungere Piazza Santo Stefano. \n" +
        "Lo slargo triangolare è circondato da importanti palazzi, tra cui Corte Isolani. La piazza è anche comunemente chiamata “Piazza delle Sette Chiese”, poiché sul fronte opposto si erge il complesso della Basilica di Santo Stefano.\n" +
        "La piazza è celebre anche per le manifestazioni ed il mercato di antiquariato che si svolge ogni primo week end del mese.\n" ,
      imgBackground: "piazzaSantoStefano01.jpg",
      imgArray:["piazzaSantoStefano02.jpg","piazzaSantoStefano03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.1166330597725!2d11.346082480196618!3d44.492276905887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4c79571fe61%3A0x30d8d5e8e9c7385!2sPiazza%20Santo%20Stefano!5e0!3m2!1sen!2sit!4v1656663854830!5m2!1sen!2sit",
      address: "Via Santo Stefano, 40125 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Piazza+Santo+Stefano/@44.4922769,11.3460771,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4c79571fe61:0x30d8d5e8e9c7385!8m2!3d44.4922731!4d11.3482658"
    },
    {
      name: "Basilica di Santo Stefano",
      visit_info:"Aperta tutti i giorni 8.00 – 19.00 (durante le funzioni religiose la visita turistica potrebbe essere limitata o sospesa).",
      carousel_desc: "Un complesso di chiese antichissimo e ricco di storia.",
      description: "Conosciuto anche come il complesso delle “Sette Chiese”, si affaccia sul lato sud-est della piazza omonima.\n" +
        "Fondata in epoca romana intorno al 100 d.C., la basilica, inizialmente tempio pagano dedicato ad Iside, fu soggetto di numerose ricostruzioni ed ampliamenti che passano dall’epoca romana alle prime invasioni longobarde. Gli ultimi edifici risalgono al periodo tra il X e il XIII secolo e furono edificati dall’organo dei Benedettini.\n" +
        "La chiesa del Crocefisso di origine longobarda si affaccia su Piazza Santo Stefano mentre all’interno si hanno cortili di stampo romano, come il cortile di Pilato ed il museo che conserva opere di diverse epoche.\n" ,
      imgBackground: "basilicaSantoStefano04.jpg",
      imgArray:["basilicaSantoStefano01.jpg","basilicaSantoStefano02.jpg"],
      googleLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.1228991581456!2d11.346309080196662!3d44.49214850589557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd5b452722fc1%3A0xe05c963953602828!2sBasilica%20Santo%20Stefano!5e0!3m2!1sen!2sit!4v1656663883343!5m2!1sen!2sit",
      address: "Via Santo Stefano 24, 40125 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Basilica+Santo+Stefano/@44.4921485,11.3463037,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd5b452722fc1:0xe05c963953602828!8m2!3d44.4921447!4d11.3484924"
    },
    {
      name: "Il Mercato del Quadrilatero",
      visit_info:"Segue gli abituali orari di apertura dei negozi.",
      carousel_desc: "Il cuore della 'Grassa', il mercato nel centro di Bologna.",
      description: "A partire dalle prime ore del giorno un insieme di schiamazzi, odori, bancarelle e botteghe contenenti cibi di ogni genere fanno da sfondo al vivo brulicare di venditori e clienti che si accalcano nelle sinuose vie adiacenti a Piazza Maggiore denominate “il Quadrilatero”. Qui è possibile trovare le fresche pietanze bolognesi ricche di gusto e sapore. Dai salumi più pregiati al pesce fresco, pasta sfoglia e tortellini fatti a mano con cura. In questo mercato si può scorgere un lato più vero della città e meno turistico" ,
      imgBackground: "quadrilatero01.jpg",
      imgArray:["quadrilatero02.jpg","quadrilatero03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0545032376617!2d11.342973680196714!3d44.49355000580356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be4fe7c3b5%3A0xc59f4146c32c020f!2sVia%20Drapperie%2C%2040124%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1656663931006!5m2!1sen!2sit",
      address: "Via Drapperie, Bologna, (BO)",
      mapLink: "https://www.google.com/maps/place/Via+Drapperie,+40124+Bologna+BO/@44.4935462,11.3429683,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4be4fe7c3b5:0xc59f4146c32c020f!8m2!3d44.4935462!4d11.345157"
    },
    {
      name: "Via D’Azeglio",
      visit_info:"via D’Azeglio è liberamente accessibile senza limitazioni di orario. La casa di Lucio Dalla viene aperta solo in alcuni periodi dell’anno.",
      carousel_desc: "Una delle vie più storiche di Bologna. Casa dell'immortale cantautore Lucio Dalla",
      description: "Celebre via del centro storico di Bologna che collega Piazza Maggiore a Via San Mamolo, deve il nome al politico, storico, scrittore e patriota italiano Massimo D’Azeglio.\n" +
        "Via di importanza sociale per i cittadini bolognesi, è suddivisa in una parte pedonale dove sono presenti un insieme di negozi moderni e botteghe storiche e una parte dove è consentita anche la circolazione dei mezzi. \n" +
        "Nella via vi è la dimora del defunto cantautore bolognese di fama internazionale Lucio Dalla. \n" ,
      imgBackground: "viaAzeglio02.jpg",
      imgArray:["viaAzeglio03.jpg", "viaAzeglio04.jpg"],
      googleLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.2276736231347!2d11.338898980196625!3d44.490001506036414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4eaa35e2ac7%3A0xb9dd04b1d9b5bb8e!2sVia%20d&#39;Azeglio%2C%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1656663966428!5m2!1sen!2sit",
      address: "Via d'Azeglio, Bologna, (BO)",
      mapLink: "https://www.google.com/maps/place/Via+d'Azeglio,+Bologna+BO/@44.4899977,11.3388936,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4eaa35e2ac7:0xb9dd04b1d9b5bb8e!8m2!3d44.4899977!4d11.3410823"
    },
    {
      name: "La Cattedrale di San Pietro",
      visit_info:"Orari di apertura ; Giovedi, 08:00 - 18:45 ; Venerdi, 08:00 - 18:45 ; Sabato, 08:00 - 18:45 ; Domenica, 08:00 - 18:45.",
      carousel_desc: "La cattedrale di Bologna, unica nel suo genere.",
      description: "San Pietro è la cattedrale della città. Collocata in Via Indipendenza, la chiesa fu consacrata ufficialmente nel 1184.\n" +
        "La cattedrale fu soggetta a diversi cambiamenti fino ad assestarsi con uno stile barocco, che tuttavia, fece perdere ogni traccia del precedente impianto romano. La facciata è composta da mattoni rossi e decorazioni in marmo bianco che lasciano spazio ai mastodontici portali che suggeriscono l’impianto interno a tre navate.\n" +
        "Il campanile è la seconda torre più alta di Bologna con ben 70 metri.\n" ,
      imgBackground: "cattedraleSanPietro04.jpg",
      imgArray:["cattedraleSanPietro06.jpg","cattedraleSanPietro05.jpg"],
      googleLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.9415181339973!2d11.340840280196709!3d44.49586510565173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4be0705c4a5%3A0xf8e25b961d073f1b!2sCattedrale%20Metropolitana%20di%20San%20Pietro!5e0!3m2!1sen!2sit!4v1656664032293!5m2!1sen!2sit",
      address: "Via dell'Indipendenza 7, 40125 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Cattedrale+Metropolitana+di+San+Pietro/@44.4957417,11.341203,17z/data=!4m9!1m2!2m1!1sLa+Cattedrale+di+San+Pietro!3m5!1s0x477fd4be0705c4a5:0xf8e25b961d073f1b!8m2!3d44.4956867!4d11.3444266!15sChtMYSBDYXR0ZWRyYWxlIGRpIFNhbiBQaWV0cm9aHSIbbGEgY2F0dGVkcmFsZSBkaSBzYW4gcGlldHJvkgEJY2F0aGVkcmFsmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU0wYUU1dGFFMW5FQUU"
    },
    {
      name: "La finestrella sul Canale",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      carousel_desc: "La suggestiva finestra sul Canale delle Moline, uno scorcio di storia ormai dimenticata.",
      description: "Raggiungendo via Piella è possibile scorgere una piccola apertura quadrata che affaccia su un canale. Questa “finestrella” è celebre poiché suggerisce il passato di Bologna, tanto che quell’insieme di vie è soprannominato “la piccola Venezia”. \n" +
        "Fino al primo dopoguerra, Bologna era pervasa da canali che estendevano il corso del fiume Reno e semplificavano il trasporto di materie prime che giungevano per essere lavorate nei vari opifici, in particolare nei laboratori di produzione della seta.\n" +
        "Dai primi anni del Novecento, i canali furono tutti cementati, fatta eccezione per quello di via delle Moline, osservabile dalla suggestiva finestra.\n" ,
      imgBackground: "finestra01.jpg",
      imgArray:["finestra02.jpg","finestra03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.808141807058!2d11.343021380196731!3d44.49859790547212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bd617e45e1%3A0x2929ff96df8e4709!2sFinestrella!5e0!3m2!1sen!2sit!4v1656664090359!5m2!1sen!2sit",
      address: "Via Piella 16, 40126 Bologna, (BO)",
      mapLink: "https://www.google.com/maps/place/Via+Piella,+40126+Bologna+BO/@44.4982823,11.3429643,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4bd7ce59bc1:0xab959bc78e33c6bf!8m2!3d44.4982823!4d11.345153"
    },
    {
      name: "I Portici",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      carousel_desc: "Bologna è la città con più portici al mondo. Scopri il perché di questa caratteristica unica!",
      description: "Nominati patrimonio dell’umanità dall’Unesco, i portici sono la caratteristica dominante e più peculiare della città. Solamente nel centro storico si dipanano per circa 40 km e aggiungendo anche le strade fuori porta raggiungono la lunghezza di quasi 65km, tanto da rendere Bologna l’unica città al mondo ad averne un così alto numero.\n" +
        "Nacquero nel tardo medioevo per espandere inizialmente gli spazi abitativi dei piani superiori, successivamente vennero impiegati per commerciare nelle strade con qualsiasi condizione atmosferica.\n" +
        "Vi sono diversi stili che delineano le varie epoche di realizzazione. I più antichi di epoca medievale possono essere trovati in via Marsala o in Strada Maggiore, sono di semplice costruzione poiché utilizzano principalmente delle travi in legno. \n" +
        "Il complesso più celebre tuttavia è quello che, partendo da Porta Saragozza, conduce fino alla chiesa di San Luca, arroccata sul Colle della Guardia.\n" ,
      imgBackground: "portici01.jpg",
      imgArray:["portici02.jpg","portici03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.170182363322!2d11.350493880196673!3d44.49117960595906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4b83e58399b%3A0x5d7ec6eb7c812a94!2sPortico%20dei%20Servi%2C%20Str.%20Maggiore%2C%2043%2C%2040125%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1656664125925!5m2!1sen!2sit",
      address: "Strada Maggiore 43, 40125 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Portico+dei+Servi,+Str.+Maggiore,+43,+40125+Bologna+BO/@44.4911796,11.3504885,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4b83e58399b:0x5d7ec6eb7c812a94!8m2!3d44.4911758!4d11.3526772"
    },
    {
      name: "San Luca e i Portici",
      visit_info:"L'ingresso è gratuito durante la settimana e a pagamento nei giorni festivi",
      carousel_desc: "Visibile anche dalla lontana campagna, il Santuario della Madonna di San Luca osserva la città sottostante. Ma come si può raggiungere?",
      description: "Partendo da Porta Saragozza si può procedere con una lunga camminata di quasi 4km interamente all’ombra di un complesso di un numero simbolico 666 portici. Giunti a destinazione in cima al Colle della Guardia si potrà accedere al Santuario della Madonna di San Luca. \n" +
        "La chiesa barocca color mattone è sormontata da una cupola dotata di osservatorio alta ben 42 metri. All’interno della struttura dalla pianta a croce greca è custodita l’icona della Vergine col Bambino, che ritualmente una volta ogni anno nel mese di maggio viene prelevata e portata seguita da una lunga processione di prelati e fedeli di tutta la città nella cattedrale di San Pietro in Via dell’Indipendenza.\n" +
        "Sull’altare sono inoltre presenti le pale di Guido Reni, Donato Creti e Guercino.\n" ,
      imgBackground: "porticiSanLuca04.jpg",
      imgArray:["porticiSanLuca01.jpg","porticiSanLuca02.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.6365196471993!2d11.301729199999997!3d44.4816228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd44e11fd6079%3A0x8bd82fad98caafeb!2sVia%20di%20San%20Luca%20%26%20Portico%20di%20S.%20Luca%2C%2040135%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1656664161281!5m2!1sen!2sit",
      address: "Via di San Luca & Portico di S. Luca 40135 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Via+di+San+Luca+%26+Portico+di+S.+Luca,+40135+Bologna+BO/@44.4816266,11.2995405,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd44e11fd6079:0x8bd82fad98caafeb!8m2!3d44.4816228!4d11.3017292"
    },
    {
      name: "Mura e Porte",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      carousel_desc: "Le porte danno accesso al centro storico di Bologna, che fino agli anni 40 era protetto da ben tre cinte murarie.",
      description: "Le mura hanno cinto la città di Bologna a partire dal III secolo d.C. e l’hanno fatto fino all’inizio del XX secolo quando sono state parzialmente abbattute per lasciare spazio ai viali di circonvallazione.\n" +
        "I resti più antichi sono stati edificati in corrispondenza del crollo dell’Impero Romano di Occidente al fine di difendersi dalle invasioni barbariche. Il materiale di cui erano composte era la selenite. Una seconda cinta fu costruita in epoca medievale intorno all’anno 1100, di proporzioni maggiori rispetto alle precedenti mura. La terza cerchia è nominata “Circla” è la più recente e corrisponde come forma a quella degli attuali viali.\n" +
        "Le porte sono uno degli ultimi baluardi delle antiche mura che dal III secolo d.C. hanno accerchiato e difeso la città. Si hanno in totale 12 porte, di cui due non sono più esistenti. Ogni porta, di stampo romano, ha uno stile diverso. Porta Castiglione, ad esempio è alta ed imponente, mentre Porta Saragozza, con le sue torri ha uno sviluppo più orizzontale che ne conferisce stabilità.\n" ,
      imgBackground: "porta01.jpg",
      imgArray:["porta02.jpg", "porta03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.20176098119!2d11.327807480196597!3d44.49053250600152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4ed62b0dd37%3A0x817981cbf64507ba!2sPorta%20Saragozza!5e0!3m2!1sen!2sit!4v1656664206964!5m2!1sen!2sit",
      address: "Mura di Porta Saragozza, 40123 Bologna (BO)",
      mapLink:"https://www.google.com/maps/place/Porta+Saragozza/@44.4905287,11.3299908,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd4ed62b0dd37:0x817981cbf64507ba!8m2!3d44.4905287!4d11.3299908"
    },
    {
      name: "Zona Universitaria",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      carousel_desc: "Il cuore della 'Dotta' Bologna, la più antica città universitaria d'Europa!",
      description: "“La Dotta”, uno degli appellativi con cui si fa riferimento a Bologna, deve la propria origine alla lunga storia universitaria della città. Attualmente la maggior parte delle sedi sono concentrate nella zona lungo Via Zamboni, che è diventata inoltre negli anni uno dei centri della vita notturna degli studenti. \n" +
        "La strada che inizia a partire da Piazza di Porta Ravegnana, sotto le due torri, vede un susseguirsi di locali e bar, superando il conservatorio, si termina nella celebre Piazza Verdi, denominata così in onore del compositore italiano. È il principale luogo di ritrovo dei giovani. Qui possiamo osservare gli splendidi edifici di stampo medievale e l’importante Teatro Comunale.\n" +
        "Via Zamboni prosegue il suo corso tra gli edifici universitari fino a Porta San Donato.\n" ,
      imgBackground: "universita01.jpg",
      imgArray:["universita02.jpg", "universita03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.9221377765866!2d11.348484880196724!3d44.49626220562544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd4bb8de1ba0d%3A0x7a39a7224d40275f!2sPiazza%20Giuseppe%20Verdi%2C%2040126%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1656664243520!5m2!1sen!2sit",
      address: "Piazza Giuseppe Verdi 2a, 40126 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Piazza+Giuseppe+Verdi/@44.4962248,11.3508051,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd5c92e96d791:0x6e0ad24fb1f7ca56!8m2!3d44.4962248!4d11.3508051"
    },
    {
      name: "I Colli Bolognesi",
      visit_info:"E' sempre possibile visitare i colli!",
      carousel_desc: "Ma quanto è bello andare in giro per i colli bolognesi... Scoprili",
      description: "L’appennino bolognese si estende a partire dalla parte sud della città e fa da sfondo ai suggestivi palazzi medievali del centro.\n" +
        "Vi sono numerosi sentieri, parchi e camminate che possono offrire ai visitatori pace e tranquillità a differenza delle vie affollate del centro.\n" +
        "Da notare Parco Cavaioni, ex podere del ‘700 che, partendo da Via San Mamolo è raggiungibile all’incrocio tra Via dei Colli e Via di Casaglia. \n" +
        "Celebre è la Via degli Dei, lungo sentiero di 130 km che collega Bologna a Firenze attraverso l’appenino. \n" +
        "Tra i santuari arroccati sulle cime dei colli possiamo trovare San Michele in Bosco, ancora nella zona Urbana, la chiesa di Monte Donato e il più famoso Santuario della Madonna di San Luca\n",
      imgBackground: "colliBolognesi01.jpg",
      imgArray:["colliBolognesi02.jpg","colliBolognesi03.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.498968679191!2d11.299848780195449!3d44.443438809090765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ad52af3494631%3A0x5e3d31db779fb292!2sVia%20Cavaioni%2C%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1656664274561!5m2!1sen!2sit",
      address: "Via Cavaioni 3, 40136 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Parco+Cavaioni/@44.4440416,11.3037843,17z/data=!3m1!4b1!4m5!3m4!1s0x132ad4d3dbcff619:0xc6a8360d7a74ab0c!8m2!3d44.4440378!4d11.305973"
    },
    {
      name: "Stadio Renato Dall’Ara ",
      visit_info:"Aperto in occasione di eventi e partite.",
      carousel_desc: "Lo stadio più grande della città, vivilo!",
      description: "Lo stadio più importante e grande della città. La storica arena è stata teatro delle più grandi imprese calcistiche della nazionale italiana e dalla squadra del Bologna, oggi allenata da Sinisa Mihajlovic. \n" +
        "Lo stadio fu inaugurato durante l’epoca fascista, più precisamente nel 1927. La caratteristica più particolare è sicuramente la Torre di Maratona, che si erge con i suoi 42 metri di altezza a sostegno della tribuna est.\n" ,
      imgBackground: "stadio03.jpg",
      imgArray:["stadio02.jpg","stadio01.jpg"],
      googleLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423.05541644647!2d11.308563808306856!3d44.492395758112366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd45d067636a9%3A0x65e9f68b1959ad73!2sVia%20dello%20Sport%2C%206%2C%2040134%20Bologna%20BO!5e0!3m2!1sen!2sit!4v1656753428979!5m2!1sen!2sit",
      address: "Via Andrea Costa 174, 40134 Bologna (BO)",
      mapLink: "https://www.google.com/maps/place/Renato+Dall'Ara+Stadium/@44.4921661,11.3077561,17z/data=!3m1!4b1!4m5!3m4!1s0x477fd45d0f1547d1:0x6dbca3585c33186f!8m2!3d44.4921623!4d11.3099448"
    }

  ]
  await models.Poi.bulkCreate(poiList)

  //Event Table
  const eventList = [
    {
      name: "Il Cinema Ritrovato",
      carousel_desc: "Lasciati travolgere dai film più belli al chiaro di luna, nella suggestiva atmosfera del centro!",
      description: "Il Cinema Ritrovato è un evento sia per cinefili che per semplici amanti del cinema e impegna per alcuni giorni diverse sale cinematografiche e arene all’aperto ospitando da mattina a notte centinaia di film di tutte le epoche: un vero paradiso!",
      imgBackground: "ilCinemaRitrovato01.jpg",
      imgArray:["ilCinemaRitrovato02.jpg","ilCinemaRitrovato03.jpg"],
      address:"Piazza Maggiore, 40124 Bologna (BO)",
      date:"25 Giugno 2022 - 03 Luglio 2022",
      price:"Ingresso gratuito",
      website:"https://festival.ilcinemaritrovato.it/",
      type:0,
      firstDay:'2022-06-25'
    },
    {
      name: "Cersaie",
      carousel_desc: "Dove c'é innovazione c'é Cersaie, il salone internazionale dell'arredobagno",
      description: "Cersaie è la rinomata esposizione internazionale delle ceramiche e dell'arredobagno. Si tiene ogni anno a BolognaFiere ma non mancano gli allestimenti all'interno delle mura dove è possibile osservare delle meravigliose composizioni di design e materiali all'avanguardia",
      imgBackground: "cersaie05.jpg",
      imgArray: ["cersaie02.jpg", "cersaie03.jpg"],
      address: "Viale della Fiera 20, 40128 Bologna (BO)",
      date: "26 Settembre 2022 - 30 Settembre 2022",
      price: "Ingresso gratuito",
      website: "https://www.cersaie.it/it/index.php",
      type: 0,
      firstDay:'2022-09-26'
    },
    {
      name: "Festival della Mortadella",
      carousel_desc: "Non è Bologna senza mortadella, scopri il suo festiva a lei dedicato!",
      description: "La mortadella, \"regina rosa\" della gastronomia bolognese, è senza dubbio il salume che più di tutti rappresenta il territorio nel mondo, tanto che i termini \"mortadella\" e \"Bologna\" sono spesso usati come sinonimi. Per la precisione è nella cittadina di Zola Predosa che la mortadella ha la sua capitale mondiale: qui hanno sede le principali aziende produttrici della mortadella e qui ogni anno si organizza il festival più rosa e gustoso del mondo: \"Mortadella, please\", che quest'anno festeggia l'edizione numero 13.\n",
      imgBackground: "festivalMortadella01.jpg",
      imgArray:["festivalMortadella02.jpg","festivalMortadella03.jpg"],
      address:"Piazza Grande, 40069 Zola Predosa (BO)",
      date:"20 Settembre 2022 - 22 Settembre 2022",
      price:"ingresso libero, ristorazione a pagamento",
      website:"www.mortadellaplease.eu/",
      type:0,
      firstDay:'2022-09-20'
    },
    {
      name: "Arte Fiera",
      carousel_desc: "Uno degli eventi più attesi della città, dove arte, cultura e avanguardia si uniscono.",
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
      carousel_desc: "Un evento amato da tutti e che coinvolge tutte le età. Scoprilo ora!",
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
      carousel_desc: "Per gli amanti dello sport o per chi vuole semplicemente prendere fare un po' di moto all'aria aperta, la Strabologna accoglierà tutti!",
      description: "StraBologna è la camminata ludico motoria non competitiva organizzata da UISP Bologna che si svolge nel cuore della città in una domenica di primavera anticipata da due giorni di eventi in Piazza Maggiore, per promuovere gli ideali di benessere, lo sport per tutti, l’inclusione sociale e il divertimento.\n" +
        "L’evento è adatto a: runner, podisti, famiglie anche con passeggini, bambini, disabili, anziani, cani al guinzaglio... insomma è proprio per tutt*! Un’occasione per vivere insieme le bellezze del centro storico di Bologna e per scoprire la città da un nuovo punto di vista.",
      imgBackground: "straBologna01.jpg",
      imgArray:["straBologna03.jpg","straBologna04.jpg"],
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
      carousel_desc: "Festival eclettico ed internazionale per amanti di musica d'autore, ma che amano anche scatenarsi in pista da ballo!",
      description: "roBOt Festival è una manifestazione internazionale nata nel 2008 a Bologna e dedicata alla musica elettronica e alle arti visuali. La direzione artistica del festival è affidata fin dalla sua prima edizione a Marco Ligurgo e Antonio Puglisi. Il festival, che si svolge in autunno, propone ogni anno oltre 100 eventi tra concerti, dj set, performance, proiezioni, installazioni digitali e workshop[2].\n" +
        "\n" +
        "Vi hanno partecipato artisti internazionali come Ryūichi Sakamoto, Alva Noto, Francesco Tristano Schlimé, Nathan Fake, Plaid, Yann Tiersen, Gianluca Petrella, Carl Craig e Pan Sonic.",
      imgBackground: "robot02.png",
      imgArray:["robot01.jpg","robot03.jpg"],
      address:"Via Camillo Casarini 19, 40131 Bologna (BO)",
      date:"23 Settembre 2022 -24 Settembre 2022",
      price:"30 euro",
      website:"https://robotfestival.it/",
      type:0,
      firstDay:'2022-09-23'
    },
    {
      name: "Cosmoprof",
      carousel_desc: "Fiera mondiale dell'industria cosmetica dove ogni anno vengono mostrate le più recenti innovazioni di questo settore.",
      description: "Cosmoprof è la fiera leader mondiale per l'intera industria della cosmetica e della bellezza professionale.",
      imgBackground: "cosmoprof01.jpg",
      imgArray:["cosmoprof03.jpg", "cosmoprof04.jpg"],
      address:"Viale della Fiera 20, 40128 Bologna (BO)",
      date:"16 Marzo 2023 - 23 Marzo 2023",
      price:"Ingresso gratuito",
      website:"https://www.cosmoprof.com/",
      type:0,
      firstDay:'2022-03-16'
    },
    {
      name: "Cioccoshow",
      carousel_desc: "Chi non ama il cioccolato? Questo è il festival che fa per voi!",
      description: "Il Cioccoshow , ossia il Cioccolato tradizionale di alta qualità in fiera, giunto alla sua 15° edizione, si svolge nel centro storico di Bologna. Tra assaggi, degustazioni, laboratori curati da grandi Maestri Cioccolatieri ed esperti di settore.",
      imgBackground: "cioccoShow01.jpg",
      imgArray:["cioccoShow02.jpg", "cioccoShow03.jpg"],
      address: "Piazza XX Settembre (Porta Galliera), 40121 Bologna (BO)",
      date: "17 Novembre 2022 - 20 Novembre 2022",
      price: "Ingresso gratuito, consumazioni a pagamento",
      website: "https://cioccoshow.it/",
      type:1,
      firstDay:'2022-10-17'
    },
    {
      name: "BilBOlBul",
      carousel_desc: "BilBOlBul non è solo una semplice fiera del fumetto, qui l'arte viene proposta nelle tavole nella sua massima espressione.",
      description: "Per tre giorni all'anno, BilBOlbul è un festival internazionale di fumetto che si tiene a Bologna. Il festival porta in Italia artiste e artisti da tutto il mondo, e attraverso il fumetto prova a leggere il presente.",
      imgBackground: "bilbolbul02.jpg",
      imgArray:["bilbolbul01.jpg","bilbolbul03.jpg"],
      address:"Via del Porto 11/2, 40121 Bologna (BO)",
      date:"03 Dicembre 2022 - 05 Dicembre 2022",
      price:"Ingresso gratuito",
      website:"https://bilbolbul.net/BBB21",
      type:1,
      firstDay:'2022-12-03'
    },
    {
      name: "Bologna Jazz Festival",
      carousel_desc: "Uno dei più importanti ed antichi festival Jazz italiani: lasciati travolgere da questa meravigliosa musica.",
      description: "Bologna Jazz Festival (abbreviato BJF) è considerato il più antico festival musicale italiano dedicato al jazz; fu fondato nel 1958. Si svolge annualmente a Bologna, con eventi anche a Ferrara e Modena, nel mese di novembre",
      imgBackground: "jazzFestival04.jpeg",
      imgArray:["jazzFestival02.jpg"],
      address:"PalaDozza, Piazza Manfredi Azzarita 3, 40122 Bologna (BO)",
      date:"20 Novembre 2022 - 30 Novembre 2022",
      price:"10 euro",
      website:"https://www.bolognajazzfestival.com/",
      type:1,
      firstDay:'2022-10-20'
    },

  ]
  await models.Events.bulkCreate(eventList)

  //ServiceType Table
  const serviceTypeList = [
    {
      name: "Ristorazione",
      imgBackground: "ristorazione02.jpg",
      carousel_desc: "Non sapete dove mangiare? Qui la selezione dei ristoranti del team di insideBO!",
      service_desc: "Bologna viene definita “la Grassa” proprio per la sua storia culinaria. L’Emilia-Romagna ed in particolare il suo capoluogo sono una delle mete preferite dai turisti sotto questo punto di vista. \n" +
        "Per questo motivo ci si può ritrovare sopraffatti dall’incredibile quantità di osterie e ristoranti che tappezzano il centro cittadino. \n" +
        "Il team di insideBO vi propone quindi una lista dei migliori ristoranti che secondo noi vale la pena provare durante il vostro soggiorno a Bologna. \n" +
        "Le prime tre osterie, ovvero 051, Osteria del Cappello e Al Pappagallo, offrono il gusto dei piatti tradizionali come tortellini e lasagne avvolti dall’accogliente atmosfera del centro storico. 051 infatti si trova a lato della chiesa di San Petronio, mente Al Pappagallo è situato in Piazza della Mercanzia. \n" +
        "Osteria Bartolini e Vasinikò invece non si allontanano molto dal centro storico, ma offrono un’esperienza culinaria diversa seppur sempre di qualità eccelsa. Il primo ristorante è di pesce mentre il secondo propone pizze napoletane di livello.\n" +
        "Concludiamo con Ca’ Shin e La Bottega di Franco che si spostano dal centro per lasciare spazio al verde dei colli e della campagna bolognese, proposte per coloro che amano la natura ma non vogliono rinunciare ad un buon piatto di tagliatelle al ragù!\n"
    },
    {
      name: "Cinema",
      imgBackground: "cinema01.jpg",
      carousel_desc: "Voglia di film? Ecco a voi la lista dei cinema più celebri del centro!",
      service_desc: "Bologna è storicamente una città molto legata alla cultura cinematografica, tanto da essere città natale di diversi registi e attori di fama nazionale e internazionale come Matilda De Angelis, Pupi Avati, il poliedrico Pasolini o Stefano Accorsi.\n" +
        "Questa atmosfera si riflette nei cinema della città, dove vengono proiettati i film del momento che lasciano spazio anche a pellicole d’epoca o d’autore. \n" +
        "Nella lista qui sotto potete trovare quindi le sale che più aggradano i vostri gusti: dai blockbuster a film più eclettici, senza però allontanarsi dalle suggestive architetture del centro felsineo.\n"

    },
    {
      name: "Divertimento",
      imgBackground: "discoteca01.jpg",
      carousel_desc: "Vuoi scatenarti sulla pista da ballo? Qui le discoteche e club di Bologna!",
      service_desc: "Sappiamo che durante un soggiorno o una vacanza non si possono visitare musei tutto il giorno, per questo qui sotto vi proponiamo un elenco delle migliori discoteche e club della città, così da soddisfare il vostro più sfrenato divertimento!\n" +
        "I locali bolognesi sono rinomati per il clima sereno e spensierato. Siamo sicuri che le vostre serate voleranno via in un batter d’occhio!" +
        "I club indicati qui possono essere raggiunti comodamente con i mezzi pubblici e sono situati sia dentro che appena fuori le mura."
    },
    {
      name: "Salute",
      imgBackground: "farmacie01.jpg",
      carousel_desc: "Ecco la lista delle farmacie, sempre a disposizione per qualsiasi necessità!",
      service_desc: "Sappiamo che durante qualsiasi viaggio gli imprevisti sono sempre in agguato dietro l’angolo, per questo abbiamo qui elencato una serie di farmacie che possono esservi d’aiuto rapidamente per gestire qualsiasi esigenza. \n" +
        "Molti degli edifici qui presentati sono storici, poiché situati nel centro cittadino, come ad esempio la meravigliosa Farmacia Alberani o in particolare la Lloyds Centrale, situata all’interno di Palazzo D’Accursio, che offre servizio 24 ore su 24.\n"
    },
    {
      name: "Banche",
      imgBackground: "banche01.jpg",
      carousel_desc: "Devi prelevare? Scopri le banche del centro di Bologna!",
      service_desc: "Avete bisogno di effettuare un prelievo o di svolgere una qualsiasi commissione in banca?" +
        "Abbiamo stilato una lista delle banche del centro più comode da raggiungere. Potete trovarle il via Rizzoli, strada centrale che conduce alle due torri, oppure nelle zone adiacenti, in modo da non sviare dai vostri divertenti tour della città!\n"
    },
  ]
  const servicetype0 = await models.ServiceType.create(serviceTypeList[4])
  const servicetype1 = await models.ServiceType.create(serviceTypeList[1])
  const servicetype2 = await models.ServiceType.create(serviceTypeList[2])
  const servicetype3 = await models.ServiceType.create(serviceTypeList[3])
  const servicetype4 = await models.ServiceType.create(serviceTypeList[0])

  //Service Table
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
      carousel_desc: "Scopri cosa ti aspetta nel cuore di Bologna, ne resterai di stucco!",
      description: "Partendo da Piazza Maggiore, cuore della città, passeremo in rassegna i principali monumenti del centro storico. La visita alla Basilica di San Petronio sarà seguita dai meravigliosi Palazzo D’Accursio e Re Enzo. Ci soffermeremo in Piazza Nettuno, dove si trova l’omonima e celebre fontana. Infine, passeggiando lungo via Rizzoli raggiungeremo il simbolo di Bologna: la Torre degli Asinelli insieme alla Garisenda.",
      map:"mapPasseggiataInCentro01.jpg",
      duration:"La durata è di 30 minuti e si percorrono circa 500m",
      imgBackground:"unaPasseggiataInCentro01.jpg",
      link:"https://www.google.it/maps/dir/Piazza+Maggiore,+Piazza+Maggiore,+Bologna,+BO/Basilica+di+San+Petronio,+Piazza+Galvani,+Bologna,+BO/Palazzo+d'Accursio,+Piazza+Maggiore,+Bologna,+BO/Palazzo+Re+Enzo,+Piazza+del+Nettuno,+Bologna,+BO/Fontana+del+Nettuno,+Piazza+del+Nettuno,+Bologna,+BO/Torri+degli+Asinelli+e+della+Garisenda,+Piazza+di+Porta+Ravegnana,+Bologna,+BO/@44.4938722,11.34243,551m/data=!3m2!1e3!4b1!4m38!4m37!1m5!1m1!1s0x477fd49586d65539:0x3ec4fc9a3ae6b51e!2m2!1d11.3430945!2d44.4937544!1m5!1m1!1s0x477fd495860346b7:0xa17d71587906b0a5!2m2!1d11.3431292!2d44.4929435!1m5!1m1!1s0x477fd4959b6b5b61:0x2059a5c0518cc24!2m2!1d11.3424071!2d44.4939611!1m5!1m1!1s0x477fd4be190446a5:0x45430544efddaa74!2m2!1d11.3430307!2d44.4945242!1m5!1m1!1s0x477fd495860346b7:0x8ed55aa49aac8271!2m2!1d11.3426587!2d44.4943042!1m5!1m1!1s0x477fd4be8ea29f71:0x28631a8b221623ea!2m2!1d11.3467312!2d44.4942094!3e2?utm_medium=s2email&shorturl=1"
    },
    {
      name: "I Portici e San Luca",
      carousel_desc: "L'itinerario più lungo proposto dal team di insideBO, vi assicuriamo che ne vale assolutamente la pena!",
      description: "La partenza è appena fuori le mura, più precisamente a Porta Saragozza, dove percorreremo il famoso portico ed i suoi archi che ci conducono fino al Colle della Guardia, parte dell’appennino bolognese, dove ci attenderà il Santuario della Madonna di San Luca. Lungo il cammino ci fermeremo ad osservare lo stadio Renato Dall’Ara.",
      map:"mapPortici01.JPG",
      duration:"La durata è di 2 ore e si percorrono circa 4 km",
      imgBackground:"portici01.jpg",
      link:"https://www.google.it/maps/dir/Santuario+Madonna+di+San+Luca,+Santuario+Madonna+di+San+Luca,+Via+di+San+Luca,+Bologna,+BO/Portici+di+Via+san+Luca,+Via+di+San+Luca,+320,+40135+Bologna+BO/Stadio+Renato+Dall'Ara,+Via+Andrea+Costa,+Bologna,+BO/Porta+Maggiore,+Piazza+di+Porta+Maggiore,+Bologna,+BO/Colli+Bolognesi+D'Origine,+Via+Andrea+Costa,+Bologna,+BO/Portici+di+Bologna+-+Unesco,+Via+Farini,+Bologna,+BO/@44.4894026,11.2885914,8824m/data=!3m2!1e3!4b1!4m38!4m37!1m5!1m1!1s0x477fd44cf425d3d3:0xe9ab95d7f1659899!2m2!1d11.2980641!2d44.4791156!1m5!1m1!1s0x477fd5264302ebf5:0x1dff30d78fb1ecd8!2m2!1d11.3104799!2d44.4900017!1m5!1m1!1s0x477fd45d0f1547d1:0x6dbca3585c33186f!2m2!1d11.3099448!2d44.4921623!1m5!1m1!1s0x477fd4b63ad4511d:0x981028aebd6c2321!2m2!1d11.3572973!2d44.4900137!1m5!1m1!1s0x477fd443c2900001:0xebd12eb8b4f76786!2m2!1d11.3017952!2d44.4915593!1m5!1m1!1s0x477fd58ed00a9479:0xea6f44eff686a679!2m2!1d11.3435665!2d44.4913859!3e0?utm_medium=s2email&shorturl=1"
    },
    {
      name: "Bologna La Dotta ",
      carousel_desc: "Seguici in questo viaggio a scoprire il perché del soprannome 'la Dotta'!",
      description: "Partendo dalle sale mozzafiato dell’Archiginnasio, ci dirigeremo verso la biblioteca più importante della città, ovvero Sala Borsa. Continuando per Via Dell’Indipendenza, osserveremo la maestosa Cattedrale di San Pietro, per poi dirigerci verso Via Delle Moline, dove ci attenderà la suggestiva finestrella sull’omonimo canale. Da qui, proseguiremo verso il cuore dell’odierna zona universitaria, per ammirare gli splendidi edifici medievali di Via Zamboni e Piazza Verdi.",
      map:"mapLaDotta01.JPG",
      duration:"La durata è di 1 ora e si percorrono circa 2km",
      imgBackground:"viaDelleMoline01.jpg",
      link:"https://www.google.it/maps/dir/Archiginnasio+de+Bolonia,+Piazza+Galvani,+Bologna,+BO/Biblioteca+Salaborsa,+Piazza+del+Nettuno,+Bologna,+BO/Cattedrale+Metropolitana+di+San+Pietro,+Via+dell'Indipendenza,+Bologna,+BO/Finestrella,+Via+Piella,+Bologna,+BO/Alma+Mater+Studiorum+-+Universit%C3%A0+di+Bologna,+Via+Zamboni,+Bologna,+BO/@44.4953072,11.3440607,1103m/data=!3m2!1e3!4b1!4m32!4m31!1m5!1m1!1s0x477fd4bfc278adc1:0x991786b52ce6d4bc!2m2!1d11.34342!2d44.491972!1m5!1m1!1s0x477fd4bfc278adc1:0xc266fcbe4097cdfd!2m2!1d11.3423806!2d44.4946112!1m5!1m1!1s0x477fd4be0705c4a5:0xf8e25b961d073f1b!2m2!1d11.3444266!2d44.4956867!1m5!1m1!1s0x477fd4bd617e45e1:0x2929ff96df8e4709!2m2!1d11.3451952!2d44.4985959!1m5!1m1!1s0x477fd4bb9753a277:0xac40824c35d31af1!2m2!1d11.354157!2d44.4962318!3e2?utm_medium=s2email&shorturl=1"
    },
  ]
  await models.Itinerary.bulkCreate(itineraryList)

  //Itinerary_Poi table (N-N association between Itinerary and Poi)
  const Itinerary_PoiList = [
    {
      ItineraryId:1,
      PoiId:1
    },
    {
      ItineraryId:1,
      PoiId:3
    },
    {
      ItineraryId:1,
      PoiId:2
    },
    {
      ItineraryId:1,
      PoiId:4
    },
    {
      ItineraryId:1,
      PoiId:5
    },
    {
      ItineraryId:2,
      PoiId:15
    },
    {
      ItineraryId:2,
      PoiId:16
    },
    {
      ItineraryId:2,
      PoiId:17
    },
    {
      ItineraryId:2,
      PoiId:19
    },
    {
      ItineraryId:2,
      PoiId:20
    },
    {
      ItineraryId:3,
      PoiId:7
    },
    {
      ItineraryId:3,
      PoiId:8
    },
    {
      ItineraryId:3,
      PoiId:13
    },
    {
      ItineraryId:3,
      PoiId:14
    },
    {
      ItineraryId:3,
      PoiId:18
    },
  ]
  await models.Itinerary_Poi.bulkCreate(Itinerary_PoiList)
}
