import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORTA = 8009;

// Configuração do Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../views')); // views fora do src

// Middleware para receber JSON e form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, '../public')));

// Rota Home - apenas redireciona para index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Rota Pagamento (exemplo)
app.get('/pagamento', (req, res) => {
  const carrinho = [
    { nome: 'Pizza Margherita', preco: 34.9 },
    { nome: 'Esfiha de Carne', preco: 9.9 }
  ];

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
  res.render('pagamento', { carrinho, total });
});

// Aqui você vai adicionar POST /processar-pagamento mais tarde

// Iniciar servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
