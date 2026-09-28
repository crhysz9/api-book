const express = require('express');
const app = express()
const port = 3000

const books = [
  {id: 1, title: 'Harry Potter', author: 'Sei la pohakakkakak'},
  {id: 2, title: "The books on the table", author: 'MC LAN'},
  {id: 67, title: 'A AURA DO MENÓ', author: "AURA+EGO 67"}
]

app.get('/', (req, res) => {
  res.send('API-BOOK TA NO AR!')
});

app.post('/newbook', (req, res) => {
  const { titulo, autor } = req.body
  if (!titulo){
    return res.status(401).json({
      message: 'O TÍTULO É OBRIGATÓRIO!'
    })
  }
  const livroNovo = {
    id: books.length + 1,
    title: titulo,
    author: autor || "Autor Desconhecido"
  };

  books.push(livroNovo)
})

app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id)
  const book = books.find(b => b.id === bookId)
  if (!book){
    res.status(401).json({
      message: "Temos esse livro aí não pai..."
    })
  }
  res.json(book)
})

app.delete('/deletebook/:id', (req, res) =>{
  const bookId = parseInt(req.params.id)
  const book = books.findIndex(b => b.id === bookId)
  if (book === -1){
    res.status(404).json({
      message: "Temos esse livro aí não pai..."
    })
  }
  books.splice(book, 1);
  console.log(`O LIVRO ${book}, FOI REMOVÍDO.`)
  res.json({message: `O LIVRO ${book}, FOI DE ARRASTA PRA RIBA!`})
})

app.get('/books', (req, res) => {
  res.json(books)
});

app.listen(port, () => {
  console.log(`A aplicação ta funcionando pai, calma!\nPORTA: ${port}`)
});
