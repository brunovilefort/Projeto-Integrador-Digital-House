const { navLinks, socialMedia, dateFooter } = require('../utils/data')

const appointmentController = {
  getAppointment: (req, res) => {
    res.render('appointments', {
      navLinks, socialMedia, dateFooter
    })
  }
}

module.exports = appointmentController
