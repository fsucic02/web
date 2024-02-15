const express = require('express');
const app = express();
var path = require('path');
const session = require('express-session');

app.use(session({
    secret: 'kosarica', 
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1800000 }
}));

app.get('/', (req, res) => {
    res.redirect('/home/getCategories');
});

const homeRouter = require('./routes/home.routes');
const cartRouter = require('./routes/cart.routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/home', homeRouter);
app.use('/cart', cartRouter);

app.listen(3000);