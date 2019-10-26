const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = Schema({
    name: String,
    lastname:String,
    phone:String,
    email: String,
    address: {
        street: String,
        numberStreet: String,
        city: String,
        location: {
            localities: String
        }
    }
});

module.exports = mongoose.model('Client', ClientSchema);