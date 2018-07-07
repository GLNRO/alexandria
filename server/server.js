let createError = require('http-errors')
let express = require('express')
let path = require('path')
let logger = require('morgan')
let port = 3003
let app = express()
let booksRouter = require('./routes/books')
app.listen(port, () => console.log('Alexandria is live on port ', port))

app.use('/', booksRouter)
