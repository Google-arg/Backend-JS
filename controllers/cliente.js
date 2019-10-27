const Cliente = require('../models/Client');

const getClients = (req, res) =>{
    Cliente.find({}, (err, clientes)=>{
        if(err)return res.status(500).send({mesage:`error al hacer la peticion ${err}`})
        if(!clientes) return res.status(404).send({mesage: `no hay clientes`})
        //res.send(200, {clientes}) deprecado
        res.status(200).send({clientes})
    })
    //res.status(550).send('no esta entrando a la bd')
} 

const saveClient = (req, res) =>{
    console.log(req.body)
    let cliente = new Cliente();
    cliente.name = req.body.name;
    cliente.lastname = req.body.lastname;
    cliente.address = req.body.address;
    cliente.location = req.body.location;
    cliente.phone = req.body.phone;
    cliente.email = req.body.email;
    cliente.dateDelivery = req.body.dateDelivery;
    cliente.product = req.body.product;
    cliente.quantity = req.body.quantity;
    cliente.price= req.body.price;
    cliente.comments = req.body.comments;

    cliente.save((err, almacenarPedido)=>{
        if(err) res.status(500).send({mesage: `Error al salvar en la base de datos ${err}`})
        //res.status(200).send({cliente: almacenarCliente}) imprimo registro en formato json
        res.status(200).send('se ha guardado exitosamente el registro')
    } )
}

const deleteClient = (req, res) =>{
    let clienteId = req.params.clienteId;
    Cliente.findById(clienteId, (err, cliente)=>{
        if(err) res.status(500).send({mesage:`error al borra el cliente ${err}`});
        cliente.remove((err) => {
            if(err) res.status(500).send({mesage:`error al borra el cliente ${err}`});
            res.status(200).send({mesage: 'el cliente se ha sido eliminado de forma exitosa'})
        })
    })
}

module.exports = {
    getClients,
    saveClient,
    deleteClient
}



/*
    const updateClient = (req, res) =>{
        let clientesId = req.params.clientesId;
        let updateOrder = req.body;

        Cliente.findByIdAndUpdate(clientesId, updatePedido, (err, orderUpdated) => {
            if(err) res.status(500).send({mesage:`error al borra el cliente ${err}`});

            res.status(200).send({cliente: orderUpdated});
        });
    }

    const getClient =(req, res) =>{
        let clientesId = req.params.clientesId;
        Cliente.findById(clientesId, (err, cliente) =>{
            if(err)return res.status(500).send({mesage:`error al hacer la peticion ${err}`})
            if(!cliente) return res.status(404).send({mesage: `no exite el cliente`})
            res.status(200).send({cliente});
        })
    }
*/