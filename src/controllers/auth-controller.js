const { navLinks, socialMedia, dateFooter } = require('../utils/data')

const AuthController = {
  getLogin: (req, res) => {
    res.render('login', {
      navLinks, socialMedia, dateFooter
    })
  }
}

module.exports = AuthController
