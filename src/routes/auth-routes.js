const router = require('express').Router()

const authController = require('../controllers/auth-controller')

router
  .route('/login')
  .get(authController.getLogin)
  .post((req, res) => res.json({ message: 'success login!' }))

router
  .route('/register')
  .get(authController.getRegister)
  .post(authController.postRegister)

router.get('/logout', authController.getLogout)

module.exports = router
