
#include <cstdlib>

#include "Nodo.h"
#include "ArvoreBinaria.h"

using namespace std;

void menuOpcoes() {
    cout << "\n\t\t-------------------------------" << endl;
    cout << "\t\t             Menu               " << endl;
    cout << "\t\t1 - Inserir " << endl;
    cout << "\t\t2 - Remover " << endl << endl;
    cout << "\t\t-------------------------------  " << endl;
    cout << "\t\ti - Imprimir (em-ordem)" << endl;
    cout << "\t\ts - Salvar " << endl;
    cout << "\t\tq - Quit " << endl;
    cout << "\t\t-------------------------------  " << endl;
    cout << "\t\tEscolhar uma opcao:";
}

int main() {
    int id;
    Produto p;
    char opcao = 's';
    ArvoreBinaria tree;
    tree.loadProdutos();
    
    do {
        menuOpcoes();
        cin >> opcao;
        cout << "\t\t----------------------------\n";

        switch (opcao) {
            case '1':
                p.preencher();
                tree.insert(p);
                break;
            case '2':
                cout << endl << endl << "*** Remoção de nó ***"<<endl;
                cout << "Informe o id:";
                cin >> id;
                p.setId(id);
                tree.remove(p);
                cout << "*** Remoção feita com sucesso."<< endl<< endl;
                break;            
            case 'i':
                cout << endl << endl << "*** Percurso na arvore ***"<<endl;
                tree.emOrdem(tree.getRoot());
                cout << endl << "*** Percurso feito."<<endl << endl;
                break;
                
            case 's':
                cout << endl << endl << "*** Salvando no arquivo..."<<endl;                
                tree.saveProdutosArquivo();
                cout << "*** Salvo com sucesso."<< endl<< endl;
                break;
            default:
                break;
        }
    } while (opcao != 'q' && opcao != 'Q');
    

    return 0;
}



