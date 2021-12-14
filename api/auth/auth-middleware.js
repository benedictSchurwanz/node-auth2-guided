const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

// AUTHENTICATION
const restricted = (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return next({ status: 401, message: 'we wants token' })
  }
  jwt.verify(token, JWT_SECRET, (err, decoded)=> {
    if (err) {
      return next({ status: 401, message: `your token sucks: ${err.message}` })
    }
    req.decodedJwt = decoded
    next()
  })
}

// AUTHORIZATION
const checkRole = role => (req, res, next) => {
  if (req.decodedJwt.role === role) {
    next()
  } else {
    next({ status: 403, message: 'you have no power here!'})
  }
}

module.exports = {
  restricted,
  checkRole,
}
