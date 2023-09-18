#include "Encadeada.h"
#include<iostream>

using namespace std;

Encadeada::Encadeada() {
    quant = 0;
    head = NULL;
}

Encadeada::~Encadeada() {
    //será chamado quando o objeto for destruido
}

/**
 * Retorna o endereco do elemento da posiçao: n
 * @param posicao
 * @return 
 */
Nodo* Encadeada::getElemento(int n) {
    Nodo* p = head;
    int j = 1;

    while (j <= n - 1 && p->getProx() != NULL) {
        p = p->getProx();
        j++;
    }

    if (j == n)
        return p;
    else
        return NULL; // posicao invalida

}

Nodo* Encadeada::buscar(int idProduto) {
    for (Nodo*p = head; p != NULL; p = p->getProx()) {
        if (p->getItem().getId() == idProduto)
            return p;
    }
    return NULL;
}

void Encadeada::preencher() {
    int q = 0;
    do{
        cout << "Quantos elementos voce deseja inserir:";
        cin >> q;
    }while(q < 0);
    
    for(int i=0; i<= q-1 ;i++){
        this->insert();
    }
}

void Encadeada::insert() {
    Produto p;
    p.preencher();
    Nodo *novo;
    novo = new Nodo(p);
    novo->setProx(head);
    head = novo;
    quant++;
}

/*
 * Por padrão, a inserção é na posição que o usuario pediu. Assim sendo, 
 * sempre será inserido e terá um no na frente dele.
 * Por isso, para inserir na ultima posição e o nó ser ultimo, precisamos
 * fazer um caso especial que é o if(n = quant+1)
 */
void Encadeada::insert(int n) {
    if (n >= 1 && n <= quant + 1) {
        Produto p;
        p.preencher();
        Nodo* novo = new Nodo();
        novo->setItem(p);

        if (n == 1) { //estamos no mesmo caso de inserir na 1 posicao					
            novo->setProx(head);
            head = novo;
        } else if (n == quant + 1) { //inserindo depois da ultima posicao
            Nodo* ultimo = this->getElemento(n - 1);
            novo->setProx(NULL);
            ultimo->setProx(novo);
        } else {
            Nodo* anterior = this->getElemento(n - 1);
            novo->setProx(anterior->getProx());
            anterior->setProx(novo);
        }
        quant++;
    } else {
        cerr << "Operação inválida para esta posição.";
    }
}

void Encadeada::remove() {
    if(quant > 0){
        head = head->getProx();
        quant--;
    }else{
        cout << "Operacao invalida - Lista vazia";
    }
}

void Encadeada::remove(int posicao) {
    if (posicao >= 1 && posicao <= quant) {
        if (posicao == 1) {
            this->remove();
        } else if (posicao == quant) {
            Nodo* anterior = this->getElemento(posicao - 1);
            anterior->setProx(NULL);
            quant--;
        } else {
            Nodo* anterior = this->getElemento(posicao - 1);
            Nodo* saira = anterior->getProx();
            anterior->setProx(saira->getProx());
            quant--;
        }
    }else{
        cout << "Operacao inválida para está posicao."<<endl;
    }
}

bool Encadeada::isEmpty() {
    if (quant == 0)
        return true;
    else
        return false;

}

void Encadeada::imprimir() {
    cout << "\n>> Lista [ ";
    if (!isEmpty()) {
        Nodo* p = head;
        while (p != NULL) {
            p->getItem().imprimirResumido();
            p = p->getProx();
        }
    }
    cout << " ] \n";
}

/**
 *  GETTERS E SETTERS 
 */
void Encadeada::setQuant(int quant) {
    this->quant = quant;
}

int Encadeada::getQuant() const {
    return quant;
}

