const path = require('path')
const express = require('express')

const server = express()
const booking = require('./routes/booking')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/v1/booking', booking)


module.exports = server
