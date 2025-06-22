
export default interface IUserRepositories {
    getUserById(id: string): Promise<any>;
    getUserByEmail(email: string): Promise<any>;
    createUser(user: any): Promise<any>;
    deleteUser(id: string): Promise<any>;
    getAllUsers(): Promise<any[]>;
}