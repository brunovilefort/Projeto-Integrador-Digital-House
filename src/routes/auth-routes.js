const router = require('express').Router()

const authController = require('../controllers/auth-controller')

router
  .route('/login')
  .get(authController.getLogin)
  .post((req, res) => res.json({ message: 'success login!' }))

router
  .route('/register')
  .get(authController.getRegister)
  .post((req, res) => res.json({ message: 'success register!' }))

router.get('/logout', (req, res) => res.json({ message: 'success logout!' }))

module.exports = router
