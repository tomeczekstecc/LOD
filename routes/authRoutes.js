const Router = require('express')
const router = Router()
const { signup_post, all_users_get, login_post } = require('../conrollers/authController');

router.post('/signup',signup_post)
router.get('/getallusers', all_users_get);
router.get('/login', login_post);

module.exports = router