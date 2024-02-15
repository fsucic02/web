var express = require('express');
var router = express.Router();
const data = require('../data/data')

router.get('/getCategories', function(req, res, next) { // nisam znao sto bih drugo s ovom rutom, osim toga prof. Boticki je rekao da je redundantna ako po defaultu loadamo proizvode prve kategorije (kao u prvom labosu)
    res.redirect('/home/getProducts/0');
});

router.get('/getProducts/:id', function(req, res, next) {
    let id = parseInt(req.params.id);
    if (!(0 <= id && id <= 9)) {
        res.status(404).send('There is no such category (yet &#128521)'); // imamo 10 kategorija, ako korisnik rucno pokusa ucitati kategoriju koja ne postoji, saljemo 404
        return;
    } 

    let addend = data.categories.findIndex((category) => { 
        return category.name == data.categories[id].name;
    });
    
    res.render('home', {
        data: data,
        title: data.categories[id].name, // ime trazene kategorije 
        products: data.categories[id].products, // proizvodi trazene kategorije
        add: addend * 5, // za argument funkcije u kojoj mijenjam izgled stranice pri dodavanju proizvoda u kosaricu (efektivno za postavljanje id-a proizvoda)
        kosarica: req.session.kosarica, // kosarica trenutne sesije da bih vidio koji su proizvodi u kosarici i u skladu s tim generirao html
        suma: req.session.suma // redundantan podatak, ali radije sam ovako nego da runnam loop svaki put u home.ejs
    });
});

module.exports = router;