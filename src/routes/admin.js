const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.main);

router.get('/productos', adminController.listadoProductos);

// router.get('/productos/detalle', adminController.detalleProductos);

router.get('/productos/crear', adminController.crearProducto);
router.post('/productos/crear', adminController.guardarProducto);

router.get('/productos/editar', adminController.editarProducto);

module.exports=router;