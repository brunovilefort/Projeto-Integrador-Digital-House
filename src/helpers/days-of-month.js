const { startOfMonth, lastDayOfMonth, format } = require('date-fns')

const daysOfMonth = []

// Data Atual
const currentDate = new Date()

// Primeiro e último dia do mês
const firstDayOfMonthDate = startOfMonth(currentDate)
const firstDayOfMonthString = format(startOfMonth(currentDate), 'd')
const lastDayOfMonthString = format(lastDayOfMonth(currentDate), 'd')

// Cria todos os dias do mês
const createDays = () => {
  for (let i = firstDayOfMonthString; i <= lastDayOfMonthString; i++) {
    daysOfMonth.push(i.toString())
  }
}
createDays()

// Formata o dia da semana
const discoveryDayOfWeek = format(firstDayOfMonthDate, 'cccccc')

switch (discoveryDayOfWeek) {
  case 'Mo':
    for (let i = 0; i < 1; i++) {
      daysOfMonth.unshift('')
    }
    break
  case 'Tu':
    for (let i = 0; i < 2; i++) {
      daysOfMonth.unshift('')
    }
    break
  case 'We':
    for (let i = 0; i < 3; i++) {
      daysOfMonth.unshift('')
    }
    break
  case 'Th':
    for (let i = 0; i < 4; i++) {
      daysOfMonth.unshift('')
    }
    break
  case 'Fr':
    for (let i = 0; i < 5; i++) {
      daysOfMonth.unshift('')
    }
    break
  case 'Sa':
    for (let i = 0; i < 6; i++) {
      daysOfMonth.unshift('')
    }
    break
  default:
    console.log('Dia inválido!')
    break
}

module.exports = daysOfMonth
