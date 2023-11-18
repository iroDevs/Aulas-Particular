

#ifndef ARVOREBINARIA_H
#define	ARVOREBINARIA_H

#include "Produto.h"
#include "Nodo.h"

class ArvoreBinaria {
private:
    int quant;
    Nodo *root;
    
    int h;
    string textoSalvo = "";    

    //metodos chamadas apenas pelos métodos internos da nossa classe
    void removerZeroFilhos(Nodo *sair);
    void removerUmFilho(Nodo *);
    void removerNFilhos(Nodo *);
    
    Nodo* localEntrada(Nodo* subArvore, const Produto & p);
    
    Nodo* menorDescendente(Nodo *no);
    Nodo* maiorDescendente(Nodo *no);

public:
    ArvoreBinaria();
    ArvoreBinaria(const ArvoreBinaria& outra);    
    virtual ~ArvoreBinaria();
    
    //Operacoes basicas
    void insert(Produto &p);    
    void remove(Produto &p);            
    Nodo* buscar(Nodo* subArvore, const Produto & outro);    
    
    Nodo* getSucessor(Nodo *no);        
    Nodo* getAntecessor(Nodo *no);
      
    void emOrdem(Nodo *no);
    void posOrdem(Nodo *no);
    void preOrdem(Nodo *no);
    void preOrdemArquivo(Nodo *no);
    
    int getAltura(Nodo *no);
    int getFatorBalanceamento(Nodo *no);
    
    void loadProdutos();
    void saveProdutosArquivo();
    
    //GETTERS E SETTERS
    void setQuant(int quant);
    int getQuant() const;
    void setRoot(Nodo* root);
    Nodo* getRoot() const;
};

#endif	/* ARVOREBINARIA_H */

