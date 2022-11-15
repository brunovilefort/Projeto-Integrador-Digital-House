const Client = require('../database/models/client-model')
const { socialMedia, dateFooter } = require('../helpers/data')

const bcrypt = require('bcryptjs')

class AuthController {
  constructor(baseInfo) { this.baseInfo = { socialMedia } }

  getLogin(req, res) {
    return res.render('login', { socialMedia, dateFooter })
  }

  getRegister(req, res) {
    return res.render('register', { socialMedia, dateFooter })
  }

  async getUser({ id }, res) {
    try {
      const clientLogged = await Client.findOne({ where: { user_id: id } })
      return res.render('userProfile', { socialMedia, dateFooter, clientLogged })
    } catch (error) { console.log(`Erro no método getUser: ${error.message}`) }
  }

  async postLogin(req, res) {
    try {
      const { email, password } = req.body
      const client = await Client.findOne({ where: { email } })
      if (!client) return res.render('login', { socialMedia, dateFooter })
      const passwordMatch = bcrypt.compareSync(password, client.password)
      if (!passwordMatch) return res.render('login', { socialMedia, dateFooter })
      req.session.user = client
      return res.redirect('/api/auth/userprofile/' + client.user_id)
    } catch (error) { console.log(`Erro no método postLogin: ${error.message}`) }
  }

  async postRegister(req, res) {
    try {
      const { name, email, phone, password, passwordConfirmation } = req.body
      const validationFields = [name, email, phone, password, passwordConfirmation]
      for (const field of validationFields) {
        if (!field || field === null || field === undefined) return res.render('register', { socialMedia, dateFooter })
      }
      if (password !== passwordConfirmation || password.length <= 4) return res.render('register', { socialMedia, dateFooter })
      if (password !== passwordConfirmation || password.length <= 4) return res.render('register', this.baseInfo)
      const checkClientExists = await Client.findOne({ where: { email } })
      if (checkClientExists) return res.render('register', { socialMedia, dateFooter })
      await Client.create({ name, email, phone, password: bcrypt.hashSync(password, 10) })
      return res.redirect('/api/auth/login')
    } catch (error) { console.log(`erro no método postRegister: ${error.message}`) }
  }

  async userEdit({ id, name, phone, password }, res) {
    return Client.update({ name, phone, password }, { where: { user_id: id } })
      .then(() => res.redirect('/api/auth/userprofile/' + id))
      .catch(error => console.log(`erro no método userEdit: ${error.message}`))
  }

  async userDestroy({ id }, res) {
    return Client.destroy({ where: { user_id: id } })
      .then(() => res.redirect('/api/auth/login'))
      .catch(error => console.log(`erro no método userDestroy: ${error.message}`))
  }

  getLogout(req, res) {
    return req.session.destroy().then(() => res.redirect('/'))
  }
}

module.exports = new AuthController()
