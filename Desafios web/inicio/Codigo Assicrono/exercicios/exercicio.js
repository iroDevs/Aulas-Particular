const SimulandoPromisse = require('../SimulandoPromisse');

//Faça uma função que capture todos os usuarios da lista que trabalham na Rocketseat e com mais de 18 anos
/*
async function capturaMaiorDezoito(){
    let trabalhadores = await SimulandoPromisse(true);
    
    trabalhadores.forEach((trabalhador, index, array)=>{
        if(trabalhador.empresa === 'Rocketseat')
            console.log(trabalhador.nome);
    })
}
capturaMaiorDezoito()

*/
//Faça uma função que capture todos os usuarios da lista que trabalham na Facebook e com mais de 18 anos




//Faça uma função que receba um erro e retorne uma messagem de erro ( "Desculpe algo deu errado nossa equipe esta trabalhando para resolver o problema" )
/*
async function capturaMaiorDezoito(){
    try{
    let trabalhadores = await SimulandoPromisse(false);

    //....
    
    }catch(error){
        console.log(error);
    }
}
capturaMaiorDezoito();
*/

//Responda Rapido: O que é uma promisse? , Porque usar codigo assicrono? 


//Desafio final faça uma função que capture todos os usuarios porem essa função deve exibir o texto carregando ate a lista estar pronta e depois exibir a lista de usuarios

async function exibeNomes(){
    let trabalhadores = await SimulandoPromisse(true);

    trabalhadores.forEach((trabalhador,index,array)=>{
        console.log(trabalhador.nome);
    })
}
exibeNomes()
console.log("carregando...");


