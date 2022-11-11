const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const methodOverride = require('method-override')
const app = express()

const authMiddleware = require('../middleware/auth')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
// Session
app.use(
  session({
    secret: 'bora_bill',
    resave: true,
    saveUninitialized: true
  })
)
app.use(flash())
// Middleware
app.use(authMiddleware)

const authRouter = require('../routes/auth-routes')
const homeRouter = require('../routes/home-routes')
const appointmentRouter = require('../routes/appointment-routes')

app.use('/api/auth', authRouter)
app.use('/', homeRouter)
app.use('/api', appointmentRouter)

module.exports = { app }
