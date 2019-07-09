const livro = []
let proxId = 0;

const getLivroIdx = id => livro.map(l => l.id).indexOf(id)

const LivroRepository = {
    adicionar: (livro) => {
        nLivro = {id:proxId++,
        nome: livro.nome,
        autor: livro.autor}
        livro.push(nLivro)
        return nLivro
    },
    recuperar: id => livros[getLivroIdx(id)],
    alterar: (id,novo) => {livros[getLivroIdx(id)] = novo 
            novo.id = id
            return novo},
    remover: id => livro.splice(getLivroIdx(id), 1),
    todos:() =>livros
}

module.exports = LivroRepository;