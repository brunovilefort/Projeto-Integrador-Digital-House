const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const authRouter = require('../routes/auth-routes')
app.use('/api/auth', authRouter)

module.exports = { app }
