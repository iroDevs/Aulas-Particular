#include <string.h>
#include <iostream>

using namespace std;

#ifndef PRODUTO_H
#define	PRODUTO_H

class Produto {
private:
    int id;
    string nome;
    double custo;
    double preco;   
    int estoque; 
    
public:
    
    Produto();
    Produto(const Produto &outro);
    
    void imprimir() const;
    void imprimirResumido() const;
    void preencher();
    void copiar(const Produto& outro);
    
    ///metodo Getters e Setters
    void setEstoque(int estoque);
    int getEstoque() const;
    void setCusto(double custo);
    double getCusto() const;
    void setPreco(double preco);
    double getPreco() const;
    void setId(int id);
    int getId() const;
    void setNome(string nome);
    string getNome() const;
};

#endif	/* PRODUTO_H */