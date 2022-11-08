const router = require('express').Router()

const appointmentController = require('../controllers/appointment-controller')

router
  .route('/appointments')
  .get(appointmentController.getDate)

router
  .route('/appointments/time')
  .get(appointmentController.getTime)

router.get('appointments/create', appointmentController.getCreate)

module.exports = router
