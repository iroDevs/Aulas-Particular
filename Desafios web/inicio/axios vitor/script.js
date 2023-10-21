

const url = "https://rickandmortyapi.com/api"

let container = document.querySelector("#container")

container.style.display = "flex"
container.style.gap = "30px" 
container.style.overflowX = "auto"
container.style.position = 'absolute'
container.style.top = "50%"
container.style.transform = "translate(0%,-50%)"
container.style.margin = "10px"




async function getCharacters() {
    let personagens = await axios.get(`${url}/character`)
    personagens = personagens.data.results
    personagens.forEach((elemento) => {
        container.innerHTML = container.innerHTML + `
    <div class=" myCard" style="width: 18rem;">
        <img src="${elemento.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${elemento.name}</h5>
            <p class="card-text">Genero: ${elemento.gender}</p>
            
        </div>
    </div>
        `
        console.log('dfgsdf');
    });

    let cards = document.querySelectorAll(".myCard")
    let images = document.querySelectorAll(".card-img-top")

    images.forEach(elemento =>{
        elemento.style.width = "300px"
        elemento.style.borderRadius = "25%"
    })

    cards.forEach(elemento => {
        elemento.style.width = "300px"
        elemento.style.padding = "10px"
        elemento.style.margin = "30px"
    })
}

getCharacters()