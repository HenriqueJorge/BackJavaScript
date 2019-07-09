const express = require('express')
const router = express.Router()
const livroRepo = require('../repository/livroRepository')

router.get('/', (req, res) => {
    res.json(livroRepo.todos())
})

router.get('/:id', (req,res) => {
    res.json(livroRepo.recuperar(parseInt(req.params.id)))
})

router.post('/', (req, res) => {
    livroRepo.adicionar(req.body)
    res.status(200)
})

router.put('/:id',(req,res) => {
    livroRepo.alterar(parseInt(req.params.id) , req.body)
    res.status(200)
})

router.delete('/:id' , (req,res) =>{
    livroRepo.remover(parseInt(req.params.id))
    res.status(200)
})

module.exports = router;