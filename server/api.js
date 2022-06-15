const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
//const database = new Sequelize("postgres://postgres:postgres@localhost:5432/insideBO_DB")

// Production (use this code when deploying to production in Heroku)
 const pg = require('pg')
 pg.defaults.ssl = true
 const database = new Sequelize(process.env.DATABASE_URL, {
   ssl: true,
   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
 })


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const Poi = database.define("poi", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    visit_info: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    imgArray: DataTypes.ARRAY(DataTypes.STRING),
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
    type:DataTypes.INTEGER
  })

  const Itinerary = database.define("itinerary", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgBackground: DataTypes.STRING,
    map: DataTypes.STRING,
    duration: DataTypes.STRING,

  })
  const Service = database.define("service", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
  })

  const Bank = database.define("bank", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING
  })

  const Cinema = database.define("cinema", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING
  })
  const Disco = database.define("disco", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING
  })
  const Pharmacy = database.define("pharmacy", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING
  })
  const Restaurant = database.define("restaurant", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING
  })

  // Creating the N -> N association between Itinerary and Poi
  Itinerary.belongsToMany(Poi, { through: 'poiInItinerary'}) // to show poi in itinerary page

  // Creating the 1 -> N association between POI and Event
  Poi.hasMany(Events)
  Events.belongsTo(Poi)

  // Creating the 1 -> N association between POI and Event
  Service.hasMany(Pharmacy)
  Pharmacy.belongsTo(Service)

  await database.sync({ force: true })
  return {
    Poi,
    Events,
    Itinerary,
    Service,
    Bank,
    Restaurant,
    Disco,
    Cinema,
    Pharmacy
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
        imgArray:element.imgArray
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns all the point of interest
  app.get("/4pois", async (req, res) => {
    const result = await models.Poi.findAll({limit: 4})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgBackground: element.imgBackground,
        visit_info: element.visit_info,
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
        website:element.website
      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns 4 events in our actual database
  app.get("/4events", async (req, res) => {
    const result = await models.Events.findAll({limit: 4})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgArray: element.imgArray,
        address: element.address,
        date:element.date,
        id: element.id,
        imgBackground:element.imgBackground
      })
    }
    return res.json(filtered)
  })

  app.get("/summerEvents", async (req, res) => {
    const title = req.query.type;
    var condition = title ? { title: { [Op.like]: `%${3}%` } } : null;
    const result = await models.Events.findAll({where:condition})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        imgArray: element.imgArray,
        address: element.address,
        date:element.date,
        id: element.id,
        imgBackground:element.imgBackground
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
    const result = await models.Service.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        address: element.visit_info,
        opening_hours:element.opening_hours,
        id: element.id,
        imgBackground:element.imgBackground,
        website:element.website,
        description:element.description

      })
    }
    return res.json(filtered)
  })

  // HTTP GET api that returns a specific point of interest
  app.get('/services/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Service.findOne({ where: { id }})
    return res.json(result)
  })

  // HTTP GET api that returns a specific point of interest
  app.get('/services1/:serviceId', async (req, res) => {
    const id = +req.params.serviceId
    const result = await models.Pharmacy.findAll({ where: { id },include: [{model: models.Service}]})
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        address: element.visit_info,
        opening_hours:element.opening_hours,
        id: element.id,

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
        description:element.description
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
