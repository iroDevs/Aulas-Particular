#include "produto.h"

using namespace std;

class Nodo{
    private:
        Nodo *proximo;
        Produto produto;
    public:
        Nodo();
        Nodo(Produto produto);
        Nodo(Nodo& orig);

        void setProximo(Nodo *proximo);
        Nodo *getProximo();

        void setProduto(Produto produto);
        Produto getProduto();

        void setProduto(Produto produto);

        void setProx(Nodo* prox);

        Nodo *getProx();

}