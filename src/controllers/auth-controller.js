const Client = require('../database/models/client-model')
const { socialMedia, dateFooter } = require('../utils/data')

const bcrypt = require('bcryptjs')

const baseInfo = { socialMedia }

const authController = {
  getLogin: (req, res) => {
    res.render('login', {
      socialMedia,
      dateFooter
    })
  },
  postLogin: async (req, res) => {
    const { email, password } = req.body
    const client = await Client.findOne({ where: { email } })
    if (!client) {
      req.flash('message', 'Usuário não encontrado, tente novamente')
      return res.render('login', {
        socialMedia,
        dateFooter
      })
    }
    const passwordMatch = bcrypt.compareSync(password, client.password)
    if (!passwordMatch) {
      req.flash('message', 'Senha inválida, tente novamente')
      return res.render('login', {
        socialMedia,
        dateFooter
      })
    }
    req.session.user = client
    res.redirect('/api/auth/userprofile/' + client.user_id)
  },

  getUserProfile: async (req, res) => {
    const { id } = req.params
    const clientLogged = await Client.findOne({ where: { user_id: id } })
    res.render('userProfile', {
      socialMedia,
      dateFooter,
      clientLogged
    })
  },

  getRegister: (req, res) => {
    res.render('register', {
      socialMedia,
      dateFooter
    })
  },

  postRegister: async (req, res) => {
    try {
      const { name, email, phone, password, passwordConfirmation } = req.body
      const validationFields = [
        name,
        email,
        phone,
        password,
        passwordConfirmation
      ]
      for (const field of validationFields) {
        if (field === '' || field === null || field === undefined) {
          req.flash('message', 'Erro de validação, tente novamente')
          return res.render('register', {
            socialMedia,
            dateFooter
          })
        }
      }
      if (password !== passwordConfirmation || password.length <= 4) {
        req.flash(
          'message',
          'Senhas não conferem ou não possuem 4 digitos, tente novamente'
        )
        return res.render('register', {
          socialMedia,
          dateFooter
        })
      }
      if (password !== passwordConfirmation || password.length <= 4) {
        return res.render('register', baseInfo)
      }
      const checkClientExists = await Client.findOne({ where: { email } })
      if (checkClientExists) {
        req.flash('message', 'E-mail em uso!')
        return res.render('register', {
          socialMedia,
          dateFooter
        })
      }

      await Client.create({
        name,
        email,
        phone,
        password: bcrypt.hashSync(password, 10)
      })
      return await req.session.save(() => {
        res.redirect('login')
      })
    } catch (error) {
      console.log(error.message)
    }
  },

  userEdit: async (req, res) => {
    const { id } = req.params
    const { name, phone, password } = req.body
    await Client.update({ name, phone, password }, { where: { user_id: id } })
    res.redirect('/api/auth/userprofile/' + id)
  },

  destroyUser: async (req, res) => {
    const { id } = req.params
    await Client.destroy({ where: { user_id: id } })
    res.redirect('/api/auth/login')
  },

  getLogout: (req, res) => {
    req.session.destroy()
    res.redirect('/')
  }
}

module.exports = authController
