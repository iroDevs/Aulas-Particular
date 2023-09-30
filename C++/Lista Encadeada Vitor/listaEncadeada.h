#include "produto.h"

using namespace std;

class listaEncadeada{
    private:
        int quantidade;
        Nodo *cabeca;
    public:
        listaEncadeada();

        int getQuantidade();
        void setQuantidade(int quantidade);

        Nodo *getCabeca();
        void setCabeca(Nodo *cabeca);
        
        void insert(int posicao);
        void insert();
        
        void remove(int posicao);

        Nodo *getNodo(int posicao);
        Nodo *buscar(int idProduto);
}
