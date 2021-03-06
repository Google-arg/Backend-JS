const express = require('express');
const api = express.Router();
const pedidoCtrl = require('../controllers/pedido');
const clienteCtrl = require('../controllers/cliente');
const productoCtrl = require('../controllers/producto');

//**********Routes pedido ***********
api.post('/pedido', pedidoCtrl.saveOrder);
api.get('/pedido', pedidoCtrl.getOrders);
api.delete('/pedido/:pedidoId', pedidoCtrl.deleteOrder);

//**********Routes cliente ***********
api.get('/cliente', clienteCtrl.getClients);
api.post('/cliente', clienteCtrl.saveClient);
api.delete('/cliente/:clienteId', clienteCtrl.deleteClient);

//**********Routes producto ***********
api.post('/nuevoproducto', productoCtrl.saveProduct);
api.get('/producto', productoCtrl.getProduct);

//**********Routes TEST ***********
api.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
})
api.get('/', async (req, res) => {
    res.status(200).json({message: 'Bienvenido!'})
})

module.exports = api;