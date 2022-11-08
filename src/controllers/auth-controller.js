const Client = require('../database/models/client-model')
const { navLinks, socialMedia, dateFooter } = require('../utils/data')

const bcrypt = require('bcryptjs')

const authController = {
  getLogin: (req, res) => {
    res.render('login', {
      navLinks, socialMedia, dateFooter
    })
  },

  postLogin: async (req, res) => {
    const { email, password } = req.body
    const client = await Client.findOne({ where: { email } })
    if (!client) {
      req.flash('message', 'Usuário não encontrado, tente novamente')
      return res.render('register', {
        navLinks, socialMedia, dateFooter
      })
    }
    const passwordMatch = bcrypt.compareSync(password, client.password)
    if (!passwordMatch) {
      req.flash('message', 'Senha inválida, tente novamente')
      return res.render('register', {
        navLinks, socialMedia, dateFooter
      })
    }
    res.redirect('home')
  },

  getRegister: (req, res) => {
    res.render('register', {
      navLinks, socialMedia, dateFooter
    })
  },

  postRegister: async (req, res) => {
    try {
      const { name, email, phone, password, passwordConfirmation } = req.body
      const validationFields = [name, email, phone, password, passwordConfirmation]
      for (const field of validationFields) {
        if (field === '' || field === null || field === undefined) {
          req.flash('message', 'Erro de validação, tente novamente')
          return res.render('register', {
            navLinks, socialMedia, dateFooter
          })
        }
      }
      if (password !== passwordConfirmation || password.length <= 4) {
        req.flash('message', 'Senhas não conferem ou não possuem 4 digitos, tente novamente')
        return res.render('register', {
          navLinks, socialMedia, dateFooter
        })
      }
      const checkClientExists = await Client.findOne({ where: { email } })
      if (checkClientExists) {
        req.flash('message', 'E-mail em uso!')
        return res.render('register', {
          navLinks, socialMedia, dateFooter
        })
      }
      const salt = bcrypt.genSaltSync(12)
      const hashedPassword = bcrypt.hashSync(password, salt)
      const client = { name, email, phone, password: hashedPassword }
      const newClient = await Client.create(client)
      req.session.user_id = newClient.user_id
      return await req.session.save(() => {
        res.redirect('login')
      })
    } catch (error) {
      console.log(error)
    }
  },

  getLogout: async (req, res) => {
    req.session.destroy()
    res.redirect('login', {
      navLinks, socialMedia, dateFooter
    })
  }

}

module.exports = authController
