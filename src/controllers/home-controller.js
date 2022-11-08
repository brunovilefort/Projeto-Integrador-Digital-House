const { navLinks, socialMedia, dateFooter } = require('../utils/data')

const homeController = {
  getServices: (req, res) => {
    res.render('services', {
      navLinks, socialMedia, dateFooter
    })
  },

  getHome: (req, res) => {
    res.render('home', {
      navLinks, socialMedia, dateFooter
    })
  }
}

module.exports = homeController
