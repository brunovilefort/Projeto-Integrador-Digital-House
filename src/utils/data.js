
const dateFooter = new Date().getFullYear()

const navLinks = [
  { text: 'Agendamento', url: '/scheduling' },
  { text: 'Serviços', url: '/services' }
]

const socialMedia = [
  { type: '/facebook', icon: 'fa-brands fa-facebook' },
  { type: '/whatsapp', icon: 'fa-brands fa-whatsapp' },
  { type: 'instagram', icon: 'fa-brands fa-instagram' }
]

module.exports = { socialMedia, navLinks, dateFooter }
