const express = require('express')

const app = express()
const morgan = require('morgan')
const { connectToDB } = require('./config/connectToDB')
const {ErrorHandler} = require('./utils/errorHandler')
const { globalError } = require('./middlewares/errorMiddleware')

//config
require('dotenv').config()

// conect to DB
connectToDB()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// middlewares
app.use(express.json())

// routes
app.use('/api', require('./routes/index'))

app.all('*', (req, res, next) => {
    next(new ErrorHandler("404 not found ;( ", 404))
})

// error Handler
app.use(globalError)

// listen server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('runing in port', port);
})