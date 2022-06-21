
const { Op, QueryTypes } = require('sequelize')
const moment = require('moment')

const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/insideBO_DB")

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//  ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const Poi = database.define("poi", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    visit_info: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    imgArray: DataTypes.ARRAY(DataTypes.STRING),
    x:DataTypes.FLOAT,
    y:DataTypes.FLOAT,
    carousel_desc:DataTypes.STRING
  })

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

  const Itinerary = database.define("itinerary", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgBackground: DataTypes.STRING,
    map: DataTypes.STRING,
    duration: DataTypes.STRING,
    carousel_desc:DataTypes.STRING

  })
  const ServiceType = database.define("servicetype", {
    name: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    carousel_desc:DataTypes.STRING,
    service_desc: DataTypes.TEXT,
  })

  const Service = database.define("service", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING,
    website: DataTypes.STRING,
    phone_number: DataTypes.STRING
  })

  // Creating the N -> N association between Itinerary and Poi
  Itinerary.belongsToMany(Poi, { through: 'poiInItinerary',foreignKey: 'ItineraryId'}) // to show poi in itinerary page
  Poi.belongsToMany(Itinerary, { through: 'poiInItinerary',foreignKey: 'PoiId'}) // to show poi in itinerary page

  // Creating the 1 -> N association between POI and Event
  Poi.hasMany(Events)
  Events.belongsTo(Poi)

  // Creating the 1 -> N association between POI and Event
  ServiceType.hasMany(Service)
  Service.belongsTo(ServiceType)

  await database.sync({ force: true })
  return {
    Poi,
    Events,
    Itinerary,
    ServiceType,
    Service,
  }
}


async function runMainApi() {
  const models = await initializeDatabaseConnection()
  await initialize(models)


  // HTTP GET api that returns all the point of interest
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
        x:element.x,
        y:element.y,
        carousel_desc:element.carousel_desc
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the point of interest
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



  // HTTP GET api that returns all the events in our actual database
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

  // HTTP GET api that returns 4 events in our actual database
  app.get("/4events1", async (req, res) => {
    const result = await models.Events.findAll(  {where: { firstDay: { [Op.gte]: moment().toDate() } },
    order: [['firstDay', 'ASC']],
      limit: 4,
  })
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

  // HTTP GET api that returns a specific point of interest
  app.get('/events/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Events.findOne({ where: { id }})
    return res.json(result)
  })

  // HTTP GET api that returns all the services in our actual database
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
  // HTTP GET api that returns a specific point of interest
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


  // HTTP GET api that returns a specific point of interest
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


  // HTTP GET api that returns all the services in our actual database
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
        carousel_desc:element.carousel_desc
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns a specific point of interest
  app.get('/itineraries/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Itinerary.findOne({ where: { id }})
    return res.json(result)
  })

}

runMainApi()


export default app
