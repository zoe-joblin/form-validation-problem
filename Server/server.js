const express = require('express')
const server = express()

server.use(express.static(__dirname + '/public'))

module.exports = server