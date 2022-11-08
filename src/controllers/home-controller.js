const { navLinks, socialMedia, dateFooter } = require('../utils/data')

const homeController = {
  getServices: (req, res) => {
    console.log(req.session.user_id)
    res.render('services', {
      navLinks, socialMedia, dateFooter, userLogged: req.session.user
    })
  },

  getHome: (req, res) => {
    res.render('home', { navLinks, socialMedia, dateFooter, userLogged: req.session.user })
  }
}

module.exports = homeController
