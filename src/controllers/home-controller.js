const { socialMedia, dateFooter } = require('../helpers/data')

class HomeController {
  getServices (req, res) {
    return res.render('services', { socialMedia, dateFooter })
  }

  getHome (req, res) {
    return res.render('home', { socialMedia, dateFooter })
  }

  getProducts (req, res) {
    return res.render('products', { socialMedia, dateFooter })
  }
}

module.exports = new HomeController()
