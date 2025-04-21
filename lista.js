let lista = document.querySelector(".list")
for (let i = 1; i < 827; i++){
    let title = `Character ${i}`
    let message = `Esta es mi publicación numero ${i}. Esto es una prueba de generación de relleno por medio de funciones y ciclos`
    let imageUrl = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`
    let div = createPost(title,message,imageUrl)
    lista.append(div)
}

function createPost(name, message, imageUrl){
    let div = document.createElement("div")
    div.className = "character"
    let imagen = document.createElement("img")
    imagen.setAttribute("src", imageUrl)
    imagen.setAttribute("loading","lazy")
    imagen.className = "image"
    div.appendChild(imagen)
    let character_name = document.createElement("h1")
    character_name.textContent = name
    div.appendChild(character_name)
    let description = document.createElement("p")
    description.textContent = message
    div.appendChild(description)
    return div


}