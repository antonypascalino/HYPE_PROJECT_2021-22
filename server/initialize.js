
export default async (models) => {

  //Point of Interest Table
  const poiList = [
    {
      name: "Piazza Maggiore",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.",
      imgBackground: "piazzaMaggiore02.jpg",
      imgArray:["piazzaMaggiore02.jpg","piazzaMaggiore03.jpg","piazzaMaggiore04.jpg"],
    },
    {
      name: "Fontana Nettuno",
      visit_info:"",
      description: "",
      imgBackground: "fontanaNettuno01.jpg",
      imgArray:[""],
    },
  ]
  await models.Poi.bulkCreate(poiList)

  //Event Table
  const eventList = [
    {
      name: "Il Cinema Ritrovato",
      description: "",
      imgBackground: "ilCinemaRitrovato01.jpg",
      imgArray:["",""],
      address:"",
      date:""
    },
    {
      name: "Festival della mortadella",
      description: "",
      imgBackground: "festivalMortadella01.jpg",
      imgArray:["",""],
      address:"",
      date:""
    },
    {
      name: "Arte Fiera",
      description: "",
      imgBackground: "arteFiera01.jpg",
      imgArray:["",""],
      address:"",
      date:""
    },
    {
      name: "Jazz Festival",
      description: "",
      imgBackground: "jazzFestival01.png",
      imgArray:["",""],
      address:"",
      date:""
    },

  ]
  await models.Events.bulkCreate(eventList)

  //Service Table
  const serviceList = [
    {
      name: "",
      address:"",
      opening_hours:""
    },
  ]
  await models.Service.bulkCreate(serviceList)

  //Itinerary Table
  const itineraryList = [
    {
      name: "",
      description: "",
      map:"",
      duration:""
    },
  ]
  await models.Itinerary.bulkCreate(itineraryList)

}
