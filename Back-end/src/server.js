const express = require('express');
const cors = require('cors');
const controller = require('./controller');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/fishes', controller.getFishes);
app.get('/orders', controller.getOrders);
app.post('/orders', controller.addOrder);
app.delete('/orders', controller.clearOrders);
app.delete('/orders/:id', controller.removeOrder);

app.listen(8080, () => console.log('Server ON'));
