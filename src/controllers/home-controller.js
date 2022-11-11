const { navLinks, socialMedia, year } = require('../utils')

const baseInfo = { navLinks, socialMedia, year }

const homeController = {
  getServices: (req, res) => res.render('services', baseInfo, { userLogged: req.session.user }),

  getHome: (req, res) => res.render('home', baseInfo, { userLogged: req.session.user })
}

module.exports = homeController
