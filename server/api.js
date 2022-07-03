// Creation of the models and queries.

const { Op, QueryTypes } = require('sequelize')
const moment = require('moment')

const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development (use this when the DB is running in local)
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/insideBO_DB")

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//     ssl: true,
//     dialectOptions: {
        //       ssl: { require: true, rejectUnauthorized: false }
//   },
//  })


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()

  //Poi model
  const Poi = database.define("poi", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    visit_info: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    imgArray: DataTypes.ARRAY(DataTypes.STRING),
    googleLink:DataTypes.TEXT,
    carousel_desc:DataTypes.STRING,
    address:DataTypes.STRING,
    mapLink:DataTypes.TEXT
  })

  //Event model
  const Events = database.define("event", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.STRING,
    address: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    imgArray: DataTypes.ARRAY(DataTypes.STRING),
    website:DataTypes.STRING,
    price:DataTypes.STRING,
    type:DataTypes.INTEGER,
    firstDay:DataTypes.DATEONLY,
    carousel_desc:DataTypes.STRING
  })

  //Itinerary model
  const Itinerary = database.define("itinerary", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgBackground: DataTypes.STRING,
    map: DataTypes.STRING,
    duration: DataTypes.STRING,
    carousel_desc:DataTypes.STRING,
    link: DataTypes.TEXT
  })

  //ServiceType model
  const ServiceType = database.define("servicetype", {
    name: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    carousel_desc:DataTypes.STRING,
    service_desc: DataTypes.TEXT,
  })

  //Service model
  const Service = database.define("service", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING,
    website: DataTypes.STRING,
    phone_number: DataTypes.STRING
  })

  //Itinerary_Poi model
  const Itinerary_Poi = database.define('Itinerary_Poi', {})
  // Creating the N -> N association between POI and Itinerary
  Itinerary.belongsToMany(Poi, {
    through: 'Itinerary_Poi',
    foreignKey: 'ItineraryId',
  }) // to show poi in itinerary page

  Poi.belongsToMany(Itinerary, {
    through: 'Itinerary_Poi',
    foreignKey: 'PoiId',
  }) // to show poi in itinerary page


  // Creating the 1 -> N association between POI and Event
  Poi.hasMany(Events)
  Events.belongsTo(Poi)

  // Creating the 1 -> N association between Service and Service Type
  ServiceType.hasMany(Service)
  Service.belongsTo(ServiceType)

  await database.sync({ force: true })
  return {
    Poi,
    Events,
    Itinerary,
    ServiceType,
    Service,
    Itinerary_Poi
  }
}

async function runMainApi() {
  const models = await initializeDatabaseConnection()
  await initialize(models)

  // HTTP GET api that returns all the points of interest
  app.get("/pois", async (req, res) => {
    const result = await models.Poi.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgBackground: element.imgBackground,
        visit_info: element.visit_info,
        id: element.id,
        imgArray:element.imgArray,
        googleLink:element.googleLink,
        carousel_desc:element.carousel_desc,
        address:element.address,
        mapLink:element.mapLink
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns only 4 the point of interest (called in the homepage).
  // The 4 pois are randomly extracted from the table
  app.get("/4pois", async (req, res) => {
    const result = await models.Poi.findAll({ order: Sequelize.literal('random()'), limit: 4 })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgBackground: element.imgBackground,
        id: element.id,
        imgArray:element.imgArray
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns a specific point of interest
  app.get('/pois/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Poi.findOne({ where: { id }})
    return res.json(result)
  })

  // HTTP GET api that returns all the events in our actual DB
  app.get("/events", async (req, res) => {
    const result = await models.Events.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgArray: element.imgArray,
        address: element.address,
        date:element.date,
        id: element.id,
        imgBackground:element.imgBackground,
        price:element.price,
        website:element.website,
        type:element.type,
        carousel_desc:element.carousel_desc
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns 4 events in our actual database
  app.get("/4events", async (req, res) => {
    const result = await models.Events.findAll({ order: Sequelize.literal('random()'), limit: 4 })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgArray: element.imgArray,
        address: element.address,
        date:element.date,
        id: element.id,
        imgBackground:element.imgBackground,
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns 4 events in our actual database only if the event is not already happened
  app.get("/4events1", async (req, res) => {
    const result = await models.Events.findAll(  {where: { firstDay: { [Op.gte]: moment().toDate() } }, order: [['firstDay', 'ASC']], limit: 4,})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgArray: element.imgArray,
        address: element.address,
        date:element.date,
        id: element.id,
        imgBackground:element.imgBackground,
        firstDay:element.firstDay
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns a specific event
  app.get('/events/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Events.findOne({ where: { id }})
    return res.json(result)
  })

  // HTTP GET api that returns all the service Types in our actual database
  app.get("/services", async (req, res) => {
    const result = await models.ServiceType.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        id: element.id,
        imgBackground:element.imgBackground,
        service_desc:element.service_desc,
        carousel_desc:element.carousel_desc
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns a specific serviceType
  app.get('/specificService/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.ServiceType.findAll({ where: { id }})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        id: element.id,
        imgBackground:element.imgBackground,
        service_desc:element.service_desc,
        carousel_desc:element.carousel_desc
      })
    }
    return res.json(filtered)
  })


  // HTTP GET api that returns all the services for a specific ServiceType
  app.get('/Services/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Service.findAll({ where: { servicetypeId: id },include: [{model: models.ServiceType}]})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        address: element.address,
        opening_hours:element.opening_hours,
        id: element.id,
        website:element.website,
        phone_number:element.phone_number
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the itineraries in our actual database
  app.get("/itineraries", async (req, res) => {
    const result = await models.Itinerary.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        address: element.visit_info,
        map:element.map,
        id: element.id,
        imgBackground:element.imgBackground,
        description:element.description,
        carousel_desc:element.carousel_desc,
        link:element.link
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns a specific itinerary
  app.get('/itineraries/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Itinerary.findAll({ where: { id }})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        id: element.id,
        duration:element.duration,
        description:element.description,
        map:element.map,
        link:element.link,
        imgBackground:element.imgBackground
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the points of interest associated to a specific itinerary
  app.get('/itPoi/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Itinerary.findAll({where: { id: id },include: [{model: models.Poi}]})
    return res.json(result)
  })

  // HTTP GET api that returns all the services for a specific ServiceType
  app.get('/eventInPoi/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Events.findAll({where: { poiId: id },include: [{model: models.Poi}]})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgArray: element.imgArray,
        address: element.address,
        date:element.date,
        id: element.id,
        imgBackground:element.imgBackground,
        firstDay:element.firstDay,
        poiId:element.poiId
      })
    }
    return res.json(filtered)
  })
}
runMainApi()


export default app
