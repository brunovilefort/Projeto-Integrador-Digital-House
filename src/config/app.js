const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(
  session({
    name: 'session',
    secret: 'bora_bill',
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function () {},
      path: require('path').join(require('os').tmpdir(), 'sessions')
    }),
    cookie: {
      secure: false,
      maxAge: 360000 * 7,
      expires: new Date(Date.now() + 360000 * 7),
      httpOnly: true
    }
  })
)

app.use(flash())
app.use((req, res, next) => {
  if (req.session.user_id) {
    res.locals.session = req.session
  }
  next()
})

const authRouter = require('../routes/auth-routes')
const homeRouter = require('../routes/home-routes')
const appointmentRouter = require('../routes/appointment-routes')

app.use('/api/auth', authRouter)
app.use('/', homeRouter)
app.use('/api', appointmentRouter)

module.exports = { app }
