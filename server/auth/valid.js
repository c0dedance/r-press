const aircode = require('aircode')

const authTable = aircode.db.table('auth')

async function checkToken(app, token) {
  if (!app || !token) {
    return false
  }
  const appInfo = await authTable
    .where({
      app,
    })
    .findOne()

  if (!appInfo) {
    return false
  }
  return appInfo.accessToken === token
}

module.exports = async function ({ app }, context) {
  const token = context.headers?.authorization

  console.log('app', app)
  console.log('token', token)

  if (!token) {
    context.status(401)
    return {
      error: 'No token provided.',
    }
  }

  // Add your logic of checking if token is valid here (query from database or other services)
  const isValidToken = await checkToken(app, token)

  if (!isValidToken) {
    context.status(403)
    return {
      error: 'Forbidden access.',
    }
  }

  return {
    message: 'Authorized request!',
  }
}

module.exports.checkToken = checkToken
