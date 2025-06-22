import { OutputUserDto, InputUserDto } from "../../dtos/UserDto";
import IUserRepositories from "../../repositories/interfaces/IUserRepositories";

export default class InMemoryUserData implements IUserRepositories {
    private users: OutputUserDto[]

    constructor(){
        this.users = [];
    }

    public async getUserById(id: string): Promise<OutputUserDto | null> {
        const user = this.users.find(user => user.id === id);
        return user ?? null;
    }
    public async getUserByEmail(email: string): Promise<OutputUserDto | null> {
        const existingUser = this.users.find(user => user.email === email);
        return existingUser ?? null;
    }
    public async createUser(user: InputUserDto): Promise<OutputUserDto> {
        const newUser: OutputUserDto = {
            ...user,
            id: String(this.users.length + 1), // Simulating an ID generation
        };

        this.users.push(newUser);
        return user;
    }
    public async deleteUser(id: string): Promise<{ success: boolean; message?: string; }> {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            return { success: false, message: 'User not found' };
        }
        this.users.splice(userIndex, 1);
        return { success: true };
    }
    public async getAllUsers(): Promise<OutputUserDto[] | null> {
        return this.users.length > 0 ? this.users : null;
    }

    public getUsers(): OutputUserDto[] {
        return this.users;
    }
    public setUsers(users: OutputUserDto[]): void {
        this.users = users;
    }

}