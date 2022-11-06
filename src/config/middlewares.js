const { urlencoded, bodyParser, contentType } = require('../middlewares')

module.exports = (app) => {
  app.use(urlencoded)
  app.use(bodyParser)
  app.use(contentType)
}
