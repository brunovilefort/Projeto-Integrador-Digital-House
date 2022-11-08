
const dateFooter = new Date().getFullYear()

const navLinks = [
  { text: 'Agendamento', url: '/api/appointments' },
  { text: 'Serviços', url: '/services' }
]
let mes = new Date().getMonth()

switch (mes) {
  case 0:
    mes = 'Janeiro'
    break
  case 1:
    mes = 'Fevereiro'
    break
  case 2:
    mes = 'Março'
    break
  case 3:
    mes = 'Abril'
    break
  case 4:
    mes = 'Maio'
    break
  case 5:
    mes = 'Junho'
    break
  case 6:
    mes = 'Julho'
    break
  case 7:
    mes = 'Agosto'
    break
  case 8:
    mes = 'Setembro'
    break
  case 9:
    mes = 'Outubro'
    break
  case 10:
    mes = 'Novembro'
    break
  case 11:
    mes = 'Dezembro'
    break
  default:
    console.log('Mês inválido!')
    break
}

const ano = new Date().getFullYear()

const title = `${mes} ${ano}`

const socialMedia = [
  { type: '/facebook', icon: 'fa-brands fa-facebook' },
  { type: '/whatsapp', icon: 'fa-brands fa-whatsapp' },
  { type: 'instagram', icon: 'fa-brands fa-instagram' }
]

module.exports = { socialMedia, navLinks, dateFooter, title, mes }
