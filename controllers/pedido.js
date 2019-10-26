const Pedido = require('../models/Order');

const saveOrder = (req, res) =>{
    console.log(req.body)
    // console.log(req.body.id_Client)
    let pedido = new Pedido();
    pedido.Client = req.body.Client;
    pedido.Product = req.body.Product;
    pedido.dateDelivery = req.body.dateDelivery;
    pedido.quantity = req.body.quantity;

    pedido.save((err, almacenarPedido)=>{
        if(err) res.status(500).send({mesage: `Error al salvar en la base de datos ${err}`})
        res.status(200).send('se ha guardado exitosamente el registro')
    })
}

const getOrders = (req, res) =>{
    Pedido
        .find({})
        .populate('Client Product')
        .exec(
            function(err, pedidos){
                if(err)return res.status(500).send({mesage:`error al hacer la peticion ${err}`})
                if(!pedidos) return res.status(404).send({mesage: `no exite el pedido`})
                res.status(200).send({pedidos});
            } 
        )
}

const deleteOrder = (req, res) =>{
    let orderId = req.params.pedidoId;
    Pedido.findById(orderId, (err, pedido)=>{
        if(err) res.status(500).send({mesage:`error al borra el pedido ${err}`});
        pedido.remove((err) => {
            if(err) res.status(500).send({mesage:`error al borra el pedido ${err}`});
            res.status(200).send({mesage: 'el pedido se ha sido eliminado de forma exitosa'})
        })
    })
}

module.exports = {
    saveOrder,
    getOrders,
    deleteOrder
}

 


/* 
//********* original sin populate funcionando  //*********** 
    const getOrders = (req, res) =>{

         Pedido.find({}, (err, pedidos) =>{
             if(err)return res.status(500).send({mesage:`error al hacer la peticion ${err}`})
             if(!pedidos) return res.status(404).send({mesage: `no exite el pedido`})
             res.status(200).send({pedidos});
         }) 
    }
*/
