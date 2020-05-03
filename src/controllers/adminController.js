const db = require('../database/models/');
const Productos = db.productos
const Marcas = db.marcas

let adminContoller = {

    main:(req, res)=>{
        res.render('admin/adminProfile');
    },

    listadoProductos: (req,res)=>{

        Productos
        .findAll()
        .then(productos => {
            return res.render('products/productos',{
                productos
            });
        })

    },

    detalleProductos: (req, res)=>{
        res.render('products/detalleProductos')
    },

    crearProducto:(req, res)=>{
        Marcas
        .findAll()
        .then(marcas => {
            res.render('admin/crearProductos',{
                title:'Product Create',
                marcas
            });
        })
        .catch(error => res.send(error));
    },

    guardarProducto:(req, res)=>{
        Productos
        .create(req.body)
        .then(producto => {
            return res.redirect(`/productos/detalle/${producto.id}`);
            })
        .catch(error => res.send(error))
    },

    editarProducto:(req, res)=>{
        res.render('admin/editarProductos');
    },

    
    
};

module.exports = adminContoller;