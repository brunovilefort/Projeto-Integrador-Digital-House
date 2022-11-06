const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE_NAME,
  process.env.MYSQL_USER,
  process.env.MYSQL_PWD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: process.env.MYSQL_PORT
  }
)

try {
  sequelize.authenticate()
  console.log('Connected!')
} catch (error) {
  console.error("Couldn't connect to database: ", error.message)
}

module.exports = sequelize
