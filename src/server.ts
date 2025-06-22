import Fastify from 'fastify';
import DatabaseManager from './Database/Database';
import cors from '@fastify/cors';
import UserRoutes from './routes/UserRoutes';
const app = Fastify({
    logger: true,
})

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: false,
});

app.register(UserRoutes);


function start(){
    app.listen({ port: 3000 }, () => {
       console.log(`Server is running on http://localhost:3000`)
    });

}

start();