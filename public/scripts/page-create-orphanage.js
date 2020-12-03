// create map
const map = L.map('mapid').setView([-27.2212551, -49.6485284], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    // add icon tileLayer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
});

// adicionar o campo de photos
function addPhotoField(){
    // pegar o container de fotos #images 
    const container = document.querySelector('#images');
    
    // pergar o container para duplicar .new-images
    const fieldsContainer = document.querySelectorAll('.new-upload');
    
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // container anterior = a nada então nao adicione
    const input = newFieldContainer.children[0];

    if(input.value == ''){
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = '';

    // adicionar o container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1){
        // limpar o valor do campo
        span.parentNode.children[0].value = '';
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// select yes or no
function toggleSelect(event){
    //pergar o botao clicado
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active');
    });
    //colocar a class .active nesse botao clicado
    const button = event.currentTarget;
    button.classList.add('active');
    
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se sim ou nao
    input.value = button.dataset.value;
    
}

// const needsLatAndLng = 0;
// function ColocoOPontoNoMapa(){
    // needsLatAndLng = 1;
    // console.log('apertou');
// }

// function validate(event){
    // if(needsLatAndLng == 1){
        // event.preventDefault();
        // alert('Por favor selecione um ponto no mapa');
    // }
// }
