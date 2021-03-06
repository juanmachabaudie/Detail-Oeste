// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.home);

/*-------- Others from main. -----------*/

router.get('/carrito', mainController.carrito);

router.get('/servicios', mainController.servicios);

router.get('/turnos', mainController.turnos);

module.exports = router;
