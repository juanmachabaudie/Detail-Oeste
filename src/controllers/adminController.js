const db = require('../database/models/');
const Productos = db.productos
const Marcas = db.marcas
const Categorias = db.categorias

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
            Categorias
            .findAll()
            .then(categorias => {
                res.render('admin/crearProductos',{
                    title:'Product Create',
                    marcas,
                    categorias
                }); 
            }).catch(error => res.send(error));
        })
        .catch(error => res.send(error));
    },

    guardarProducto:(req, res)=>{
        let form = req.body;
        let iterForm = Object.keys(form);
        var clasificacion = '';
        iterForm.forEach(element => {
            
            if (element === 'clasificacion_int') {
                clasificacion = 'Interior ';
            } if (element === 'clasificacion_ext'){
                clasificacion = clasificacion + 'Exterior';
            }
        });
        
        
        Productos
        .create({
            ...req.body,
            clasificacion: clasificacion
        })
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