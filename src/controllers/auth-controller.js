const { navLinks, socialMedia, dateFooter } = require('../utils/data')

const authController = {
  getLogin: (req, res) => {
    res.render('login', {
      navLinks, socialMedia, dateFooter
    })
  },
  getRegister: (req, res) => {
    res.render('register')
  }
}

module.exports = authController
