const title = document.getElementById('title');
const kopacke = document.getElementById('c0');
kopacke.style.fontSize = "2rem";
const lr = document.getElementById('c1');
const sprint = document.getElementById('c2');
const indoor = document.getElementById('c3');
const basket = document.getElementById('c4');
const stikle = document.getElementById('c5');
const cipele = document.getElementById('c6');
const cizme = document.getElementById('c7');
const planinarenje = document.getElementById('c8');
const espadrile = document.getElementById('c9');

function resetSizes() {
    const category = document.querySelectorAll(".category");
    category.forEach((item) => {
        item.style.fontSize = "1.2rem";
    })
}

kopacke.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Kopačke';
    kopacke.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 1;
    data.categories[0].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

lr.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Long run tenisice';
    lr.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 6;
    data.categories[1].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

sprint.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Sprinterice';
    sprint.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 11;
    data.categories[2].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

indoor.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Indoor tenisice';
    indoor.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 16;
    data.categories[3].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

basket.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Tenisice za košarku';
    basket.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 21;
    data.categories[4].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

stikle.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Štikle';
    stikle.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 26;
    data.categories[5].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

cipele.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Cipele';
    cipele.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 31;
    data.categories[6].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

cizme.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Čizme';
    cizme.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 36;
    data.categories[7].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

planinarenje.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Cipele za planinarenje';
    planinarenje.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 41;
    data.categories[8].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

espadrile.addEventListener("click", function(){
    let temp = localStorage.getItem('kosarica');
    if (temp) {
        kosarica = JSON.parse(temp);
    }
    resetSizes();
    title.innerHTML = 'Espadrile';
    espadrile.style.fontSize = "2rem";
    const products = document.querySelector(".products");
    products.innerHTML = "";
    let i = 46;
    data.categories[9].products.forEach(function(item){
        products.innerHTML += `
        <div class="product">
            <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
            <div class="cart-counter-wrapper">
                <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
                <p class="counter" id ="${i}"> ${kosarica[i]} </p>
            </div>
            <p class="tag">${item.name}</p>
        </div>
        `
        const temp = document.getElementById(i);
        if (kosarica[i] > 0) {
            temp.style.opacity = 1;
        }
        i += 1;
    })
});

resetSizes();
title.innerHTML = 'Kopačke';
kopacke.style.fontSize = "2rem";
const products = document.querySelector(".products");
products.innerHTML = "";
let i = 1;
data.categories[0].products.forEach(function(item){
    products.innerHTML += `
    <div class="product">
        <img src="images/${item.image}" alt="${item.name}" height="80%" width="100%">
        <div class="cart-counter-wrapper">
            <img src="images/cart.png" class="cart-hover" height="30" width="30" onclick="updateCounter(${i})">
            <p class="counter" id ="${i}"> ${kosarica[i]} </p>
        </div>
        <p class="tag">${item.name}</p>
    </div>
    `
    const temp = document.getElementById(i);
    if (kosarica[i] > 0) {
        temp.style.opacity = 1;
    }
    i += 1;
})


let temp = localStorage.getItem('kosaricacounter');
if (temp) {
    temp = JSON.parse(temp);
    let c = document.querySelector('.main-counter');
    c.innerHTML = `<p class="mcounter" id="main"> ${temp} </p>`
    const mcounter = document.getElementById("main");
    if (Number(mcounter.innerHTML) > 0) {
        mcounter.style.opacity = 1;
    }
}