const jwt = require('jsonwebtoken')

function tokenBuilder(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  }
}


module.exports = {
  tokenBuilder,
}
