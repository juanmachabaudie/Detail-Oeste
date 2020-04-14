const express = require('express');
const productosController = require("../controllers/productosController");

const router = express.Router();

router.get('/', productosController.listado);

router.get('/detalle/:id', productosController.detalle);

module.exports = router;