require('dotenv/config')
const port = parseInt(process.env.PORT) || 3000
const id = Math.floor(Math.random() * 10000).toString()

const log = (msg) => {
  return console.log(id, msg)
}

// create an express app
const app = require('express')()
// listening to port
app.listen(port, (err) => {
  if (err) {
  }

  log(`app started on port ${port}`)
})

app.use('/die', (req, res) => {
  res.send(`${id}: dieing`)
  // cause an exception on main process
  setTimeout(() => { throw new Error('JUST DIE!!!')}, 0);
})

app.use('/', (req, res) => [
  res.send(`${id}: OK`)
])
