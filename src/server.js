require('dotenv').config()
const { conn } = require('./database')
const { app } = require('./config/app')
const port = process.env.PORT ?? 3000

conn
  .sync()
  .then(
    app.listen(port, () => console.log(`🏃 Server running at http://localhost:${port}`))
  )
  .catch(error => console.log(error.message))
