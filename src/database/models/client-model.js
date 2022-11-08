const { DataTypes } = require('sequelize')

const db = require('../conn')
const Appointments = require('./appointments-model')

const Client = db.define('Client', {
  user_id: {
    type: DataTypes.INTEGER,
    require: true,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    require: true
  },
  email: {
    type: DataTypes.STRING,
    require: true
  },
  phone: {
    type: DataTypes.STRING,
    require: true
  },
  password: {
    type: DataTypes.STRING,
    require: true
  }
})

Client.hasMany(Appointments)
Appointments.belongsTo(Client)

module.exports = Client
