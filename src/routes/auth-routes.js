const router = require('express').Router()

const authController = require('../controllers/auth-controller')

router
  .route('/login')
  .get(authController.getLogin)
  .post(authController.postLogin)

router
  .route('/register')
  .get(authController.getRegister)
  .post(authController.postRegister)

router
  .route('/userprofile/:id')
  .get(authController.getUserProfile)
  .put(authController.userEdit)
  .delete(authController.destroyUser)

router.get('/logout', authController.getLogout)

module.exports = router
