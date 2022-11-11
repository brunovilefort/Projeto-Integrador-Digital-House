const Client = require('../database')
const { navLinks, socialMedia, year } = require('../utils')

const bcrypt = require('bcryptjs')

const baseInfo = { navLinks, socialMedia, year }

const authController = {
  getLogin: (req, res) => res.render('login', baseInfo, { userLogged: req.session.user }),

  postLogin: async (req, res) => {
    const { email, password } = req.body
    const client = await Client.findOne({ where: { email } })
    if (!client) return res.render('login', baseInfo, { userLogged: req.session.user })
    const passwordMatch = bcrypt.compareSync(password, client.password)
    if (!passwordMatch) return res.render('login', baseInfo, { userLogged: req.session.user })
    req.session.user = client.user_id
    res.redirect('/api/auth/userprofile/' + req.session.user)
  },

  getUserProfile: async (req, res) => {
    const { id } = req.params
    const client = await Client.findOne({ where: { user_id: id } })
    res.render('userProfile', baseInfo, { userLogged: req.session.user, client })
  },

  getRegister: (req, res) => res.render('register', baseInfo, { userLogged: req.session.user }),

  postRegister: async (req, res) => {
    try {
      const { name, email, phone, password, passwordConfirmation } = req.body
      const validationFields = [name, email, phone, password, passwordConfirmation]
      for (const field of validationFields) {
        if (field === '' || field === null || field === undefined) return res.render('register', baseInfo, { userLogged: req.session.user })
      }
      if (password !== passwordConfirmation || password.length <= 4) return res.render('register', baseInfo)
      const checkClientExists = await Client.findOne({ where: { email } })
      if (checkClientExists) return res.render('register', baseInfo, { userLogged: req.session.user })
      await Client.create({ name, email, phone, password: bcrypt.hashSync(password, 10) })
      return await req.session.save(() => res.redirect('login'))
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
