const { Router } = require('express')
const { join } = require('path')
const { readdirSync } = require('fs')

const setupRoutes = (app) => {
  const router = Router()
  app.use('/api', router)
  readdirSync(join(__dirname, '../routes'))
    .map(async file => await require(`../routes/${file}`)(router))
}

module.exports = setupRoutes
