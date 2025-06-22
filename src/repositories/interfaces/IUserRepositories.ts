import { InputUserDto, OutputUserDto } from "../../dtos/UserDto";

export default interface IUserRepositories {
    getUserById(id: string): Promise<OutputUserDto | null>;
    getUserByEmail(email: string): Promise<OutputUserDto | null>;
    createUser(user: InputUserDto): Promise<OutputUserDto>;
    deleteUser(id: string): Promise<{ success: boolean; message?: string }>;
    getAllUsers(): Promise<OutputUserDto[] | null>;
}