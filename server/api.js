const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

//const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")

//Production in Heroku
const pg =require('pg')
pg.defaults.ssl = true
const database =new Sequelize(process.env.DATABASE_URL,{
  ssl:true,
  dialectOptions:{ ssl: {require: true, rejectUnauthorized:false}},
})


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const PointOfInterest = database.define("pointofinterest", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        img: DataTypes.ARRAY(DataTypes.STRING),
        visitInfo: DataTypes.STRING,
    })
    await database.sync({ force: true })
    return {
      PointOfInterest,
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body



async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    // HTTP GET api that returns all the cats in our fake database
    app.get("/pointsofinterest", async (req, res) => {
        const result = await models.PointOfInterest.findAll()
        const filtered = []
        for (const element of result) {
            filtered.push({
              title:element.title,
              img: element.img,
            })
        }
        return res.json(filtered)
    })

}

runMainApi()


export default app
