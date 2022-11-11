const schedules = require('./schedules')

const { addDays, format, differenceInDays } = require('date-fns')

const available = []

// Data Atual
const currentDate = new Date()
// Dia atual + 14 dias
const deadLine = addDays(currentDate, 14)
const days = differenceInDays(deadLine, currentDate)

// Itera o array adicionando os horários aos dias
const period = currentDate => {
  for (let i = 0; i < days; i++) {
    const days = addDays(currentDate, i)
    const formattedDays = format(days, 'dd/MM/yyyy')
    available.push(formattedDays, schedules)
  }
}
period(currentDate)

// Retorna os dias no formato dd
const possibleDays = available
  .filter(field => typeof field === 'string')
  .map(dia => dia.substring(0, 2))

const hours = available.filter(day => typeof day === 'object')

module.exports = { available, possibleDays, hours }
