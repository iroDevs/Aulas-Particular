import IUserRepositories from "../repositories/interfaces/IUserRepositories";
import UserNotFoundError from "../error/user-not-found";
import UserUserArlerdyExist from "../error/user-alerdy-exist";
import { InputUserDto, OutputUserDto } from "../dtos/UserDto";

type DeletedUserResponse = {
    success: boolean;
    message?: string;
}

export default class UserServices {
    private userRepository: IUserRepositories;

    constructor(userRepository: IUserRepositories) {
        this.userRepository = userRepository;
    }

    public async getUserById(id: string): Promise<OutputUserDto> {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new UserNotFoundError();
        }
        return user;
    }

    public async createUser(user: InputUserDto): Promise<OutputUserDto> {

        const existingUser = await this.userRepository.getUserByEmail(user.email);
        if (existingUser) {
            throw new UserUserArlerdyExist();
        }
        return await this.userRepository.createUser(user);
    }

    public async deleteUser(id: string): Promise<DeletedUserResponse> {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new UserNotFoundError();
        }
        return await this.userRepository.deleteUser(id);
    }

    public async getAllUsers(): Promise<OutputUserDto[]> {
        const users = await this.userRepository.getAllUsers();

        if (!users || users.length === 0) {
            return [];
        }

        return users;
    }
}