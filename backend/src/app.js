const express = require('express')
const cors = require('cors')
const searchRoute = require('./router/routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/search', searchRoute)

app.get('/', (req, res) => {
    res.send()
})

module.exports = app