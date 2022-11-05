import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import prouctList from './mock/products.js'
import cart from './mock/cart.js';

let updatedCart = cart;

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/products', (req, res) => {
    res.send(prouctList);
});

app.get('/cart', (req, res) => {
    res.send(cart);
});

app.post('/cart', (req, res) => {
    updatedCart = req.body;
    res.send(updatedCart);
});

app.post('/checkout', (req, res) => {
    res.send('purchase complete');
});

app.listen(5000, () =>
  console.log('Kuch alfaaz listening on port 5000!'),
);