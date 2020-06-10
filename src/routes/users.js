// ************ Require's ************
const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const { check, body } = require('express-validator');

router.get('/registrarse', usersController.registrarse);
router.post('/registrarse', [
    check('nombreDeUsuario')
        .isLength({ min: 3 }).withMessage('Pone un nombre para identificarte.'),
    check('direccion')
        .isLength({ min: 5 }).withMessage('Necesitamos tu dirección para poder enviarte tus compras.'),
    check('celular')
        .isInt({ min: 8 }).withMessage('Necesitamos algún teléfono para contactarte.'),
    check('mail')
        .isEmail().withMessage('Necestamos un eMail válido.'),
    check('clave')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres.'),
    body('confirmarClave', 'Las contraseñas deben coincidir.').custom((value, { req }) => {
        if (value !== req.body.clave) {
            //retorna que es un error.
            return false;
        } else {
            //lo procesó correctamente.
            return true;
        }
    })
], usersController.processRegister);

router.get('/logIn', usersController.logIn);
router.post('/logIn', [
    check('mail').isLength({min: 1}).withMessage('Escribí tu eMail.'),
    check('clave').isLength({min: 1}).withMessage('Escribí tu Contraseña.'),
        
], usersController.processLogIn);

module.exports = router;