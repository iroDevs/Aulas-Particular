
import { FastifyRequest, FastifyReply } from 'fastify';
import UserServices from '../service/UserServices';
import UserRepositories from '../repositories/UserRepositories';
import DatabaseManager from '../Database/Database';
import FactoryUserService from '../factory/factory-user-service';

type UserCreatedRequest = {
    nome: string
    idade: number
    email: string
    cep: string
    rua: string
    bairro: string
    numero: string
}


async function getUserById(req: FastifyRequest, res: FastifyReply) {
    try {
        const userService = await FactoryUserService();
        const { id } = req.params as { id: string }

        const user = await userService.getUserById(id);
        return res.status(200).send(user);
    } catch (error: any) {
        return res.status(404).send({ error: error.message });
    }
}

async function createUser(req: FastifyRequest, res: FastifyReply) {
    try {
        const userService = await FactoryUserService();
        const userData: UserCreatedRequest = req.body as UserCreatedRequest;
        const user = await userService.createUser(userData);
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
