import express from 'express';
import RouteFuncionario from './Routes/RouteFuncionario';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/funcionarios', RouteFuncionario);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})