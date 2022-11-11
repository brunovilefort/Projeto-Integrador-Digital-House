const navLinks = [
  { text: 'Agendamento', url: '/api/appointments' },
  { text: 'Serviços', url: '/services' }
]

let month = new Date().getMonth()

switch (month) {
  case 0:
    month = 'Janeiro'
    break
  case 1:
    month = 'Fevereiro'
    break
  case 2:
    month = 'Março'
    break
  case 3:
    month = 'Abril'
    break
  case 4:
    month = 'Maio'
    break
  case 5:
    month = 'Junho'
    break
  case 6:
    month = 'Julho'
    break
  case 7:
    month = 'Agosto'
    break
  case 8:
    month = 'Setembro'
    break
  case 9:
    month = 'Outubro'
    break
  case 10:
    month = 'Novembro'
    break
  case 11:
    month = 'Dezembro'
    break
  default:
    console.log('Mês inválido!')
    break
}

const year = new Date().getFullYear()

const title = `${month} ${year}`

const socialMedia = [
  { type: '/facebook', icon: 'fa-brands fa-facebook' },
  { type: '/whatsapp', icon: 'fa-brands fa-whatsapp' },
  { type: 'instagram', icon: 'fa-brands fa-instagram' }
]

module.exports = { socialMedia, navLinks, title, month, year }
