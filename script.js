function receiveParams(){
    let name = document.getElementById("name").value
    let message = document.getElementById("message").value
    let imageUrl = document.getElementById("imageUrl").value
    createPost(name, message, imageUrl)
}

function createPost(name, message, imageUrl){
    let div = document.createElement("div")
    div.className = "character"
    let imagen = document.createElement("img")
    imagen.setAttribute("src", imageUrl)
    imagen.className = "image"
    div.appendChild(imagen)
    let character_name = document.createElement("h1")
    character_name.textContent = name
    div.appendChild(character_name)
    let description = document.createElement("p")
    description.textContent = message
    div.appendChild(description)
    let lista = document.querySelector(".list")
    lista.append(div)

}