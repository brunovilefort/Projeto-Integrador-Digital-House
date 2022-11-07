const router = require('express').Router()

const appointmentController = require('../controllers/appointment-controller')

router
  .route('/appointment')
  .get(appointmentController.getAppointment)
  .post((req, res) => res.json({ message: 'success login!' }))

module.exports = router
