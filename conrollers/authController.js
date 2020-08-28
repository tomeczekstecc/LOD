const User = require('../models/User')


const signup_post = async (req, res) => {
  console.log(req.body);
  // const { email, password } = req.body
  // try {
  //   const user = await User.create({
  //     email,
  //     password
  //   })
  //   console.log(user);
  //   res.status(200).json({ message: 'User created', user })
  // } catch (err) {
  //   console.log(err.message);
  // }
}

module.exports = {
  signup_post
}