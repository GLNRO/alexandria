let createError = require('http-errors')
let express = require('express')
let path = require('path')
let logger = require('morgan')
let port = 3003
let app = express()

app.listen(port, () => console.log('Alexandria is live on port ', port))
