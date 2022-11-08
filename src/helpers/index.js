const { addDays, format, isSunday, differenceInDays } = require('date-fns')
const { segSex, sab } = require('./horarios')

// Retorna os dias disponíveis nas pŕoximas 3 semanas
const dataAtual = new Date()
dataAtual.toString()
const disponivel = []
let marcacoes = []
const dataMaxima = addDays(dataAtual, 21)

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
console.log(disponivel)
