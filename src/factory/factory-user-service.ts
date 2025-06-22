import DatabaseManager  from '../Database/Database';
import UserRepositories from '../repositories/UserRepositories';
import UserServices from '../service/UserServices';


export default async function createUserService() {
    const db = new DatabaseManager('sqlite').getDatabase();
    const userRepository = new UserRepositories(db);
    return new UserServices(userRepository);
}