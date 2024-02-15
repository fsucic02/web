let kosarica = {};

const kosaricaIzLocalStoragea = localStorage.getItem('kosarica');
if (kosaricaIzLocalStoragea) {
  kosarica = JSON.parse(kosaricaIzLocalStoragea);
} else {
  for (let i = 1; i < 51; i++) {
    kosarica[i] = 0;
  }
}

let kosaricaCounter = 0;

const kosaricaCounterIzLocalStoragea = localStorage.getItem('kosaricacounter');
if (kosaricaCounterIzLocalStoragea) {
  kosaricaCounter = JSON.parse(kosaricaCounterIzLocalStoragea);
}

function updateCounter(id) {
  const counter = document.getElementById(`${id}`);
  counter.style.opacity = "1";
  kosarica[id]++;
  counter.innerHTML = kosarica[id];

  kosaricaCounter++;
  const mcounter = document.getElementById("main");
  mcounter.style.opacity = "1";
  mcounter.innerHTML = kosaricaCounter;
  
  localStorage.setItem('kosarica', JSON.stringify(kosarica));
  localStorage.setItem('kosaricacounter', JSON.stringify(kosaricaCounter));
}