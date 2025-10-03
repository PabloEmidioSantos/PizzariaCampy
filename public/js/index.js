// index.js
import cardapio from './cardapio.js';

const grade = document.getElementById('grade-cardapio');
const carrinho = {};

// Mostrar itens no cardápio
function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}

function mostrarItens(itens) {
  grade.innerHTML = '';
  const mensagemVazio = document.getElementById('mensagem-vazio');

  if(!itens.length){
    mensagemVazio.style.display = 'block';
    return;
  } else {
    mensagemVazio.style.display = 'none';
  }

  itens.forEach(item => {
    const artigo = document.createElement('article');
    artigo.className = 'item-cardapio';
    artigo.innerHTML = `
      <div class="foto-item"><img src="${item.img}" alt="${item.nome}"></div>
      <div class="info-item">
        <h3>${item.nome}</h3>
        <p>${item.descricao}</p>
        <div class="preco-item">${formatarPreco(item.preco)}</div>
      </div>
      <div class="acoes-item">
        <button class="botao" onclick='adicionarCarrinho("${item.id}")'>Adicionar</button>
      </div>
    `;
    grade.appendChild(artigo);
  });
}

// Filtros
function aplicarFiltros() {
  const busca = document.getElementById('entrada-busca').value.toLowerCase();
  const categoriaSelecionada = document.querySelector('.categoria.ativa').dataset.categoria;

  let filtrado = cardapio.filter(item => categoriaSelecionada === 'todas' || item.categoria === categoriaSelecionada);
  if(busca) filtrado = filtrado.filter(item => (item.nome + item.descricao).toLowerCase().includes(busca));

  mostrarItens(filtrado);
}

// Eventos das categorias
document.querySelectorAll('.categoria').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.categoria').forEach(cat => cat.classList.remove('ativa'));
    c.classList.add('ativa');
    aplicarFiltros();
  });
});

document.getElementById('entrada-busca').addEventListener('input', aplicarFiltros);

// Carrinho
function adicionarCarrinho(id) {
  carrinho[id] = (carrinho[id] || 0) + 1;
  atualizarCarrinho();
  alert('Adicionado ao carrinho!');
}

function atualizarCarrinho() {
  const totalItens = Object.values(carrinho).reduce((acc, qtd) => acc + qtd, 0);
  const totalPreco = Object.entries(carrinho).reduce((acc, [id, qtd]) => acc + cardapio.find(i => i.id === id).preco * qtd, 0);

  document.getElementById('botao-carrinho').textContent = `Carrinho (${totalItens})`;
  document.getElementById('contador-itens').textContent = `${totalItens} itens`;
  document.getElementById('total-carrinho').textContent = formatarPreco(totalPreco);

  document.getElementById('barra-carrinho').style.display = totalItens ? 'flex' : 'none';
}

// Modal
const modal = document.getElementById('modal');
function abrirModal() { modal.style.display = 'flex'; document.getElementById('corpo-modal').innerHTML = '<p>Seu pedido está em andamento.</p>'; }
function fecharModal() { modal.style.display = 'none'; }

// Scroll
function rolarPara(id) { document.getElementById(id).scrollIntoView({behavior:'smooth'}); }

// Inicialização
mostrarItens(cardapio);

// Tornar funções globais para os botões inline
window.adicionarCarrinho = adicionarCarrinho;
window.abrirModal = abrirModal;
window.fecharModal = fecharModal;
window.rolarPara = rolarPara;
