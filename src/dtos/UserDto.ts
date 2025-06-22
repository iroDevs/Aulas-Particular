export interface InputUserDto {
    nome: string;
    idade: number;
    email: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
}

export interface OutputUserDto {
    id?: string;
    nome: string;
    idade: number;
    email: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
}
