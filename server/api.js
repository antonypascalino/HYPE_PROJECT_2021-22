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
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })



// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const Poi = database.define("poi", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    visit_info: DataTypes.STRING,
    img1: DataTypes.STRING,
  })

  await database.sync({ force: true })
  return {
    Poi
  }
}


async function runMainApi() {
  const models = await initializeDatabaseConnection()
  await initialize(models)


  // HTTP GET api that returns all the cats in our actual database
  app.get("/pois", async (req, res) => {
    const result = await models.Poi.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img1: element.img1,
        visit_info: element.visit_info,
        id: element.id,
      })
    }
    return res.json(filtered)
  })
  app.get('/pois/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Poi.findOne({ where: { id }})
    return res.json(result)
  })


}

runMainApi()


export default app
