# Qual metodo devo usar de acordo com a complexidade ?

1. Bubble Sort:

Complexidade: O(n^2)
Adequação: O Bubble Sort não é eficiente para conjuntos de dados grandes e é melhor evitá-lo em favor de algoritmos mais eficientes, especialmente quando se trata de conjuntos de dados grandes.

2. Selection Sort:

Complexidade: O(n^2)
Adequação: O Selection Sort também não é eficiente para conjuntos de dados grandes, mas pode ser uma opção razoável para conjuntos pequenos ou quando a quantidade de trocas é uma preocupação.

3. Insertion Sort:

Complexidade: O(n^2)
Adequação: O Insertion Sort é adequado para conjuntos pequenos ou quase ordenados. Ele pode ser uma boa escolha quando a lista já está parcialmente ordenada.

4. Merge Sort:

Complexidade: O(n log n)
Adequação: O Merge Sort é muito eficiente para conjuntos de dados grandes e é estável. É uma boa escolha quando você precisa de uma ordenação estável ou quando lida com grandes volumes de dados.

5. Quick Sort:

Complexidade: O(n^2) no pior caso, mas O(n log n) em média.
Adequação: O Quick Sort é uma escolha sólida para a maioria dos casos, especialmente quando o desempenho médio é considerado. No entanto, é importante escolher pivôs adequadamente para evitar o pior caso.

6. Heap Sort:

Complexidade: O(n log n)
Adequação: O Heap Sort é eficiente para conjuntos de dados grandes e é in-place. Pode ser uma boa escolha quando você precisa de um algoritmo de ordenação in-place e não se preocupa com a estabilidade.

### Atalho para se lembrar

- Conjuto de dados pequenos ou quase ordenados
    Bubble Sort, Selection Sort e Insertion Sort

- Conjuto de dados maiores e mais complexos
     Merge Sort, Quick Sort e Heap Sort
    


Em resumo, a escolha do algoritmo de ordenação depende das características do seu conjunto de dados e dos requisitos de desempenho. Para conjuntos de dados pequenos ou quase ordenados, algoritmos como o Bubble Sort, Selection Sort e Insertion Sort podem ser adequados. Para conjuntos de dados maiores, o Merge Sort, Quick Sort e Heap Sort são opções mais eficientes, com complexidades de tempo de O(n log n), tornando-os geralmente mais rápidos. A escolha entre eles depende de outros fatores, como a estabilidade da ordenação e a necessidade de ordenação in-place.