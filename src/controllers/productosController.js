const db = require('../database/models/');
const Productos = db.productos
const Marcas = db.marcas

let productosController = {

    listado: (req, res)=>{
        Productos
        .findAll()
        .then(productos => {
            return res.render('products/productos',{
                productos
            });
        })
        .catch(error=> res.send(error));

    },

    detalle: (req, res)=>{
        Productos
        .findByPk(req.params.id,{
            include: ['marca']
        })
        .then(productos => {
            return res.render('products/detalleProductos',{
                title:`Detalle de ${productos.nombre}`, //NO MUESTRA EL TITULO
                productos
            });
        })
        .catch(error=> res.send(error));
    }
};

module.exports = productosController;