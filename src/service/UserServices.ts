import IUserRepositories from "../repositories/interfaces/IUserRepositories";
import UserNotFoundError from "../error/user-not-found";
import UserUserArlerdyExist from "../error/user-alerdy-exist";

export default class UserServices {
    private userRepository: IUserRepositories;

    constructor(userRepository: IUserRepositories) {
        this.userRepository = userRepository;
    }

    public async getUserById(id: string): Promise<any> {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new UserNotFoundError();
        }
        return user;
    }

    public async createUser(user: any): Promise<any> {
        const existingUser = await this.userRepository.getUserByEmail(user.email);
        if (existingUser) {
            throw new UserUserArlerdyExist();
        }
        return await this.userRepository.createUser(user);
    }

    public async deleteUser(id: string): Promise<any> {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new UserNotFoundError();
        }
        return await this.userRepository.deleteUser(id);
    }

    public async getAllUsers(): Promise<any[]> {
        const users = await this.userRepository.getAllUsers();
        return users;
    }
}