// cardapios.js
const cardapio = [
  // ---------------- PIZZAS ----------------
  { id: 'p1', categoria: 'pizza', nome: 'Margherita', descricao: 'Molho de tomate, mussarela e manjericão', preco: 34.90, img: '/img/pizza-margherita.png' },


  { id: 'p2', categoria: 'pizza', nome: 'Calabresa', descricao: 'Molho de tomate, mussarela e calabresa fatiada', preco: 39.90, img: '/img/pizza-calabresa.png' },


  { id: 'p3', categoria: 'pizza', nome: 'Frango com Catupiry', descricao: 'Frango desfiado, catupiry e cebola', preco: 41.90, img: '/img/pizza-frango.png' },


  { id: 'p4', categoria: 'pizza', nome: 'Quatro Queijos', descricao: 'Mussarela, parmesão, provolone e gorgonzola', preco: 44.90, img: '/img/pizza-4queijos.png' },


  { id: 'p5', categoria: 'pizza', nome: 'Portuguesa', descricao: 'Presunto, ovos, cebola, azeitonas e ervilha', preco: 42.90, img: '/img/pizza-portuguesa.png' },


  { id: 'p6', categoria: 'pizza', nome: 'Pepperoni', descricao: 'Molho de tomate, mussarela e pepperoni', preco: 43.90, img: '/img/pizza-pepperoni.png' },


  { id: 'p7', categoria: 'pizza', nome: 'Vegetariana', descricao: 'Molho de tomate, mussarela, tomate, cebola, pimentão e azeitonas', preco: 39.50, img: '/img/pizza-vegetariana.png' },


  { id: 'p8', categoria: 'pizza', nome: 'Atum', descricao: 'Molho de tomate, mussarela, atum e cebola', preco: 41.50, img: '/img/pizza-atum.png' },


  { id: 'p9', categoria: 'pizza', nome: 'Napolitana', descricao: 'Molho de tomate, mussarela, rodelas de tomate e manjericão', preco: 40.90, img: '/img/pizza-napolitana.png' },


  { id: 'p10', categoria: 'pizza', nome: 'Hawaiana', descricao: 'Molho de tomate, mussarela, presunto e abacaxi', preco: 42.90, img: '/img/pizza-hawaiana.png' },

  // ---------------- HAMBÚRGUERES ----------------
  { id: 'h1', categoria: 'hamburguer', nome: 'Cheeseburger', descricao: 'Carne, queijo, alface, tomate e molho especial', preco: 22.50, img: '/img/hamburguer-cheese.png' },
  { id: 'h2', categoria: 'hamburguer', nome: 'X-Bacon', descricao: 'Carne, queijo, bacon crocante e molho', preco: 24.50, img: '/img/hamburguer-bacon.png' },


  { id: 'h3', categoria: 'hamburguer', nome: 'Veggie', descricao: 'Hambúrguer vegetal, alface, tomate e molho vegano', preco: 23.00, img: '/img/hamburguer-veggie.png' },


  { id: 'h4', categoria: 'hamburguer', nome: 'Duplo', descricao: 'Dois hambúrgueres, queijo, cebola caramelizada', preco: 28.00, img: '/img/hamburguer-duplo.png' },


  { id: 'h5', categoria: 'hamburguer', nome: 'Chicken Burger', descricao: 'Frango empanado, alface, tomate e maionese', preco: 25.50, img: '/img/hamburguer-frango.png' },


  { id: 'h6', categoria: 'hamburguer', nome: 'Triplo Bacon', descricao: 'Três hambúrgueres, bacon, queijo e molho especial', preco: 32.90, img: '/img/hamburguer-triplo.png' },


  { id: 'h7', categoria: 'hamburguer', nome: 'Cheddar Melt', descricao: 'Carne, cheddar derretido e cebola caramelizada', preco: 26.50, img: '/img/hamburguer-cheddar.png' },


  { id: 'h8', categoria: 'hamburguer', nome: 'BBQ Burger', descricao: 'Carne, molho barbecue, queijo e bacon', preco: 27.50, img: '/img/hamburguer-bbq.png' },



  // ---------------- ESFIHAS ----------------
  { id: 'e1', categoria: 'esfiha', nome: 'Carne', descricao: 'Carne moída temperada', preco: 7.50, img: '/img/esfiha-carne.png' },


  { id: 'e2', categoria: 'esfiha', nome: 'Queijo', descricao: 'Queijo mussarela e temperos', preco: 7.50, img: '/img/esfiha-queijo.png' },


  { id: 'e3', categoria: 'esfiha', nome: 'Frango', descricao: 'Frango desfiado e temperos', preco: 7.50, img: '/img/esfiha-frango.png' },


  { id: 'e4', categoria: 'esfiha', nome: 'Calabresa', descricao: 'Calabresa fatiada e cebola', preco: 7.50, img: '/img/esfiha-calabresa.png' },


  { id: 'e5', categoria: 'esfiha', nome: 'Pizza', descricao: 'Molho de tomate, mussarela e orégano', preco: 7.50, img: '/img/esfiha-pizza.png' },


  { id: 'e6', categoria: 'esfiha', nome: 'Vegetariana', descricao: 'Tomate, cebola, pimentão e azeitonas', preco: 7.50, img: '/img/esfiha-vegetariana.png' },

  // ---------------- BEBIDAS ----------------
  { id: 'b1', categoria: 'bebida', nome: 'Refrigerante 350ml', descricao: 'Coca-Cola, Guaraná ou Fanta', preco: 5.00, img: '/img/refri-350ml.png' },

  
  { id: 'b2', categoria: 'bebida', nome: 'Refrigerante 600ml', descricao: 'Coca-Cola, Guaraná ou Fanta', preco: 7.50, img: '/img/refri-600ml.png' },

  
  { id: 'b3', categoria: 'bebida', nome: 'Suco Natural', descricao: 'Laranja ou limão', preco: 6.50, img: '/img/suco.png' },

  
  { id: 'b4', categoria: 'bebida', nome: 'Água Mineral 500ml', descricao: 'Sem gás', preco: 4.00, img: '/img/agua.png' },

  
  { id: 'b5', categoria: 'bebida', nome: 'Água com Gás 500ml', descricao: 'Gaseificada', preco: 4.50, img: '/img/agua-gas.png' }
];

export default cardapio;

