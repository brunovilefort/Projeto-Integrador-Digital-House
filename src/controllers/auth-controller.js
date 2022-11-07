const AuthController = {
  getLogin: (req, res) => {
    const navLinks = [
      { text: 'Agendamento', url: '/scheduling' },
      { text: 'Serviços', url: '/services' }
    ]
    res.render('login', {
      navLinks
    })
  }
}

module.exports = AuthController
