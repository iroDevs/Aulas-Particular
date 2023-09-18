#include <cstdlib>

#include "Produto.h"
#include "ListaEncadeada.h"

using namespace std;

void menuOpcoes() {
    cout << "\n\t\t-------------------------------" << endl;
    cout << "\t\t             Menu               " << endl;
    cout << "\t\t1 - Inserir(1) " << endl;
    cout << "\t\t2 - Inserir em qualquer lugar    " << endl;
    cout << "\t\t3 - Remover(1) " << endl;
    cout << "\t\t4 - Remover em qualquer lugar    " << endl;
    cout << "\t\tS - Sair " << endl;
    cout << "\t\t-------------------------------  " << endl;
    cout << "\t\tEscolhar uma opcao:";
}

int main() {
    int pos;
    char opcao = 's';
    Encadeada l;

    do {
        menuOpcoes();
        cin >> opcao;
        cout << "\t\t----------------------------\n";

        switch (opcao) {
            case '1':
                l.insert();
                break;
            case '2':
                cout << "Posicao da insercao:";
                cin >> pos;
                l.insert(pos);
                break;
            case '3':
                l.remove();
                break;
            case '4':
                cout << "Posicao da remocao:";
                cin >> pos;
                l.remove(pos);
                break;
        }
        l.imprimir();
    } while (opcao != 's' && opcao!='S');

    return 0;
};

