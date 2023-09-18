# Estavel ou não

Ser "estável" ou "não estável" refere-se à capacidade de um algoritmo de ordenação de manter a ordem relativa de elementos com chaves (valores) iguais após a ordenação. Vamos explicar isso com exemplos:

## Ordenação Estável:

Imagine que você tem uma lista de registros de estudantes que precisa ser ordenada primeiro pelo nome e, em seguida, pela idade, de forma que os registros com o mesmo nome permaneçam na mesma ordem, mas sejam ordenados com base na idade. Se o algoritmo de ordenação for estável, ele garantirá que a ordem relativa dos estudantes com nomes iguais permaneça a mesma após a ordenação.

Exemplo:


```md
Antes da ordenação:
1. Ana, 25
2. João, 22
3. Maria, 25
4. Pedro, 21

Depois da ordenação estável (por nome e depois por idade):
1. Ana, 25
2. Maria, 25
3. João, 22
4. Pedro, 21

```
Observe que Ana e Maria, que têm o mesmo nome, ainda estão em ordem de idade após a ordenação. Isso é uma ordenação estável.

## Ordenação Não Estável:

Por outro lado, se o algoritmo de ordenação não for estável, a ordem relativa dos registros com nomes iguais pode ser alterada após a ordenação. Veja o exemplo a seguir:

Exemplo:

```md
Antes da ordenação:
1. Ana, 25
2. João, 22
3. Maria, 25
4. Pedro, 21

Depois da ordenação não estável (por idade e depois por nome):
1. Pedro, 21
2. João, 22
3. Ana, 25
4. Maria, 25


```
Neste caso, a ordem relativa de Ana e Maria foi alterada após a ordenação, tornando-a não estável.

A estabilidade em algoritmos de ordenação é importante em situações onde a ordem relativa dos elementos com chaves iguais é relevante, como classificar registros com várias propriedades, como nome e idade. A capacidade de manter essa ordem relativa facilita a análise dos dados ordenados em conjunto com base em critérios múltiplos.


# Inplace ou nao

in-Place Sorting (Ordenação In-Place):
Um algoritmo de ordenação é considerado "in-place" se ele realiza a ordenação diretamente no array de entrada, sem a necessidade de alocar uma quantidade significativa de memória adicional. Ele modifica o array original durante o processo de ordenação.

1. Bubble Sort
Estável (S)
In-Place (I)

2. Selection Sort
Não Estável (N)
In-Place (I)

3. Insertion Sort
Estável (S)
In-Place (I)

4. Merge Sort

Estável (S)
Não In-Place (NI)

5. Quick Sort
Não Estável (N)
Pode ser In-Place (I) ou Não In-Place (NI), dependendo da implementação

6. Heap Sort
Não Estável (N)
In-Place (I)

Lembrando que a estabilidade se refere à capacidade de manter a ordem relativa dos elementos com chaves iguais após a ordenação, e a in-place se refere à capacidade de ordenar o array diretamente, sem a necessidade de memória adicional significativa.