const porta = 3000
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

app.get('/' ,(req, res) => {res.send('Rota principal')})

app.use('/livros', require('.controller/livros'))

app.get('*', (req,res) => {res.send('404')})

app.listen(porta, () => {console.log(`Porta ${porta}`)})