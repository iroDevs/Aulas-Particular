#ifndef PRODUTO_H
#define PRODUTO_H

#include <iostream>
#include <string>

using namespace std;

class Produto
{
    public:
        Produto();
        Produto(string nome, double preco, double custo, int estoque,int id);
        virtual ~Produto();

        void setNome(string nome);
        void setId(int id);
        void setPreco(double preco);
        void setCusto(double custo);
        void setEstoque(int estoque);

        string getNome();
        double getPreco();
        double getCusto();
        int getEstoque();
        int getId();

        void preencher();
        void copiar(Produto &outro);


    private:
        int id;
        string nome;
        double preco;
        double custo;
        int estoque;
        
        


};





#endif // PRODUTO_H