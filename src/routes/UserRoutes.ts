import { FastifyInstance } from 'fastify';
import UsuarioController from '../controller/UserController';


async function UserRoute(router : FastifyInstance) {
    router.get('/users', UsuarioController.getAllUsers);
    router.get('/users/:id', UsuarioController.getUserById);
    router.post('/users', UsuarioController.createUser);
    router.delete('/users/:id', UsuarioController.deleteUser);
}

export default UserRoute;
