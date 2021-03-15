const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = 9000

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB Connection eror:'))
// error can be logged onto console by binding it to console
app.get('/',(req,res) => {
  res.send('Hello World')
})
app.use ('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))