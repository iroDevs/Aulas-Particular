# ShiftEnd

copiar:
Utilizar os getters do objeto de paramento para passar as informações para o outro

esse codigo varia de acordo com suas propriedades
```c++
void Produto::copiar(Produto outro) {
    this->codigo = outro.getCodigo
    this->preco = outro.getPreco
    this->custo = outro.getCusto
} 

```

shiftEnd
```c++
void Lista::shiftEnd(int indice){
    for(int i=tam-1; i>= indice ;i--)
       // lista[i] = lista[i-1] Tipos Simples
       lista[i].copiar(lista[i-1]) // Tipos abstratos
}   

```

insert
```c++

void Lista::insert(Produto produto, int indice){
    if(quant < tam){
        shiftEnd(indice);
        lista[indice].copiar(produto)
        quant++;
    }else {
        cout << "Lista cheia"
    }
}

```
