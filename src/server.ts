import Fastify from 'fastify';

const app = Fastify({
    logger: true,
})

const Users = [
    {
        id: 1,
        name: 'Pedro',
    },
    {
        id: 2,
        name: 'Lucas',
    },
    {
        id: 3,
        name: 'João',
    },
]


type UserBodyCreate = {
    name: string;
}

// const users = await axios.get('http://localhost:3000/users')

//Primeira rota
app.get('/users', async (request, reply) => {
        return reply.status(200).send(Users)
})


app.get('/users/:id', async (request, reply) => {
    const { id } = request.params as { id: string }
    const user = Users.find(user => user.id === Number(id))
    if (!user) {
        return reply.status(404).send({ message: 'User not found' })
    }
    return reply.status(200).send(user)
})

app.post('/users', async (request, reply) => {
    const body = request.body as UserBodyCreate
    const newUser = {
        id: Users.length + 1,
        name: body.name,
    }
    Users.push(newUser)
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