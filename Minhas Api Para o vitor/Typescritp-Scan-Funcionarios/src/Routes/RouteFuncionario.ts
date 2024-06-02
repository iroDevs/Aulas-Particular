import express from 'express';
import Funcionarios from '../controller/Funcionarios';


const router = express.Router();


router.get('/', Funcionarios.getFuncionarios);
router.get('/:id', Funcionarios.getFuncionarioById);
router.post('/', Funcionarios.createFuncionario);
router.put('/:id', Funcionarios.updateFuncionario);
router.delete('/:id', Funcionarios.deleteFuncionario);

export default router;