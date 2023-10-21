

const url = "https://rickandmortyapi.com/api/"
const container = document.querySelector("#container")
console.log("aaa");

function createImage(src){
    const img = document.createElement("img")
    img.src = src
    return img
}

function injectElement(element){
    container.appendChild(element)
}

async function getAllpersons(){
  
    const response = await axios.get(url + "character")
   console.log(response.data);
    const allpersons = response.data.results

    allpersons.forEach(person => {
        const element = createImage(person.image)
        injectElement(element)
    })
}

getAllpersons()