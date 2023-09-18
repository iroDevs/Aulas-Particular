#include <iostream> 
#include <string>
#include "Produto.h"

using namespace std;

int main()
{
    string nome;
    Produto p1("p1", 10.0, 5.0, 10, 1);
    Produto P2;
    

   P2.copiar(p1);


    
    cout << "Nome: " << P2.getNome() << endl;
    cout << "Preco: " << P2.getPreco() << endl;
    cout << "Custo: " << P2.getCusto() << endl;
    cout << "Estoque: " << P2.getEstoque() << endl;
    cout << "Id: " << P2.getId() << endl;

    cin >> nome;
    return 0;
}




