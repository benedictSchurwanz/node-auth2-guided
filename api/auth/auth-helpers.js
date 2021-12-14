const jwt = require('jsonwebtoken')
const {} = require('../../')

function tokenBuilder(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  }
  const options = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, ? , options)
}


module.exports = {
  tokenBuilder,
}
