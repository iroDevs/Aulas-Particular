
import { FastifyRequest, FastifyReply } from 'fastify';
import FactoryUserService from '../factory/factory-user-service';
import { z } from 'zod';
import { InputUserDto } from '../dtos/UserDto';

const UserSchema = z.object({
    id: z.number().int().optional(),
    nome: z.string().min(1),
    idade: z.number().int().positive(),
    email: z.string().email(),
    cep: z.string().min(8).max(8),
    rua: z.string().min(1),
    bairro: z.string().min(1),
    numero: z.string().min(1)
});

type UserCreatedRequest = z.infer<typeof UserSchema>;


async function getUserById(req: FastifyRequest, res: FastifyReply) {
    try {
        const userService = await FactoryUserService();
        const { id } = req.params as { id: string }

        const user = await userService.getUserById(id);
        return res.status(200).send(user);
    } catch (error: unknown) {
        return res.status(404).send({ error });
    }
}

async function createUser(req: FastifyRequest, res: FastifyReply) {
    try {
        const userService = await FactoryUserService();
        const userData: InputUserDto = req.body as UserCreatedRequest;
        const parsedData = UserSchema.parse(userData) as InputUserDto;

        const user = await userService.createUser(parsedData);

        return res.status(201).send(user);
    } catch (error: any) {
        return res.status(400).send({ error: error.message });
    }
}


async function deleteUser(req: FastifyRequest, res: FastifyReply) {
    try {
        const userService = await FactoryUserService();
         const { id } = req.params as { id: string }
        const result = await userService.deleteUser(id);
        return res.status(204).send(result);
    } catch (error: any) {
        return res.status(404).send({ error: error.message });
    }
}

async function getAllUsers(req: FastifyRequest, res: FastifyReply) {
    try {
        const userService = await FactoryUserService();
        const users = await userService.getAllUsers();
        return res.status(200).send(users);
    } catch (error: any) {
        return res.status(500).send({ error: error.message });
    }
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
};
