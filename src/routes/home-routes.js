const router = require('express').Router()

const homeController = require('../controllers/home-controller')

router
  .route('/services')
  .get(homeController.getServices)

router
  .route('/')
  .get(homeController.getHome)

module.exports = router
