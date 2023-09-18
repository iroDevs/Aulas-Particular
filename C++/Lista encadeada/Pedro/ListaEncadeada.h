#ifndef LISTAENCADEADA_H
#define LISTAENCADEADA_H

#include "Produto.h"
#include "Nodo.h"

using namespace std;

class Encadeada {
    private:
        int quant;
        Nodo* head;

        public:
        Encadeada();
        virtual ~Encadeada();

        void insert();
        void insert(int posicao);

        void remove();
        void remove (int posicao);

        Nodo* buscar();
        Nodo* getItem(int posicao);

        void imprimir();
        void prencher();

        //Getters e Setters
        int getQuant();
        void setQuant(int q);

};

#endif // LISTAENCADEADA_H