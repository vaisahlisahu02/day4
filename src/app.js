const express = require('express')
const userRoutes = require('./routes/user.routers')
const app = express()



app.use(express.json())

app.set("view engine", 'ejs')

app.use('/user', userRoutes)


module.exports = app;