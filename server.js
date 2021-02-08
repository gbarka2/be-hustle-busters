require('dotenv').config()
const {PORT = 4000, NODE_ENV = "development"} = process.env
const mongoose = require('./db/connection')
const cors = require('cors')
const corsOptions = require('./configs/cors.js')
const express = require('express')
const app = express()
const morgan = require('morgan')


NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

const UserRouter = require('./controllers/User')
app.use('/usernames', UserRouter)

const DivisionRouter = require('./controllers/Division')
app.use('/divisions', DivisionRouter)

const LeadRouter = require('./controllers/Lead')
app.use('/leads', LeadRouter)

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}!`)
})

