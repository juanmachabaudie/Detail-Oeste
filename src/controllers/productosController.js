let productosController = {

    listado: (req,res)=>{
        res.render('productos')
    },

    detalle: (req, res)=>{
        res.render('detalleProductos')
    },

    crear: (req, res)=>{
        res.render('crearProductos')
    },

    editar: (req, res)=>{
        res.render('editarProductos')
    }
};

module.exports = productosController;