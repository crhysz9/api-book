const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('API-BOOK TA NO AR!')
});

app.get('/books', (req, res) => {
  res.json([

    {id: 1, title: 'Harry Potter', author: 'Sei la pohakakkakak'},
    {id: 2, title: "The books on the table", author: 'MC LAN'}
    
  ])
});

app.listen(port, () => {
  console.log(`A aplicação ta funcionando na porta ${port} pai, calma!`)
});
