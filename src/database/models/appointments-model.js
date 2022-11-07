const { DataTypes } = require('sequelize')

const db = require('../conn')

const Appointments = db.define('Appointments', {
  appointments_id: {
    type: DataTypes.INTEGER,
    require: true,
    autoIncrement: true,
    primaryKey: true
  },
  appointment_date: {
    type: DataTypes.DATE,
    require: true
  },
  appointment_time: {
    type: DataTypes.DATE,
    require: true
  },
  client_id: {
    type: DataTypes.INTEGER,
    require: true
  },
  service_id: {
    type: DataTypes.INTEGER,
    require: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

module.exports = Appointments
