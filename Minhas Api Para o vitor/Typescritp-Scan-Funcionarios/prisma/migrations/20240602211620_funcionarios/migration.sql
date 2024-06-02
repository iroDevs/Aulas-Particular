-- CreateTable
CREATE TABLE "funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "salario" DECIMAL(65,30) NOT NULL,
    "curriculo" TEXT NOT NULL,
    "ensino_medio" BOOLEAN NOT NULL,
    "ensino_superior" BOOLEAN NOT NULL,
    "pos_graduacao" BOOLEAN NOT NULL,
    "mestrado" BOOLEAN NOT NULL,
    "nota_teste" DECIMAL(65,30) NOT NULL,
    "nota_entrevista" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);
