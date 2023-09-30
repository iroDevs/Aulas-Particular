#include "Nodo.h"
#include <iostream>
using namespace std;

Nodo::Nodo(){
    this->proximo = NULL;
}
Nodo::Nodo(Produto &p){
    produto.copiar(p);
}
Nodo::Nodo(Nodo& orig){
     this->produto.copiar(orig.getProduto());
}
    
Produto Nodo::getProduto() {
    return produto;
}

void Nodo::setItem(Produto item) {
    this->produto = item;
}


void Nodo::setProx(Nodo* prox) {
    this->proximo = prox;
}

Nodo* Nodo::getProx() const {
    return proximo;
}







