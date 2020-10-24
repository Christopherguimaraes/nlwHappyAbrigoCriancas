const map = L.map('mapid').setView([-27.1740833,-51.5127912], 15)
//create map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create and add tileLayer


//create icon
const icon = L.icon ({
    iconUrl: "/nlw/public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector ('[name=lat]').value = lat;
    document.querySelector ('[name=lng]').value = lng;
    // remover icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat,lng], {icon}) .addTo(map)
})

//adicionar o campo de fotos
function addPhotoField() {
    //pegar o container de fotos
    const container = document.querySelector('#images')
    //pegar o container para duplicar 
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar a duplicação de fotos
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //verificar se o campo está vazio, se sim, não adicionar ao container
    const input = newFieldContainer.children[0]
    if(input.value == "") {
        return
    }
    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    //adicionar ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll ('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return;
    }
    //deletar o campo
    span.parentNode.remove();
}

// troca do sim e não 
function toggleSelect(event){
//retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button') 
        .forEach( function(button) {button.classList.remove('active')
})

//colocar a class .active
const button = event.currentTarget
button.classList.add('active')
//atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    //verificar se sim ou não
    input.value = button.dataset.value 


}