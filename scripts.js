async function loadUsers() {
    const res = await fetch("https://rickandmortyapi.com/api/character/")
    const data = await res.json()


    let container = document.getElementById("users")

    data.results.forEach(function(element){

        let card = document.createElement("div")
        card.classList.add("card")

        let img = document.createElement("img")
        img.src = element.image

        let nome = document.createElement("h3")
        nome.textContent = element.name

        let species = document.createElement("h5")
        species.textContent = element.species

        let id = element.id
        
        card.addEventListener("click", function(){
            window.location.href = `pag2.html?chave=${id}`;
        })

        card.appendChild(img)
        card.appendChild(nome)
        card.appendChild(species)

        container.appendChild(card)


    })
}

loadUsers()