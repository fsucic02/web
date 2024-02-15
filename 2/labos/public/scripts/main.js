function addToCart(id) { 
    let counter = document.getElementById(id);
    counter.innerHTML = parseInt(counter.innerHTML) + 1; // povecavamo broj proizvoda 
    counter.style.opacity = 1; // broj proizvoda je barem 1 pa moramo postaviti da se broj zapravo vidi
    
    let mcounter = document.getElementById('main');
    mcounter.innerHTML = parseInt(mcounter.innerHTML) + 1; // povecavamo broj proizvoda (gornji desni kut)
    mcounter.style.opacity = 1; // barem 1 je, moramo postaviti da se vidi
    
    fetch(`/cart/add/${id}`, { // saljemo post request da bismo na serverskoj strani osvjezili broj proizvoda u kosarici
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
}

let temp = -1; // varijabla u kojoj cuvam koliko tipova proizvoda prikazujem kako bih znao kad moram obrisati sve i napisati da 
               // nista nije u kosarici
function changeCounter(id, operation, ukupanBroj) {
  let counter = document.getElementById(`counterfor${id}`);
  if (temp == -1) { temp = ukupanBroj; }
  if (operation == 0) {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
    if (parseInt(counter.innerHTML) == 0) {
      // makivamo proizvod
      document.getElementById(`wrapperfor${id}`).remove();
      temp--;
    }
    fetch(`/cart/remove/${id}`, { // saljemo post request da bismo na serverskoj strani osvjezili broj proizvoda u kosarici
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (temp == 0) {
      // obrisali smo sve proizvode
      document.getElementById('target').remove();
      document.getElementsByClassName('wrapper')[0].innerHTML += `
        <div class="cart" id="target">
          <div class="name-amount">
              <p class="name"> NAZIV </p>
              <p class="amount"> KOLIČINA </p>
          </div>

          <div class="empty">
            <p> Trenutno nijedan proizvod nije u košarici! </p>
          </div>
        </div>
      ` 
    }
  } else {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
    fetch(`/cart/add/${id}`, { // saljemo post request da bismo na serverskoj strani osvjezili broj proizvoda u kosarici
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}