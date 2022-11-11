const userLogged = (req, res, next) => {
  res.locals.hasUserLogged = false

  if (req.session.user) {
    res.locals.hasUserLogged = true
  }

  next()
}

module.exports = userLogged
