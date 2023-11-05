import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Aplicativo de Tabuada</h1>');
});

app.get('/tabuada/:numero', (req, res) => {
  const numero = parseInt(req.params.numero);
  if (isNaN(numero)) {
    res.status(400).send('Por favor, forneça um número válido.');
  } else {
    let tabuada = '';
    for (let i = 1; i <= 10; i++) {
      tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    }
    res.send(`<h2>Tabuada do ${numero}:</h2>${tabuada}`);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
