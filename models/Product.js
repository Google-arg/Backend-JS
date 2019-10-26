const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    category: String,
    marc: String,
    name: String,
    stock: Number,
    price: String
});

module.exports = mongoose.model('Product', ProductSchema);