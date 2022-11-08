const router = require('express').Router()

const appointmentController = require('../controllers/appointment-controller')

router
  .route('/appointments')
  .get(appointmentController.getDashboard)
//   .post(appointmentController.postDashboard)
//   .put(appointmentController.putDashboard)
//   .delete(appointmentController.deleteDashboard)

module.exports = router
