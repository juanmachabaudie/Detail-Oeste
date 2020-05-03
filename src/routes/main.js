// ************ Require's ************
const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator')

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.home);

/*-------- Others from main. -----------*/

router.get('/carrito', mainController.carrito);

router.get('/servicios', mainController.servicios);

router.get('/turnos', mainController.turnos);

router.get('/logIn', mainController.logIn);
router.post('/logIn', mainController.processLogIn);

router.get('/registrarse', mainController.registrarse);
router.post('/registrarse', [
    check('nombreDeUsuario')
        .isLength({ min: 3 }).withMessage('Pone un nombre para identificarte'),
    check('direccion')
        .isLength({ min: 5 }).withMessage('Necesitamos tu dirección para poder enviarte tus compras.'),
    check('celular')
        .isInt({ min: 8 }).withMessage('Necesitamos algún teléfono para contactarte.'),
    check('mail')
        .isEmail().withMessage('Necestamos un eMail válido.'),
    check('password')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.'),
    body('confirmarPassword', 'Las contraseñas deben coincidir.').custom((value, { req }) => {
        if (value !== req.body.password) {
            //retorna que es un error.
            return false;
        } else {
            //lo procesó correctamente.
            return true;
        }
    })
], mainController.processRegister);

module.exports = router;
