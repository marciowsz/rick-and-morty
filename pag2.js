const urlParams = new URLSearchParams(window.location.search);
const valorRecebido = urlParams.get('chave');
async function loadUser(){
    const res = await fetch(`https://rickandmortyapi.com/api/character/${valorRecebido}`);
    const element = await res.json();
    console.log(valorRecebido)

    let container = document.querySelector(".painel")
    console.log()

    console.log(element)
        let card = document.createElement("div")
        card.classList.add("card")

        let informacao = document.createElement("div")
        informacao.classList.add("informacao")

        let img = document.createElement("img")
        img.src = element.image

       

        let name = document.createElement("h1")
        name.textContent = element.name

        let titulo = document.createElement("h2")   
        titulo.textContent = "Informação"

        let titleStatus = document.createElement("h3")
        titleStatus.textContent = "Status"
        let status = document.createElement("h4")
        status.textContent = element.status

        let titleSpecies = document.createElement("h3")
        titleSpecies.textContent = "Species"
        let species = document.createElement("h4")
        species.textContent = element.species

        let titleType = document.createElement("h3")
        titleType.textContent = "Type"
        let type = document.createElement("h4")
        type.textContent = element.type

        let titleGender = document.createElement("h3")
        titleGender.textContent = "Gender"
        let gender = document.createElement("h4")
        gender.textContent = element.gender

        let titleOrigin = document.createElement("h3")
        titleOrigin.textContent = "Origin"
        let origin = document.createElement("h4")
        origin.textContent = element.origin.name
        
        let titleLocation = document.createElement("h3")
        titleLocation.textContent = "Location"
        let location = document.createElement("h4")
        location.textContent = element.location.name

        

        card.appendChild(img)
        card.appendChild(name)
        informacao.appendChild(titulo)
        informacao.appendChild(titleStatus)
        informacao.appendChild(status)
        informacao.appendChild(titleSpecies)
        informacao.appendChild(species)
        informacao.appendChild(titleType)
        informacao.appendChild(type)
        informacao.appendChild(titleGender)
        informacao.appendChild(gender)
        informacao.appendChild(titleOrigin)
        informacao.appendChild(origin)
        informacao.appendChild(titleLocation)
        informacao.appendChild(location)
        
        card.appendChild(informacao)
        container.appendChild(card)
    
        };

loadUser()