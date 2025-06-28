import fastify from "fastify";

const app = fastify({
    logger: true
})

app.get('/api', (req, res)=>{
    return res.status(200).send({message: "oi mundo"})
})





function start(){
    app.listen({port: 3001}, (error)=>{
        console.log('servidor rodando na porta 3001');
        if(error){
            console.log(error);
        }
    })
}
start()
