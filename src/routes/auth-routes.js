module.exports = router => {
  router.get('/login', (req, res) => res.json({ message: 'success login!' }))
  router.post('/login', (req, res) => res.json({ message: 'success login!' }))
  router.get('/register', (req, res) => res.json({ message: 'success register!' }))
  router.post('/register', (req, res) => res.json({ message: 'success register!' }))
  router.get('/logout', (req, res) => res.json({ message: 'success logout!' }))
}