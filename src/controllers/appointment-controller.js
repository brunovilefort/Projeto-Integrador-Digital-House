// const Appointments = require('../database/models/appointments-model')
const { navLinks, socialMedia, dateFooter } = require('../utils/data')

const appointmentController = {
  getDashboard: (req, res) => {
    return res.render('appointments', {
      navLinks, socialMedia, dateFooter
    })
  }
  // postDashboard: async (req, res) => {
  //   res.send({ message: 'deu certo' })
  // },
  // putDashboard: async (req, res) => {
  //   res.send({ message: 'deu certo' })
  // },
  // deleteDashboard: async (req, res) => {
  //   res.send({ message: 'deu certo' })
  // }
}

module.exports = appointmentController
