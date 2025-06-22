import { describe, it, expect } from 'vitest';
import InMemoryUserData from '../in-memory-database/memory-user-data';
import UserServices from '../../service/UserServices';
import { before, beforeEach } from 'node:test';

const userData = new InMemoryUserData();
const sto = new UserServices(userData);


const listTestDefaultUsers = [
          {
            id: "1",
            nome: "Maria",
            idade: 25,
            email: "MARIA@maria.com",
            cep: "87654321",
            rua: "Rua B",
            bairro: "Bairro B",
            numero: "456",
          },
          {
            id: "2",
            nome: "João",
            idade: 30,
            email: "joao@example.com",
            cep: "12345678",
            rua: "Rua C",
            bairro: "Bairro C",
            numero: "789",
          },
          {
            id: "3",
            nome: "Ana",
            idade: 28,
            email: "ana.silva@example.com",
            cep: "23456789",
            rua: "Rua D",
            bairro: "Bairro D",
            numero: "101",
          },
        ];

describe('Teste do servicos usarios', () => {
    it('Deve criar um usuário com sucesso', async () => {
        const neDataString = new Date().toISOString();
        const user = {
            nome: 'João',
            idade: 30,
            email: `${neDataString}@gamil.com`,
            cep: '12345678',
            rua: 'Rua A',
            bairro: 'Bairro A',
            numero: '123'
        };
        const createUser = await sto.createUser(user);

        expect(createUser).toEqual({
            nome: 'João',
            idade: 30,
            email: `${neDataString}@gamil.com`,
            cep: '12345678',
            rua: 'Rua A',
            bairro: 'Bairro A',
            numero: '123'
        });

    })

    it('Deve buscar um usuário por ID', async () => {

        const users = [...listTestDefaultUsers];

        userData.setUsers(users)
        const user = await sto.getUserById("1");

        expect(user).toEqual({
            id: "1",
            nome: "Maria",
            idade: 25,
            email: "MARIA@maria.com",
            cep: "87654321",
            rua: "Rua B",
            bairro: "Bairro B",
            numero: "456",
          });
    })
    it('Deve ser possivel deleta um usuario', async () => {
        const users = [...listTestDefaultUsers];

        userData.setUsers(users)

        const deletedUser = await sto.deleteUser("1");
        expect(deletedUser).toEqual({ success: true });

        const allUsers = userData.getUsers();
        expect(allUsers.length).toBe(2);
    })
})