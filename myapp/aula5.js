const express = require('express')
const app = express()
const port = 8080

let entidade = 'usuario'

// utiliza nome da entidade como path
app.get(`/usuario`, (req, res) => {
  res.send(`Rota aticada com GET e recurso usuario: valores de usuario devem ser retornados`)
})

app.get(`/tarefa`, (req, res) => {
    res.send(`Rota aticada com GET e recurso tarefa: valores de tarefa devem ser retornados`)
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
