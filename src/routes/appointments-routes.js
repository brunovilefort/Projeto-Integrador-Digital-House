const router = require('express').Router()

const appointmentsController = require('../controllers/auth-controller')

router
  .route('/appointments')
  .get(appointmentsController.getDashboard)
  .post(appointmentsController.postDashboard)
  .put(appointmentsController.putDashboard)
  .delete(appointmentsController.deleteDashboard)

module.exports = router
