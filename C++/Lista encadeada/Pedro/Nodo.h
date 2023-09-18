#ifndef NODO_H
#define	NODO_H

#include <iostream>

#include "Produto.h"
#include "ListaEncadeada.h"

using namespace std;

class Nodo {
    private:
        Produto item;
        Nodo* prox;

     //metodos
    public:
        Nodo();
        Nodo(Produto &p);
        Nodo(const Nodo& orig);
        virtual ~Nodo();

        Produto getItem();
        void setItem(Produto &p);

        //Getters e Setters
        void setProx(Nodo* prox);
        Nodo* getProx() const;
        void setItem(Produto item);
        Produto getItem() const;
};

#endif	/* NODO_H */