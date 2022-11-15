const Client = require('../database/models/client-model')
const { socialMedia, dateFooter } = require('../utils/data')

const bcrypt = require('bcryptjs')

const baseInfo = { socialMedia }

class authController {
  async getLogin(req, res) {
    res.render('login', {
      socialMedia,
      dateFooter
    })
  }

  async postLogin(req, res) {
    const { email, password } = req.body
    const client = await Client.findOne({ where: { email } })
    if (!client) {
      return res.render('login', {
        socialMedia,
        dateFooter
      })
    }
    const passwordMatch = bcrypt.compareSync(password, client.password)
    if (!passwordMatch) {
      return res.render('login', {
        socialMedia,
        dateFooter
      })
    }
    req.session.user = client
    res.redirect('/api/auth/userprofile/' + client.user_id)
  }

  async getUserProfile({ id }, res) {
    const clientLogged = await Client.findOne({ where: { user_id: id } })
    res.render('userProfile', {
      socialMedia,
      dateFooter,
      clientLogged
    })
  }

  getRegister(req, res) {
    res.render('register', {
      socialMedia,
      dateFooter
    })
  }

  async postRegister(
    { name, email, phone, password, passwordConfirmation },
    res
  ) {
    try {
      const validationFields = [
        name,
        email,
        phone,
        password,
        passwordConfirmation
      ]
      for (const field of validationFields) {
        if (field === '' || field === null || field === undefined) {
          return res.render('register', {
            socialMedia,
            dateFooter
          })
        }
      }
      if (password !== passwordConfirmation || password.length <= 4) {
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
      return res.redirect('login')
    } catch (error) {
      console.log(error.message)
    }
  }

  async userEdit({ id, name, phone, password }, res) {
    await Client.update({ name, phone, password }, { where: { user_id: id } })
    res.redirect('/api/auth/userprofile/' + id)
  }

  async destroyUser({ id }, res) {
    await Client.destroy({ where: { user_id: id } })
    res.redirect('/api/auth/login')
  }

  getLogout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }
}

module.exports = authController
