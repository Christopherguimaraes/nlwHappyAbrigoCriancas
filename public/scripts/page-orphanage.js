const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl:false
}


const map = L.map('mapid', options).setView([-27.1740833,-51.5127912], 15)
//create map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create and add tileLayer


//create icon
const icon = L.icon ({
    iconUrl: "/nlw/public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//creat and add marker
L.marker([-27.1740833,-51.5127912], {icon})
.addTo(map)

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
const buttons = document.querySelectorAll(".images button")
buttons.forEach(removeActiveClass)

function removeActiveClass(button) {
    button.classList.remove("active")
}
    //selecionar a imagem clicada
const image = button.children [0]
const imageContainer = document.querySelector (".orphanage-details > img")
    //atualizar o container de image
imageContainer.src = image.src
    //adicionar a classe .active para este botao
button.classList.add ('active')
   
}

    