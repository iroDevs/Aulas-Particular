import Database from "better-sqlite3";

export default class database {
  private db: Database.Database;

  constructor() {
    const db = new Database("banco.sqlite");
    this.db = db;
    this.createTables();
  }

  private createTables() {
    this.db.exec(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    estoque INTEGER DEFAULT 0,
    categoria TEXT,
    criado_em TEXT DEFAULT (datetime('now', 'localtime'))
  );
`);
    this.db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha_hash TEXT NOT NULL,
    criado_em TEXT DEFAULT (datetime('now', 'localtime')),
    atualizado_em TEXT DEFAULT (datetime('now', 'localtime'))
  );
`);
  }
  public getDb() {
    return this.db;
  }
}
