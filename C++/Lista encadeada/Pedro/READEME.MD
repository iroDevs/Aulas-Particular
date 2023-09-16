# STEP BY STEP Lista Encadeada c++

> A lista encadade nada mais é do que duas classes formando uma corrente de dados onde um aponta para o da frente a classe lista encadeada possui o atributo **quant** sendo esse responsavel por guardar a quantidade e o _Nodo_ que cuida do item guardado o Nodo é uma classe que possui dois atributos o item , prox , sendo o que quero guardar e qual elemento é o proximo da lista


1. Crie a Classe lista_encadeada com os elementos privados quant e Node sendo esse Node um ponteiro do head ( o Primeiro elemento )

## ListaEncadeada.h

```c++
#ifndef LISTAENCADEADA_H
#define LISTAENCADEADA_H


using namespace std;

class Encadeada {
    private:
        int quant;
        Nodo* head;
        public:
        Encadeada();
        virtual ~Encadeada();
        
        void insert()
        void insert(int posicao)

        void remove()
        void remove (int posicao)

        Nodo* buscar();
        Nodo* getItem(int posicao)

        void imprimir();
        void prencher();

        //Getters e Setters
        int getQuant();
        void setQuant(int q);

}

#endif // LISTAENCADEADA_H

```

## Nodo.h

```c++
    
#include <iostream>

using namespace std;

class Nodo {
    private:
        Produto item;
        Nodo* prox;

     //metodos
    public:
        Nodo();
        Nodo(Produto &p);
        Nodo(Produto& orig);
        virtual ~Nodo();

        Produto getItem();
        void setItem(Produto &p);

        //Getters e Setters
        void setProx(Nodo* prox);
        Nodo* getProx() const;
        void setItem(Produto item);
        Produto getItem() const;
}

```

### Observaçao de detalhes

o virtual antes do descostrutor serve para dizer ao compilador que essa assinatura de função pode ser sobrescrita em outros objetos com mesma assinatura no contexo utilizado vai ajudar a saber exatamente onde meus objetos vao ser destruidos para alocar mehlhor a memoria

Nesse exemplo temos alguns produtos interessantes mas vamos agora definilos de verdade

#Primeiro vamos criar uma classe produto

```c++


```