// Making a map and tiles 
const mymap = L.map('mapid')
const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Creating de marker in map
var myIcon = L.icon({
    iconUrl: 'img/iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
});
const marker = L.marker([0,0], {icon: myIcon}).addTo(mymap);

const url = "https://api.wheretheiss.at/v1/satellites/25544";
// window.setInterval(getAPIISS,100);

let firstTime = true;

async function getAPIISS(){
  const response = await fetch(url);
  const data = await response.json();
  marker.setLatLng([data.latitude,data.longitude]);
  if(firstTime){
    mymap.setView([data.latitude,data.longitude],5);
    firstTime = false;
  }
  document.getElementById("lat").innerText = (data.latitude).toFixed(3);
  document.getElementById("long").innerText = (data.longitude).toFixed(3);
  document.getElementById("vel").innerText = (data.velocity).toFixed(3);
}

getAPIISS();

setInterval(getAPIISS,1000);