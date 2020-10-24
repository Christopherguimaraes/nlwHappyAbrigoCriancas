const map = L.map('mapid').setView([-27.1740833,-51.5127912], 15)
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

//creat poup overlayer
const popup = L.popup ({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html" class="choose-orphanage"> <img src="/nlw/public/images/arrow-white.svg"></a>')

//creat and add marker
L.marker([-27.1740833,-51.5127912], {icon})
.addTo(map)
    .bindPopup(popup)
    