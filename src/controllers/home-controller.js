const { socialMedia, dateFooter } = require('../utils/data')

const homeController = {
  getServices: (req, res) => {
    res.render('services', {
      socialMedia,
      dateFooter
    })
  },

  getHome: (req, res) => {
    res.render('home', { socialMedia, dateFooter })
  }
}

module.exports = homeController
