const Appointments = require('../database')
const { navLinks, socialMedia, year, title, mes } = require('../utils')
const { daysOfMonth, possibleDays, hours, times } = require('../helpers')

const baseInfo = { navLinks, socialMedia, year }

const appointmentController = {
  getDate: (req, res) => res.render('appointments', baseInfo, daysOfMonth, title, { userLogged: req.session.user }),

  getMyAppointments: (req, res) => res.render('myAppointments', baseInfo, daysOfMonth, title, possibleDays, hours, { userLogged: req.session.user }),

  getTime: async (req, res) => {
    try {
      const { dia } = await req.query
      const timeTitle = `Agende em ${dia} de ${mes}`
      const appointmentsArray = await Appointments.findAll()
      const result = times.filter(time => !appointmentsArray.find(appointment => appointment.time === time))
      res.render('time', baseInfo, result, timeTitle, { userLogged: req.session.user })
    } catch (error) {
      console.log(error.message)
    }
  },

  getCreate: async (req, res) => {
    try {
      const { dia, time } = await req.query
      await Appointments.create({ dia, time })
      res.redirect('login')
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = appointmentController
