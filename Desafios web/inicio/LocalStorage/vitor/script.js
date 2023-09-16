

let input = document.querySelector("#name");
let btn = document.querySelector("#btn");
let dog = document.querySelector("#dog");

btn.addEventListener("click",() => {
    let nameOfInput = input.value;
    dog.textContent = nameOfInput;
    saveInLocalStorage(nameOfInput)
})

function saveInLocalStorage(nome){
    localStorage.setItem("cachorro",nome)
}

console.log(typeof localStorage.getItem("cachorro"));

if(localStorage.getItem("cachorro")) 
    dog.textContent = localStorage.getItem("cachorro")

    let a = 5

    localStorage.setItem("numero",JSON.stringify(a))

    let numero = JSON.parse(localStorage.getItem("numero"))

    console.log(numero);



