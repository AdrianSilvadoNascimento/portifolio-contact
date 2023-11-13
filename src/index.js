const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const contactRoute = require('./routes/contact-route')

require('dotenv').config()
const  { env } = require('process')

const PORT = env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', contactRoute)

app.listen(PORT, () => {
  console.log(`It's running on port ${PORT}`)
})
