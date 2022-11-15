const router = require('express').Router()

const AuthController = require('../controllers/auth-controller')

router
  .route('/login')
  .get(AuthController.getLogin)
  .post(AuthController.postLogin)

router
  .route('/register')
  .get(AuthController.getRegister)
  .post(AuthController.postRegister)

router
  .route('/userprofile/:id')
  .get(AuthController.getUser)
  .put(AuthController.userEdit)
  .delete(AuthController.userDestroy)

router.get('/logout', AuthController.getLogout)

module.exports = router
