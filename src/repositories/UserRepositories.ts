import Database from "better-sqlite3";
import DatabaseManager from "../Database/Database";
import IUserRepositories from "./interfaces/IUserRepositories";
import { InputUserDto, OutputUserDto } from "../dtos/UserDto";




export default class UserRepositories implements IUserRepositories {

    private db: Database.Database;

    constructor(db : Database.Database) {
        this.db = db
    }

    public async getUserById(id: string): Promise<OutputUserDto | null> {
        const stmt = this.db.prepare('SELECT * FROM Usuarios WHERE id = ?')
        const user = stmt.get(id) as OutputUserDto | null;
        return user ?? null;
    }

    public async getUserByEmail(email: string): Promise<OutputUserDto | null> {
        const existingUser = this.db.prepare('SELECT * FROM Usuarios WHERE email = ?').get(email) as OutputUserDto | null;
        return existingUser ?? null;
    }

    public async createUser(user: InputUserDto): Promise<OutputUserDto> {
        const stmt = this.db.prepare('INSERT INTO Usuarios (nome, idade, email, cep, rua, bairro, numero) VALUES (?, ?, ?, ?, ?, ?, ?)')
        stmt.run(user.nome, user.idade, user.email, user.cep, user.rua, user.bairro, user.numero)
        return user
    }

    public async deleteUser(id: string): Promise<{ success: boolean; message?: string }> {
        const deleteSalesStmt = this.db.prepare('DELETE FROM Vendas WHERE id_usuario = ?')
        deleteSalesStmt.run(id)

        const stmt = this.db.prepare('DELETE FROM Usuarios WHERE id = ?')
        const result = stmt.run(id)
        return result.changes > 0 ? { success: true } : { success: false, message: 'User not found' };
    }

    public async getAllUsers(): Promise<OutputUserDto[] | null> {
        const stmt = this.db.prepare('SELECT * FROM Usuarios')
        const users = stmt.all() as OutputUserDto[] | null;

        return users;
    }
}
