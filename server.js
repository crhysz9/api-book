const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('VAI TOMANDO ( GO DRINK )!')
});

app.get('/turma', (req, res) => {
  res.send('VAI TOMAN NO CU TURMA!')
});

app.listen(port, () => {
  console.log(`A aplicação ta funcionando na porta ${port} pai, calma!`)
});
