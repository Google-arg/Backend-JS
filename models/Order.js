const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = Schema({
    Client: { type: Schema.Types.ObjectId, ref: 'Client' },
    Product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    dateDelivery: String,
});

//crear el modelo 'Pedido' a partir de PedidoSchema.
module.exports = mongoose.model('Order', OrderSchema);