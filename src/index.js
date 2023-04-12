let breeds = []

function getDogBreedImg(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(resp => {
        const dogImageContainer = document.getElementById("dog-image-container")
        resp.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            dogImageContainer.append(img)
        })
    })
}

function getDogBreedNames(){
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(resp => {
        breeds = Object.keys(resp.message)
        addBreedsToDom(breeds)
    }) 
}

function addBreedsToDom(breeds){
    const ul = document.getElementById("dog-breeds")
    breeds.map(breed => {
      const li = document.createElement("li")
      li.textContent = breed
      ul.append(li)
    })
}
document.addEventListener("click", e => {
    if(e.target.matches("li")){
        e.target.style.color = "red"
    }
})

document.addEventListener("change", e => {
    if(e.target.matches("#breed-dropdown")){
        const ul = document.getElementById("dog-breeds")
        ul.innerHTML = ""
        const filteredBreeds = breeds.filter(breed => breed[0] === e.target.value)
        addBreedsToDom(filteredBreeds)

    }
})


getDogBreedImg()
getDogBreedNames()