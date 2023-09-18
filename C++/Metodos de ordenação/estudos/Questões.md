1. Qual é a complexidade de tempo do algoritmo Bubble Sort? Em que situação esse algoritmo é mais eficiente?

2. Imagine que você tem um aplicativo com um array grande que precisa ser ordenado. Qual algoritmo de ordenação você escolheria se a complexidade de tempo fosse uma preocupação primordial e por quê?

3. O algoritmo Selection Sort é estável ou não estável? Explique o que isso significa e dê um exemplo de situação em que a estabilidade é importante.

4. Dado o seguinte código em C++:

```c++
void sortArray(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}

```
Qual algoritmo de ordenação esse código representa? Explique.

5. Quando você deve escolher o Merge Sort em vez do Quick Sort? Quais são as principais diferenças entre esses dois algoritmos em termos de desempenho e estabilidade?

6. Você está trabalhando com um conjunto de dados que já está parcialmente ordenado. Qual algoritmo de ordenação você escolheria e por quê?

7. Qual é a complexidade de tempo do algoritmo Heap Sort? Como ele se compara ao Merge Sort e ao Quick Sort em termos de desempenho?

8. O que significa "complexidade de tempo" em relação aos algoritmos de ordenação? Por que é importante considerar a complexidade de tempo ao escolher um algoritmo?

9. Como o desempenho do Bubble Sort se comporta quando o tamanho do array aumenta? E como ele se comporta quando o array está quase ordenado?

10. Explique a diferença entre a complexidade de tempo no pior caso e a complexidade de tempo média de um algoritmo de ordenação. Por que é importante conhecer ambas as complexidades?