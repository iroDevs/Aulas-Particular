
let a = "Faz frase fazendo favor"

function desafio(a){
let texto = ""

    for(let i = 0; i < a.length; i++){
        
        if(i%2 === 0){
            texto = texto + a[i].toUpperCase()
        }
           
        else{
            texto = texto + a[i].toLowerCase()
        }
    }
    return texto
}


console.log(desafio(a));