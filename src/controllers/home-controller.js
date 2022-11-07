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

const homeController = {
  getServices: (req, res) => {
    res.render('services', {
      navLinks, socialMedia, dateFooter
    })
  },

  getHome: (req, res) => {
    res.render('home', {
      navLinks, socialMedia, dateFooter
    })
  }
}

module.exports = homeController
