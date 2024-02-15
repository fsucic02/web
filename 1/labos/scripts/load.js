const cart = document.querySelector(".cart");

let help = localStorage.getItem('kosarica');
let artikli = JSON.parse(help);
let kosaricacounterhelp = localStorage.getItem('kosaricacounter');
let counter = JSON.parse(kosaricacounterhelp);

if (counter == 0) {
    cart.innerHTML += `
        <div class="empty">
            <p> Trenutno nijedan proizvod nije u košarici! </p>
        </div>
    `
}

function decrementCounter(i) {
    artikli[i]--;
    counter--;
    
    if (counter == 0) {
        cart.innerHTML += `
            <div class="empty">
                <p> Trenutno nijedan proizvod nije u košarici! </p>
            </div>
        `
    }
    localStorage.setItem('kosarica', JSON.stringify(artikli));
    localStorage.setItem('kosaricacounter', JSON.stringify(counter));

    let amountwrapper = document.getElementById(i);
    amountwrapper.innerHTML = "";
    if (artikli[i] != 0) {
        amountwrapper.innerHTML = `
            <i class="bx bx-minus" onclick="decrementCounter(${i})"></i>
            <div> </div>
            ${artikli[i]}
            <div> </div>
            <i class="bx bx-plus" onclick="incrementCounter(${i})"></i>
    `
    } else { // moramo obrisat div
        amountwrapper.parentElement.remove();
    }

}

function incrementCounter(i) {
    artikli[i]++;
    counter++;

    localStorage.setItem('kosarica', JSON.stringify(artikli));
    localStorage.setItem('kosaricacounter', JSON.stringify(counter));

    let amountwrapper = document.getElementById(i);
    amountwrapper.innerHTML = "";
    amountwrapper.innerHTML = `
        <i class="bx bx-minus" onclick="decrementCounter(${i})"></i>
        <div> </div>
        ${artikli[i]}
        <div> </div>
        <i class="bx bx-plus" onclick="incrementCounter(${i})"></i>
    `
}

for (let i = 1; i < 51; i++) {
    if (artikli[i] > 0) { // korisnik je ovaj proizvod dodao u kosaricu
        cart.innerHTML += `
        <div class="product-stats">
          <p class="product-name"> ${data.categories[Math.floor((i-1)/5)].products[(i-1)%5].name} </p>
          <div class="amount-wrapper" id="${i}">
            <i class="bx bx-minus" onclick="decrementCounter(${i})"></i>
            <div> </div>
            ${artikli[i]} 
            <div> </div>
            <i class="bx bx-plus" onclick="incrementCounter(${i})"></i>
          </div>
        </div>
        `
    }
}