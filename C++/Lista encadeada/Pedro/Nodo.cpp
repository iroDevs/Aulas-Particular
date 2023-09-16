#include "Nodo.h"

Nodo::Nodo() {
    this->prox = NULL;
}

Nodo::Nodo(Produto &p) {
    this->item = p;
    this->prox = NULL;
}


Nodo::Nodo(const Nodo& outro) {
    this->item = outro.getItem
}