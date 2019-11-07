//indico la ruta de los archivos .env mas el script(development o production) a la config de dotenv
require('dotenv').config({
    path: '/./.env'+ process.env.NODE_ENV
});

//const env = process.env.NODE_ENV || 'development';
//path: path.resolve(process.cwd(), '.env' + process.env.NODE_ENV)

const mongoose = require('mongoose');
const app = require('./App'); 
const config = require('./config');
const configMongoose = {
    autoIndex: false,
    useNewUrlParser: true,
};

console.log('Entorno de:', process.env.NODE_ENV);

mongoose.connect(config.db, configMongoose,(err, res)=>{
    if (err) throw err
    console.log('Conexion con la bd establecida');
    app.listen(config.port, () => {
        console.log('En el puerto:', config.port);
    });
});







/* --------- Config para un solo archivo .env

    if(process.env.NODE_ENV === "development") require('dotenv').config();

    const mongoose = require('mongoose');
    const app = require('./App'); 
    const config = require('./config');
    const configMongoose = {
        autoIndex: false,
        useNewUrlParser: true,
    };

    console.log('entorno de:', process.env.NODE_ENV);

    mongoose.connect(config.db, configMongoose,(err, res)=>{
        if (err) throw err
        console.log('conexion con la bd establecida');
        app.listen(config.port, () => {
            console.log('puerto:', config.port);
        });
    });

*/