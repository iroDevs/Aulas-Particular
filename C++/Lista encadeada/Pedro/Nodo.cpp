#include "Nodo.h"

Nodo::Nodo() {
    this->prox = NULL;
}

Nodo::Nodo(Produto &p) {
    this->item = p;
    this->prox = NULL;
}

Nodo::Nodo(const Nodo& outro) {
    this->item = outro.getItem;
}

Nodo::~Nodo() {
}

//Getters e Setters
void Nodo::setProx(Nodo* prox) {
    this->prox = prox;
}

Nodo* Nodo::getProx() const {
    return prox;
}

void Nodo::setItem(Produto item) {
    this->item = item;
}

Produto Nodo::getItem() const {
    return item;
}