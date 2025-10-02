const express = require('express');
const path = require('path');

const app = express();
const PORTA = 7454;

// Middleware para ler JSON
app.use(express.json());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota de teste
app.get('/api', (req, res) => {
  res.json({ msg: 'Bem-vindo à Pizzaria Campy API!' });
});

// Iniciar servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
