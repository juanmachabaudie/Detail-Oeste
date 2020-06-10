const express = require('express');
const router = express.Router();
const multer = require('multer');
let path = require('path');
const fs = require('fs');

const adminController = require('../controllers/adminController');

// Multer implementation
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = `public/images/productos/${req.body.nombre}`;
        fs.mkdirSync(path, { recursive: true })
        return cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage
});

/*------------------------------------------------*/

router.get('/', adminController.main);

router.get('/productos', adminController.listadoProductos);

// router.get('/productos/detalle', adminController.detalleProductos);

router.get('/productos/crear', adminController.crearProducto);
router.post('/productos/crear', upload.any('file'), adminController.guardarProducto);

router.get('/productos/editar', adminController.editarProducto);

module.exports=router;