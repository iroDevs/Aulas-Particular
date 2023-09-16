let list = document.querySelector('#list');
let listLi = document.querySelectorAll('li');
let btn = document.querySelector('button');
let frutasName = [];



if (!localStorage.getItem("frutas")) {
    localStorage.setItem("frutas", JSON.stringify([]))
}


loadListLocalStorage();

function loadListLocalStorage(){
    let elementsLocalStorage = JSON.parse(localStorage.getItem("frutas"));
    elementsLocalStorage.forEach(element => {
        createElementLi(element);
    });
  
}

function saveLocalStorage(value){
    let listLocalStorage = JSON.parse(localStorage.getItem("frutas"));
    listLocalStorage.push(value);
    localStorage.setItem("frutas", JSON.stringify(listLocalStorage))
}


function createElementLi(value){
    let li = document.createElement('li');
    li.textContent = value;
    list.appendChild(li);
}







btn.addEventListener('click', ()=> {
    let input = document.querySelector('input').value;
    createElementLi(input)
    saveLocalStorage(input);
    

})




