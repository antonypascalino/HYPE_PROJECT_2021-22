
export default async (models) => {

  //Point of Interest Table
  const poiList = [
    {
      name: "Piazza Maggiore",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.",
      imgBackground: "piazzamaggiore01.jpg",
      imgArray:["piazzamaggiore01.jpg","fontanaNettuno01.jpg"],
    },
    {
      name: "Fontana Nettuno",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.",
      imgBackground: "fontanaNettuno01.jpg",
      imgArray:["piazzamaggiore01.jpg","fontanaNettuno01.jpg"],
    },
  ]
  await models.Poi.bulkCreate(poiList)

  //Event Table
  const eventList = [
    {
      name: "Il Cinema Ritrovato",
      description: "",
      img1:"require('@/static/carousel/fontanaNettuno01.jpg')",
      address:"",
      date:""
    },
  ]
  await models.Events.bulkCreate(eventList)

  //Service Table


  //Itinerary Table
}
