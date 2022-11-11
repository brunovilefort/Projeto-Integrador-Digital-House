const router = require('express').Router()

const { appointmentController } = require('../controllers')

router.route('/appointments').get(appointmentController.getDate)

router.route('/appointments').get(appointmentController.getDate)
//   .post(appointmentController.postDashboard)
//   .put(appointmentController.putDashboard)
//   .delete(appointmentController.deleteDashboard)
router
  .route('/myappointments')
  .get(appointmentController.getMyAppointments)
  .get(appointmentController.getDate)

router.route('/appointments/time').get(appointmentController.getTime)

router.get('/appointments/create', appointmentController.getCreate)

module.exports = router
