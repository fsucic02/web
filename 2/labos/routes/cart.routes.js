var express = require('express');
var router = express.Router();
const data = require('../data/data');

router.post('/add/:id', (req, res) => {
    const id = parseInt(req.params.id); 
  
    req.session.kosarica = req.session.kosarica || {}; // stvaramo objekt sesije za kosaricu (po potrebi)
    req.session.kosarica[id] = (req.session.kosarica[id] || 0) + 1; // povecavamo broj proizvoda tipa :id
  
    req.session.suma = req.session.suma || 0; // ovime pratim ukupan broj proizvoda
    req.session.suma += 1;

    res.sendStatus(200);
});

router.post('/remove/:id', (req, res) => {
    const id = parseInt(req.params.id); 
  
    req.session.kosarica = req.session.kosarica || {};
    req.session.kosarica[id] = (req.session.kosarica[id] || 0) - 1;
  
    req.session.suma = req.session.suma || 0;
    req.session.suma -= 1;

    res.sendStatus(200);
});

router.get('/getAll', (req, res) => {
    res.render('cart', {
        kosarica: req.session.kosarica, // za generiranje potrebnog htmla
        suma: req.session.suma,
        data: data
    });
});

module.exports = router;