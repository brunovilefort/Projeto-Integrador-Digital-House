class ServerError extends Error {
  constructor (error) {
    super('Server failed. Try again soon')
    this.name = 'ServerError'
    this.stack = error.stack
  }
}

class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized')
    this.name = 'UnauthorizedError'
  }
}

class ForbiddenError extends Error {
  constructor () {
    super('Access denied')
    this.name = 'ForbiddenError'
  }
}

module.exports = { ForbiddenError, UnauthorizedError, ServerError }
