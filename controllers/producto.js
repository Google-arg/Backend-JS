const Producto = require('../models/Product');

const saveProduct = (req, res) =>{
    console.log(req.body)
    let producto = new Producto();
    producto.category = req.body.category;
    producto.marc = req.body.marc;
    producto.name = req.body.name;
    producto.stock = req.body.stock;
    producto.price = req.body.price;

    producto.save((err, almacenarPedido)=>{
        if(err) res.status(500).send({mesage: `Error al salvar en la base de datos ${err}`})
        res.status(200).send('se ha guardado exitosamente el registro')
    })
}

const getProduct = (req, res) =>{
    Producto.find({}, (err, producto)=>{
        if(err)return res.status(500).send({mesage:`error al hacer la peticion ${err}`})
        if(!producto) return res.status(404).send({mesage: `no exite el cliente`})
        res.status(200).send({producto})
    })
}

module.exports = { saveProduct, getProduct }
     
 
 