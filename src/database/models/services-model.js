const { DataTypes } = require('sequelize')

const db = require('../conn')
const Appointments = require('./appointments-model')

const Service = db.define('Service', {
  service_id: {
    type: DataTypes.INTEGER,
    require: true,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    require: true
  },
  execution_time: {
    type: DataTypes.DATE,
    require: true
  },
  value: {
    type: DataTypes.STRING,
    require: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
})

Service.hasMany(Appointments)
Appointments.belongsTo(Service)

module.exports = Service
