const fs = require('fs');
const path = require('path');
const bcrypt = require("bcrypt");
const db = require('../database/models/');
const Usuarios = db.usuarios;
const { validationResult } = require('express-validator');

const usersController = {

    registrarse: (req, res) => {
        res.render('users/registrarse')
    },
    processRegister: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let claveEncriptada = bcrypt.hashSync(req.body.clave, 10);

            Usuarios
                .create({
                    ...req.body,
                    clave: claveEncriptada,
                })
                .then(usuario => {
                })

                .catch(error => res.send(error))

            return res.redirect("/");

        } res.render('users/registrarse', { errors: errors.errors })
    },

    logIn: (req, res) => {
        res.render('users/LogIn');
    },
    processLogIn: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            Usuarios.findOne({
                where: {
                    mail: req.body.mail,
                },
            })
                .then((userToLog) => {

                    if (userToLog == undefined) {
                        return res.render('main/LogIn', {
                            errors: [
                                { msg: "Mail incorrecto." },
                            ]
                        })
                    } else {

                        if (bcrypt.compareSync(`${req.body.clave}`, `${userToLog.clave}`)) {
                            req.session.usuarioLoggeado = userToLog;
                            res.cookie("usuarioCookie", userToLog.id, { maxAge: 60000 * 100 });
                            return res.redirect("/");
                        } else {
                            return res.render('main/LogIn', {
                                errors: [
                                    { msg: "Contraseña incorrecta." },
                                ]
                            })
                        }
                    }
                })
        } else {
            return res.render('users/LogIn', { errors: errors.errors })
        }
    },

};

module.exports = usersController;