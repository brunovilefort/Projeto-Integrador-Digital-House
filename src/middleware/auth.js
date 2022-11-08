const auth = (req, res, next) => {
  const userId = req.session.user_id
  if (!userId) {
    res.redirect('login')
  }
}

module.exports = auth
