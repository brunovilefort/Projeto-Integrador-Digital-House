const { addDays, format, isSunday, differenceInDays, startOfMonth, lastDayOfMonth } = require('date-fns')
const { segSex, sab } = require('./horarios')

// Retorna os dias disponíveis nas pŕoximas 3 semanas
const dataAtual = new Date()
dataAtual.toString()
const disponivel = []
let marcacoes = []
const sundayDays = []
const dataMaxima = addDays(dataAtual, 14)

const periodo = (dataAtual, dataMaxima) => {
  const periodoDias = differenceInDays(dataMaxima, dataAtual)
  for (let i = 0; i < periodoDias; i++) {
    const dias = addDays(dataAtual, i)
    const diasFormatados = format(dias, 'dd/MM/yyyy')
    const diaSemana = dias.getDay()
    diaSemana !== 6 ? marcacoes = segSex : marcacoes = sab
    disponivel.push(diasFormatados, marcacoes)

    if (isSunday(dias)) {
      disponivel.pop()
      disponivel.pop()
    }
  }
}
periodo(dataAtual, dataMaxima)
// eslint-disable-next-line prefer-const
let diasPossiveis = disponivel
  .filter(field => typeof field === 'string')
  .map(dia => dia.substring(0, 2))

const start = startOfMonth(dataAtual)
const star1 = format(start, 'd')
const end = lastDayOfMonth(dataAtual)
const end1 = format(end, 'd')

const diasMes = []

const criarDiasMes = () => {
  for (let i = star1; i <= end1; i++) {
    diasMes.push(i.toString())
  }
}
criarDiasMes()

const descobrirDiaSemana = format(start, 'cccccc')

switch (descobrirDiaSemana) {
  case 'Mo':
    for (let i = 0; i < 1; i++) {
      diasMes.unshift('')
    }
    break
  case 'Tu':
    for (let i = 0; i < 2; i++) {
      diasMes.unshift('')
    }
    break
  case 'We':
    for (let i = 0; i < 3; i++) {
      diasMes.unshift('')
    }
    break
  case 'Th':
    for (let i = 0; i < 4; i++) {
      diasMes.unshift('')
    }
    break
  case 'Fr':
    for (let i = 0; i < 5; i++) {
      diasMes.unshift('')
    }
    break
  case 'Sa':
    for (let i = 0; i < 6; i++) {
      diasMes.unshift('')
    }
    break
  default:
    console.log('Dia inválido!')
    break
}

console.log(sundayDays)

module.exports = { disponivel, diasPossiveis, diasMes }
