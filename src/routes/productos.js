const express = require('express');
const productosController = require("../controllers/productosController");

const router = express.Router();

router.get('/', productosController.listado);

router.get('/detalle', productosController.detalle);

router.get('/crear', productosController.crear);

router.get('/editar', productosController.editar);

module.exports = router;