const { urlencoded, bodyParser, cors, helmet, contentType } = require('../middlewares')

module.exports = (app) => {
  app.use(urlencoded)
  app.use(bodyParser)
  app.use(contentType)
}
