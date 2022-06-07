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
    description: DataTypes.STRING,
    visit_info: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    imgArray: DataTypes.ARRAY(DataTypes.STRING),
  })

  const Events = database.define("event", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    address: DataTypes.STRING,
    imgBackground: DataTypes.STRING,
    imgArray: DataTypes.ARRAY(DataTypes.STRING),
  })

  const Itinerary = database.define("itinerary", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    opening_hours: DataTypes.STRING,

  })
  const Service = database.define("service", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    map: DataTypes.STRING,
    duration: DataTypes.STRING,
  })

  await database.sync({ force: true })
  return {
    Poi,
    Events,
    Itinerary,
    Service
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
  app.get("/highlights", async (req, res) => {
    const result = await models.Poi.findAll({limit:4})
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
        address: element.visit_info,
        date:element.visit_info,
        id: element.id,
        imgBackground:element.imgBackground
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
        address: element.visit_info,
        date:element.visit_info,
        id: element.id,
        imgBackground:element.imgBackground
      })
    }
    return res.json(filtered)
  })

}

runMainApi()


export default app
