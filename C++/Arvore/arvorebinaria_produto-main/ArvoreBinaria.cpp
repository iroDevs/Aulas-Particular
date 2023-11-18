
#include "ArvoreBinaria.h"
#include<iostream>
#include<fstream>
#include<ostream>

using namespace std;

ArvoreBinaria::ArvoreBinaria() {
    quant = 0;
    root = NULL;
    h = 1;
}

ArvoreBinaria::ArvoreBinaria(const ArvoreBinaria& outra) {
    this->quant = outra.getQuant();
    this->root = outra.getRoot();
}

ArvoreBinaria::~ArvoreBinaria() {
    //será chamado quando o objeto for destruido
}

Nodo * ArvoreBinaria::buscar(Nodo * subArvore, const Produto& p) {
    if (subArvore != NULL) {
        Produto item = subArvore->getItem();
        if (p.getId() < item.getId())
            return buscar(subArvore->getEsq(), p);
        else if (p.getId() > item.getId())
            return buscar(subArvore->getDir(), p);
        else {
            return subArvore; //cout << "--- Achou ! ---";

        }
    } else {
        cout << " Elemento não encontrado.";
        return NULL;
    }
}

Nodo* ArvoreBinaria::localEntrada(Nodo* no, const Produto &p) {
    Produto item = no->getItem();

    if (p.getId() < item.getId()) {
        if (no->getEsq() != NULL)
            return localEntrada(no->getEsq(), p);
    } else {
        if (no->getDir() != NULL)
            return localEntrada(no->getDir(), p);
    }

    return no;
}

void ArvoreBinaria::insert(Produto &p) {
    Nodo *novo;
    novo = new Nodo(p);

    if (root == NULL) {
        root = new Nodo();
        root->setItem(p);
        quant++;
    } else {
        Nodo *pai = localEntrada(root, p);

        Produto itemPai = pai->getItem();
        if (p.getId() < itemPai.getId()) {
            pai->setEsq(novo);
            novo->setPai(pai);
            quant++;
        } else if (p.getId() > itemPai.getId()) {
            pai->setDir(novo);
            novo->setPai(pai);
            quant++;
        } else {
            cout << "Elemento ja existe!\n";
        }
    }
}

void ArvoreBinaria::remove(Produto &p) {
    Nodo* sair = buscar(root, p);

    if (sair != NULL) {
        int numeroFilhos = sair->getNumeroFilhos();
        if (numeroFilhos == 0) {
            this->removerZeroFilhos(sair);
        } else if (numeroFilhos == 1) {
            this->removerUmFilho(sair);
        } else {
            this->removerNFilhos(sair);
        }
        quant--;
    }

}

void ArvoreBinaria::removerZeroFilhos(Nodo *sair) {
    Nodo * pai = sair->getPai();
    if (pai == NULL) { //estamos removendo o root
        root = NULL;
    } else {
        Produto itemPai = pai->getItem();
        Produto itemSair = sair->getItem();

        if (itemSair.getId() < itemPai.getId())
            pai->setEsq(NULL);
        else
            pai->setDir(NULL);
    }
}

void ArvoreBinaria::removerUmFilho(Nodo *sair) {
    Nodo * pai = sair->getPai();
    Nodo * filho = sair->getFilhoUnico();

    if (pai == NULL) {//o pai é o root e basta apontar pra o filho
        root = filho;
    } else {
        if (filho != NULL) {
            filho->setPai(pai);
            if (filho->getItem().getId() > pai->getItem().getId())
                pai->setDir(filho);
            else
                pai->setEsq(filho);
        }
    }
}

void ArvoreBinaria::removerNFilhos(Nodo *sair) {
    Nodo * antecessor = this->getAntecessor(sair);

    Produto p = antecessor->getItem();
    this->remove(p);

    sair->setItem(antecessor->getItem());

}

/**
 * O Algoritmo desce SEMPRE para ESQUERDA procurando o 
 * MENOR elemento dentre os MAIORES que o NO
 * 
 * O algoritmo para quando um determinado NO descendente não tiver mais
 * filho a esquerda.
 * @param no
 * @return 
 */
Nodo* ArvoreBinaria::menorDescendente(Nodo *no) {
    if (no != NULL) {
        if (no->getEsq() == NULL)
            return no;
        else
            return menorDescendente(no->getEsq());
    }
    return NULL;
}

Nodo* ArvoreBinaria::getSucessor(Nodo* no) {
    if (no != NULL) {
        return menorDescendente(no->getDir());
    } else {
        cout << "Esse nó não possui antecessor";
        return NULL;
    }
}

/**
 * O Algoritmo desce SEMPRE para Direita procurando o 
 * Maior elemento dentre os menores que o NO
 * 
 * O algoritmo para quando um determinado NO descendente não tiver mais
 * filho a direita.
 * @param no
 * @return 
 */
Nodo* ArvoreBinaria::maiorDescendente(Nodo *no) {
    if (no != NULL) {
        if (no->getDir() == NULL)
            return no;
        else
            return maiorDescendente(no->getDir());
    }
    return NULL;
}

Nodo* ArvoreBinaria::getAntecessor(Nodo* no) {
    if (no != NULL) {
        return maiorDescendente(no->getEsq());
    } else {
        cout << "Esse nó não possui antecessor";
        return NULL;
    }
}

void ArvoreBinaria::emOrdem(Nodo *no) {
    if (no != NULL) {
        emOrdem(no->getEsq());
        cout << "(" << no->getItem().getId() << "," << no->getItem().getNome() <<
                "," << getFatorBalanceamento(no) << "), ";
        emOrdem(no->getDir());
    }
}

void ArvoreBinaria::preOrdem(Nodo *no) {
    if (no != NULL) {
        cout << "(" << no->getItem().getId() << "," << no->getItem().getPreco() << "), ";
        preOrdem(no->getEsq());
        preOrdem(no->getDir());
    }
}

void ArvoreBinaria::posOrdem(Nodo *no) {
    if (no != NULL) {
        posOrdem(no->getEsq());
        posOrdem(no->getDir());
        cout << "(" << no->getItem().getId() << "," << no->getItem().getPreco() << "), ";
    }
}

/**
 * Recebe um no como parametro e chama o metodo getAltura(SubArvoreEsquerda)
 *  e getAltura(SubArvoreDireita) e faz a diferenca.
 * @param no
 * @return 
 */
int ArvoreBinaria::getFatorBalanceamento(Nodo *no) {
    int h_esq = 0;
    int h_dir = 0;
    Nodo* subEsq = no->getEsq();
    Nodo* subDir = no->getDir();

    if (subEsq != NULL)
        h_esq = getAltura(subEsq);
    
    if (subDir != NULL)
        h_dir = getAltura(subDir);
    
    return h_dir - h_esq;
}

/**
 * 
 * @param no
 * @return 
 */
int ArvoreBinaria::getAltura(Nodo *no) {
    if (no == NULL) {
        return 0;
    } else {
        int h_esq = getAltura(no->getEsq());
        int h_dir = getAltura(no->getDir());

        if (h_esq > h_dir)
            return h_esq + 1;
        else
            return h_dir + 1;
    }
}

void ArvoreBinaria::preOrdemArquivo(Nodo *no) {
    if (no != NULL) {
        textoSalvo = textoSalvo + no->getItem().imprimirParaArquivo() + "\n";
        preOrdemArquivo(no->getEsq());
        preOrdemArquivo(no->getDir());
    }
}

void ArvoreBinaria::loadProdutos() {
    string caminhoPasta = "teste.txt";
    ifstream arquivoLido;

    arquivoLido.open(caminhoPasta.c_str());
    int quant;
    arquivoLido >> quant;

    string nome;
    float id, custo, preco;
    int estoque;

    Produto p;
    for (int i = 0; i < quant; i++) {
        arquivoLido >> id;
        arquivoLido >> nome;
        arquivoLido >> custo;
        arquivoLido >> preco;
        arquivoLido >> estoque;
        p.setId(id);
        p.setNome(nome);
        p.setCusto(custo);
        p.setPreco(preco);
        p.setEstoque(estoque);

        insert(p);
    }

    arquivoLido.close();
}

void ArvoreBinaria::saveProdutosArquivo() {
    string caminhoPasta = "teste.txt";
    ofstream arquivoSalvo;
    arquivoSalvo.open(caminhoPasta.c_str());

    preOrdemArquivo(root); //essa funcao monta o texto    
    arquivoSalvo << quant << endl << textoSalvo << endl;

    arquivoSalvo.close();
}

/**
 *  GETTERS E SETTERS 
 */
void ArvoreBinaria::setQuant(int quant) {
    this->quant = quant;
}

int ArvoreBinaria::getQuant() const {
    return quant;
}

void ArvoreBinaria::setRoot(Nodo* root) {
    this->root = root;
}

Nodo* ArvoreBinaria::getRoot() const {
    return root;
}