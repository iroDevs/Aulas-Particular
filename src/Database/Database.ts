import Database from 'better-sqlite3';


export default class DatabaseManager {
  private db: Database.Database;
  private type: string;

  constructor(type: 'sqlite' | 'mysql' | 'postgresql') {
    this.db = new Database("database.db");
    this.initialize();
    this.type = type || 'sqlite';
  }

  private initialize() {
    this.db.exec(`
        CREATE TABLE IF NOT EXISTS Usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            idade INTEGER,
            email TEXT UNIQUE,
            cep TEXT,
            rua TEXT,
            bairro TEXT,
            numero TEXT
        );

        CREATE TABLE IF NOT EXISTS Produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            quantidade INTEGER NOT NULL,
            preco REAL NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Vendas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            id_usuario INTEGER NOT NULL,
            id_produto INTEGER NOT NULL,
            quantidade INTEGER NOT NULL,
            data_venda TEXT NOT NULL,
            status TEXT NOT NULL,
            FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
            FOREIGN KEY (id_produto) REFERENCES Produtos(id)
        );
`);
  }

  public getDatabase(): Database.Database {
    if (this.type === 'sqlite') {
      return this.db;
    }
    throw new Error('Database type not supported yet. Only SQLite is implemented.');
  }


}