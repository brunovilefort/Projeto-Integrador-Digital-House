const { UnauthorizedError, ForbiddenError, ServerError } = require('../errors')

const success = (data) => ({
  statusCode: 200,
  data
})

const badRequest = (error) => ({
  statusCode: 400,
  data: error
})

const unauthorized = () => ({
  statusCode: 401,
  data: new UnauthorizedError()
})

const forbidden = () => ({
  statusCode: 403,
  data: new ForbiddenError()
})

const serverError = (error) => ({
  statusCode: 500,
  data: new ServerError(error instanceof Error ? error : undefined)
})

module.exports = { success, badRequest, unauthorized, forbidden, serverError }
