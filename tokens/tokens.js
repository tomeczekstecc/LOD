const jwt = require('jsonwebtoken');

const createAccessToken = (userId, userType) => {

  return jwt.sign({ userId, userType }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '30m',
  });
};

const createRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1d',
  });
};

const sendAccessToken = (req, res, accessToken) => {

  res.send({
    accessToken,
    email: req.body.email,
  });
};

const sendRefreshToken = (res, refreshToken) => {

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    path: '/api/auth/refresh_token',
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
};
