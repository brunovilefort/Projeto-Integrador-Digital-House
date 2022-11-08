const auth = (req, res, next) => {
  const userId = req.session.user
  if (!userId) {
    res.redirect('login')
  }
}

module.exports = auth
