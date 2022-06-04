
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
      img1:"fontanaNettuno01.jpg"
    },
    {
      name: "San Petronio",
      visit_info:"Il luogo è pubblico e accessibile a tutti gratuitamente in qualsiasi momento della giornata.",
      description: "Cuore della città, Piazza Maggiore è il risultato di secolari trasformazioni che la arricchirono via via di importanti edifici: la Basilica di San Petronio, il Palazzo dei Notai, il Palazzo d’Accursio, il Palazzo del Podestà e il Palazzo dei Banchi.",
      img1:"sanPetronio01.jpg"
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
