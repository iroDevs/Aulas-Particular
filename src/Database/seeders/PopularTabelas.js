import DatabaseManager from "../Database";
import { faker } from '@faker-js/faker';

const db = new DatabaseManager().getDatabase();

// Função para popular usuários
function popularUsuarios(qtd = 10) {
  const insert = db.prepare(`
    INSERT INTO Usuarios (nome, idade, email, cep, rua, bairro, numero)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (let i = 0; i < qtd; i++) {
    insert.run(
      faker.person.fullName(),
      faker.number.int({ min: 18, max: 80 }),
      faker.internet.email(),
      faker.location.zipCode(),
      faker.location.street(),
      faker.location.city(),
      faker.location.buildingNumber()
    );
  }
}

// Função para popular produtos
function popularProdutos(qtd = 10) {
  const insert = db.prepare(`
    INSERT INTO Produtos (nome, quantidade, preco)
    VALUES (?, ?, ?)
  `);

  for (let i = 0; i < qtd; i++) {
    insert.run(
      faker.commerce.productName(),
      faker.number.int({ min: 1, max: 100 }),
      faker.number.float({ min: 10, max: 1000, fractionDigits: 2 })
    );
  }
}

// Função para popular vendas
function popularVendas(qtd = 20) {
  const getUsuarios = db.prepare('SELECT id FROM Usuarios').all();
  const getProdutos = db.prepare('SELECT id FROM Produtos').all();

  if (getUsuarios.length === 0 || getProdutos.length === 0) {
    console.log("É necessário ter usuários e produtos antes de adicionar vendas.");
    return;
  }

  const insert = db.prepare(`
    INSERT INTO Vendas (id_usuario, id_produto, quantidade, data_venda, status)
    VALUES (?, ?, ?, ?, ?)
  `);

  const statusList = ['ENTREGUE', 'A_CAMINHO', 'CANCELADO', 'PENDENTE'];

  for (let i = 0; i < qtd; i++) {
    const usuario = faker.helpers.arrayElement(getUsuarios);
    const produto = faker.helpers.arrayElement(getProdutos);
    insert.run(
      usuario.id,
      produto.id,
      faker.number.int({ min: 1, max: 5 }),
      faker.date.recent({ days: 30 }).toISOString(),
      faker.helpers.arrayElement(statusList)
    );
  }
}

// Executar populadores
popularUsuarios(100);
popularProdutos(100);
popularVendas(50);

console.log('Banco populado com dados falsos.');
