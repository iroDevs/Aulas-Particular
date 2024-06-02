import { Prisma,Funcionario } from "@prisma/client";
import prisma from "../database";
import  {FuncionarioType}  from "../types/funcionarioTypes";

async function createFuncionario(funcionario: FuncionarioType): Promise<Funcionario> {
  return await prisma.funcionario.create({
    data: {
        nome: funcionario.nome,
        email: funcionario.email,
        telefone: funcionario.telefone,
        cpf: funcionario.cpf,
        cep: funcionario.cep,
        cidade: funcionario.cidade,
        estado: funcionario.estado,
        cargo: funcionario.cargo,
        salario: funcionario.salario,
        curriculo: funcionario.curriculo,
        ensino_medio: funcionario.ensino_medio,
        ensino_superior: funcionario.ensino_superior,
        pos_graduacao: funcionario.pos_graduacao,
        mestrado: funcionario.mestrado,
        nota_teste: funcionario.nota_teste,
        nota_entrevista: funcionario.nota_entrevista,
        },
    });
}

async function getFuncionarios(): Promise<Funcionario[]> {
  return await prisma.funcionario.findMany();
}

async function getFuncionarioById(id: number): Promise<Funcionario | null>{
  return await prisma.funcionario.findUnique({
    where: {
      id: id,
    },
  });
}

async function updateFuncionario(id: number, funcionario: Funcionario): Promise<Funcionario | null> {
  return await prisma.funcionario.update({
    where: {
      id: id,
    },
    data: {
        nome: funcionario.nome,
        email: funcionario.email,
        telefone: funcionario.telefone,
        cpf: funcionario.cpf,
        cep: funcionario.cep,
        cidade: funcionario.cidade,
        estado: funcionario.estado,
        cargo: funcionario.cargo,
        salario: funcionario.salario,
        curriculo: funcionario.curriculo,
        ensino_medio: funcionario.ensino_medio,
        ensino_superior: funcionario.ensino_superior,
        pos_graduacao: funcionario.pos_graduacao,
        mestrado: funcionario.mestrado,
        nota_teste: funcionario.nota_teste,
        nota_entrevista: funcionario.nota_entrevista,
        },
    });
}

async function deleteFuncionario(id: number): Promise<Funcionario | null> {
  return await prisma.funcionario.delete({
    where: {
      id: id,
    },
  });
}

export default { createFuncionario, getFuncionarios, getFuncionarioById, updateFuncionario, deleteFuncionario };