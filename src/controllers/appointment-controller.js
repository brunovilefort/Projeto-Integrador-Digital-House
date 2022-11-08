// const Appointments = require('../database/models/appointments-model')
const { navLinks, socialMedia, dateFooter, title } = require('../utils/data')
const { diasMes } = require('../helpers/index')

const appointmentController = {
  getDashboard: (req, res) => {
    return res.render('appointments', {
      navLinks, socialMedia, dateFooter, diasMes, title
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
