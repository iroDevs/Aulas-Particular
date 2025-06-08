import Fastify from 'fastify';
import DatabaseManager from './Database/Database';
import cors from '@fastify/cors';

const app = Fastify({
    logger: true,
})

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: false,
});

const db = new DatabaseManager().getDatabase()

type UserCreatedRequest = {
    nome: string
    idade: number
    email: string
    cep: string
    rua: string
    bairro: string
    numero: string
}

// const users = await axios.get('http://localhost:3000/users')



//Primeira rota
app.get('/users', async (request, reply) => {
    const stmt = db.prepare('SELECT * FROM Usuarios')
    const users = stmt.all()

    return reply.status(200).send(users)
})

app.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: number }
    const stmt = db.prepare('SELECT * FROM Usuarios WHERE id = ?')
    const user = stmt.get(id)
    if (!user) {
        return reply.status(404).send({ error: 'Usuário não encontrado' })
    }
    return reply.status(200).send(user)
})

app.delete('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: number }
    console.log(id);
    // verifica se o usaurio tem vendas
    const deleteSalesStmt = db.prepare('DELETE FROM Vendas WHERE id_usuario = ?')
    deleteSalesStmt.run(id)

    const stmt = db.prepare('DELETE FROM Usuarios WHERE id = ?')
    const result = stmt.run(id)
    if (result.changes === 0) {
        return reply.status(404).send({ error: 'Usuário não encontrado' })
    }
    return reply.status(204).send()
})

app.post('/users', async (request, reply) => {
    const body = request.body as UserCreatedRequest
    const newUser = {
        nome: body.nome,
        idade: body.idade,
        email: body.email,
        cep: body.cep,
        rua: body.rua,
        bairro: body.bairro,
        numero: body.numero
    }
    // Verifica se o usuário já existe
    const existingUser = db.prepare('SELECT * FROM Usuarios WHERE email = ?').get(newUser.email)

    if (existingUser) {
        return reply.status(400).send({ error: 'Usuário já existe' })
    }

    const stmt = db.prepare('INSERT INTO Usuarios (nome, idade, email, cep, rua, bairro, numero) VALUES (?, ?, ?, ?, ?, ?, ?)')
    stmt.run(newUser.nome, newUser.idade, newUser.email, newUser.cep, newUser.rua, newUser.bairro, newUser.numero)

    return reply.status(201).send(newUser)

})


function start(){
    //banco de dados
    // const db = new PrismaClient()

    app.listen({ port: 3000 }, () => {
       console.log(`Server is running on http://localhost:3000`)
    });

}

start();