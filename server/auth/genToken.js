const aircode = require('aircode')

const crypto = require('crypto')

const authTable = aircode.db.table('auth')

function generateAccessToken() {
  return crypto.randomBytes(8).toString('hex')
}

module.exports = async function ({ app }, context) {
  const token = generateAccessToken()
  console.log('Generated Token: ', token)

  const existed = await authTable
    .where({
      app,
    })
    .findOne()

  if (existed) {
    context.status(500)
    return {
      message: 'already exists.',
    }
  }

  await authTable.save({
    app,
    accessToken: token,
  })

  return {
    message: 'token has been generated',
    data: token,
  }
}
