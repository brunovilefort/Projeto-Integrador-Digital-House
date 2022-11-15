/* eslint-disable no-undef */
// const Appointments = require('../database/models/appointments-model')
const { socialMedia, dateFooter, title, mes } = require('../helpers/data')
const { diasMes, diasPossiveis, hours } = require('../helpers/index')
const times = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00'
]
const Appointments = require('../database/models/appointments-model')

const appointmentController = {
  getDate: (req, res) => {
    return res.render('appointments', {
      socialMedia,
      dateFooter,
      diasMes,
      title
    })
  },
  getMyAppointments: (req, res) => {
    return res.render('myAppointments', {
      socialMedia,
      dateFooter,
      diasMes,
      title,
      diasPossiveis,
      hours
    })
  },
  getTime: async (req, res) => {
    const { dia } = await req.query
    const timeTitle = `Agende em ${dia} de ${mes}`
    const appointmentsArray = await Appointments.findAll()
    const result = times.filter(
      time => !appointmentsArray.find(appointment => appointment.time === time)
    )
    res.render('time', {
      socialMedia,
      dateFooter,
      result,
      timeTitle
    })
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
