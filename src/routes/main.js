// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.root);

/*-------- Others from main. -----------*/

router.get('/servicios', (req, res)=>{
    res.send('Bienvenidos a los servicios')
});

router.get('/turnos', (req, res)=>{
    res.send('Bienvenidos a los turnos')
});

router.get('/nosotros', (req, res)=>{
    res.send('Aquí tiene nuestra información.')
});

module.exports = router;
