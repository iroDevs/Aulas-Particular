# Anotação com a letra O

A notação "O" (letra "O" maiúscula) é usada para descrever a complexidade de tempo de um algoritmo em termos de como o tempo de execução do algoritmo cresce em relação ao tamanho da entrada. Quando você vê algo como "O(n^2)" ou "O(n log n)", isso descreve como o tempo de execução do algoritmo aumenta à medida que o tamanho da entrada (n) aumenta.

1. O(1): Isso significa que o tempo de execução do algoritmo é constante e independente do tamanho da entrada. É o melhor caso possível.

2. O(log n): Isso significa que o tempo de execução do algoritmo aumenta de forma logarítmica com o tamanho da entrada. Algoritmos com essa complexidade são considerados muito eficientes para grandes conjuntos de dados.

3. O(n): Isso significa que o tempo de execução do algoritmo cresce linearmente com o tamanho da entrada. É um desempenho razoável e geralmente aceitável para muitos casos.

4. O(n log n): Essa é uma complexidade comum para algoritmos de ordenação eficientes, como o Merge Sort e o Quick Sort. É mais rápido do que O(n^2) para conjuntos de dados grandes, mas não é tão eficiente quanto O(log n).

5. O(n^2): Isso significa que o tempo de execução do algoritmo aumenta quadraticamente com o tamanho da entrada. Algoritmos com essa complexidade podem ser lentos para grandes conjuntos de dados e são geralmente menos eficientes.


> Portanto, quando você vê algo como "O(n^2)", isso indica que o algoritmo tem uma complexidade de tempo quadrática, o que significa que o tempo de execução cresce proporcionalmente ao quadrado do tamanho da entrada. Quanto maior o valor de "n", mais tempo o algoritmo levará para ser executado, e isso pode ser um problema em conjuntos de dados grandes. Por outro lado, "O(n log n)" é melhor do que "O(n^2)" para conjuntos de dados maiores, pois cresce de forma mais lenta à medida que a entrada aumenta.