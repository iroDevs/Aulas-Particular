#include <iostream>
#include <string>
#include "Produto.h"

using namespace std;

Produto::Produto(){
    this->id = 0;
    this->nome = "";
    this->preco = 0.0;
    this->custo = 0.0;
    this->estoque = 0;
}
Produto::Produto(string nome, double preco, double custo, int estoque,int id){
    setCusto(custo);
    setEstoque(estoque);
    setId(id);
    setNome(nome);
    setPreco(preco);
}
void Produto::setNome(string nome){
    this->nome = nome;
}
string Produto::getNome(){
    return this->nome;
}
void Produto::setPreco(double preco){
    this->preco = preco;
}
double Produto::getPreco(){
    return this->preco;
}
void Produto::setCusto(double custo){
    this->custo = custo;
}
double Produto::getCusto(){
    return this->custo;
}
void Produto::setEstoque(int estoque){
    this->estoque = estoque;
}
int Produto::getEstoque(){
    return this->estoque;
}
void Produto::setId(int id){
    this->id = id;
}
int Produto::getId(){
    return this->id;
}
Produto::~Produto(){
}

void Produto::copiar(Produto &outro){
    this->nome = outro.getNome();
    this->preco = outro.getPreco();
    this->custo = outro.getCusto();
    this->estoque = outro.getEstoque();
    this->id = outro.getId();
}
void Produto::preencher(){
    
    cout << "Digite o nome do produto: ";
    cin >> nome;
    cout << "Digite o preco do produto: ";
    cin >> preco;
    cout << "Digite o custo do produto: ";
    cin >> custo;
    cout << "Digite o estoque do produto: ";
    cin >> estoque;
    cout << "Digite o id do produto: ";
    cin >> id;
    
    setNome(nome);
    setPreco(preco);
    setCusto(custo);
    setEstoque(estoque);
    setId(id);
}