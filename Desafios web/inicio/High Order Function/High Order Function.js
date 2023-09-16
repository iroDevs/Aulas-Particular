let array = [1 , 2 , 3 , 4 , 5]



//foreach
/*
 forEach():

 A função forEach() é utilizada para percorrer todos os elementos de um array e executar uma função de callback para cada um deles. Ela não retorna um novo array e, geralmente, é usada apenas para realizar operações em cada elemento.
*/

array.forEach( (elemento, index ,array) => {
    console.log('este é o elemento dessa rodada: ',elemento , "esse é a posição do array: ",index , "esse é o array: ",array);
})

/*
A função map() é utilizada para transformar os elementos de um array, criando um novo array com os resultados das transformações aplicadas a cada elemento. Ela não modifica o array original. A função map() recebe uma função de callback que será aplicada a cada elemento do array.

*/

const novoArrayComValoresDobrados = array.map( (elemento) => elemento * 2)
console.log('Novo array dobrado: ',novoArrayComValoresDobrados);

/*
filter():
A função filter() é utilizada para criar um novo array contendo apenas os elementos que atendem a uma determinada condição. A função filter() também recebe uma função de callback que retorna true ou false para cada elemento.
*/

const Pares = array.filter( (elemento) => elemento % 2 === 0)
console.log('Pares:', Pares);


/*
sort

A função sort() é utilizada para ordenar os elementos de um array de acordo com uma função de comparação. Se nenhuma função de comparação for fornecida, os elementos serão convertidos em strings e ordenados lexicograficamente.

*/

let arrayDesordenado = [3,6,4,3,2,1,5]

const arrayOrdenado = arrayDesordenado.sort( (a,b) => a - b )

console.log("array ordenado",arrayOrdenado);