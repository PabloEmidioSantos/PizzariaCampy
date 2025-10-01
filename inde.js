   const cardapio = [
      {id:'p1', categoria:'pizza', nome:'Pizza Margherita', descricao:'Molho de tomate, mussarela e manjericão', preco:34.9, img:'https://images.unsplash.com/photo-1601924582975-8d3b5a1ef0f3?q=80&w=800&auto=format'},
      {id:'h1', categoria:'hamburguer', nome:'Campy Burger', descricao:'Burger artesanal, queijo e molho especial', preco:28, img:'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format'},
      {id:'e1', categoria:'esfiha', nome:'Esfiha de Carne', descricao:'Carne temperada e cebola', preco:8.5, img:'https://images.unsplash.com/photo-1594007657010-31f0f3a8e1f4?q=80&w=800&auto=format'}
    ];

    const carrinho = {};

    const grade = document.getElementById('grade-cardapio');

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

    function aplicarFiltros() {
      const busca = document.getElementById('entrada-busca').value.toLowerCase();
      const categoriaSelecionada = document.querySelector('.categoria.ativa').dataset.categoria;

      let filtrado = cardapio.filter(item => categoriaSelecionada === 'todas' || item.categoria === categoriaSelecionada);
      if(busca) filtrado = filtrado.filter(item => (item.nome + item.descricao).toLowerCase().includes(busca));

      mostrarItens(filtrado);
    }

    document.querySelectorAll('.categoria').forEach(c => {
      c.addEventListener('click', () => {
        document.querySelectorAll('.categoria').forEach(cat => cat.classList.remove('ativa'));
        c.classList.add('ativa');
        aplicarFiltros();
      });
    });

    document.getElementById('entrada-busca').addEventListener('input', aplicarFiltros);

    function adicionarCarrinho(id) {
      carrinho[id] = (carrinho[id] || 0) + 1;
      atualizarCarrinho();
      alert('Adicionado ao carrinho!');
    }

    function atualizarCarrinho() {
      const totalItens = Object.values(carrinho).reduce((acc, qtd) => acc + qtd, 0);
      const totalPreco = Object.entries(carrinho).reduce((acc, [id, qtd]) => acc + cardapio.find(i => i.id === id).preco * qtd, 0);

      document.getElementById('botao-carrinho').textContent = Carrinho (${totalItens});
      document.getElementById('contador-itens').textContent = ${totalItens} itens;
      document.getElementById('total-carrinho').textContent = formatarPreco(totalPreco);

      document.getElementById('barra-carrinho').style.display = totalItens ? 'flex' : 'none';
    }

    const modal = document.getElementById('modal');

    function abrirModal() {
      modal.style.display = 'flex';
      document.getElementById('corpo-modal').innerHTML = '<p>Seu pedido está em andamento.</p>';
    }

    function fecharModal() {
      modal.style.display = 'none';
    }

    function rolarPara(id) {
      document.getElementById(id).scrollIntoView({behavior:'smooth'});
    }

    // Inicializa
    mostrarItens(cardapio);