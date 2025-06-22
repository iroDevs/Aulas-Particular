import Database from "better-sqlite3";
import DatabaseManager from "../Database/Database";
import IUserRepositories from "./interfaces/IUserRepositories";




export default class UserRepositories implements IUserRepositories {

    private db: Database.Database;

    constructor(db : Database.Database) {
        this.db = db
    }

    public async getUserById(id: string): Promise<any> {
        const stmt = this.db.prepare('SELECT * FROM Usuarios WHERE id = ?')
        const user = stmt.get(id)
        return user;
    }

    public async getUserByEmail(email: string): Promise<any> {
        const existingUser = this.db.prepare('SELECT * FROM Usuarios WHERE email = ?').get(email)
        return existingUser;
    }

    public async createUser(user: any): Promise<any> {
        const stmt = this.db.prepare('INSERT INTO Usuarios (nome, idade, email, cep, rua, bairro, numero) VALUES (?, ?, ?, ?, ?, ?, ?)')
        stmt.run(user.nome, user.idade, user.email, user.cep, user.rua, user.bairro, user.numero)
        return { success: true, user };
    }

    public async deleteUser(id: string): Promise<any> {
        const deleteSalesStmt = this.db.prepare('DELETE FROM Vendas WHERE id_usuario = ?')
        deleteSalesStmt.run(id)

        const stmt = this.db.prepare('DELETE FROM Usuarios WHERE id = ?')
        const result = stmt.run(id)
        return result.changes > 0 ? { success: true } : { success: false, message: 'User not found' };
    }

    public async getAllUsers(): Promise<any[]> {
        const stmt = this.db.prepare('SELECT * FROM Usuarios')
        const users = stmt.all();

        return users;
    }
}
