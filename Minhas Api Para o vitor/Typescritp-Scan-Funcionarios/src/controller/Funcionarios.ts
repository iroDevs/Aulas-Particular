import { Funcionario } from "@prisma/client";
import Funcionarios from "../service/Funcionarios";
import { Response, Request } from "express";

async function getFuncionarios(req: Request, res: Response): Promise<Response> {
    try {
        const funcionarios = await Funcionarios.getFuncionarios();
        return res.status(200).json(funcionarios);
    }catch (erro){
        return res.status(400).json({message: erro});
    }
}

async function getFuncionarioById(req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        let funcionario = await Funcionarios.getFuncionarioById(id);
        if (funcionario === null) {
            return res.status(200).json({message: "Funcionário não encontrado"});
        }
        return res.status(200).json(funcionario);
    }catch (erro){
        return res.status(400).json({message: erro});
    }
}

async function createFuncionario(req: Request, res: Response): Promise<Response> {
    try {
        const funcionario = req.body;
        const novoFuncionario = await Funcionarios.createFuncionario(funcionario);
        return res.status(201).json(novoFuncionario);
    }catch (erro){
        return res.status(400).json({message: erro});
    }
}

async function updateFuncionario(req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        const funcionario = req.body;
        const funcionarioAtualizado = await Funcionarios.updateFuncionario(id, funcionario);
        return res.status(200).json(funcionarioAtualizado);
    }catch (erro){
        return res.status(400).json({message: erro});
    }
}

async function deleteFuncionario(req: Request, res: Response): Promise<Response> {
    try {
        const id = Number(req.params.id);
        await Funcionarios.deleteFuncionario(id);
        return res.status(204).send();
    }catch (erro){
        return res.status(400).json({message: erro});
    }
}

export default { getFuncionarios, getFuncionarioById, createFuncionario, updateFuncionario, deleteFuncionario };