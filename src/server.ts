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


// const users = await axios.get('http://localhost:3000/users')

//Primeira rota
app.get('/users', async (request, reply) => {
    return reply.status(200).send(Users)
})

app.post('/users', async (request, reply) => {
    const body = request.body as { name: string }
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