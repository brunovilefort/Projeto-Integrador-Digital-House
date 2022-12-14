const router = require('express').Router()

const { homeController } = require('../controllers')

router.route('/services').get(homeController.getServices)

router.route('').get(homeController.getHome)

router.route('/products').get(homeController.getProducts)
module.exports = router
