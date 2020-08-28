const Router = require('express')
const router = Router()
const authController = require('../conrollers/authController')

router.post('/signup',authController.signup_post)

module.exports = router