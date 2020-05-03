const fs = require('fs');
const path = require('path');
const db = require('../database/models/');
const Usuarios = db.usuarios;
const { check, validationResult, body } = require('express-validator')


const controller = {
	home: (req, res) => {
		res.render('main/index')
	},
	carrito: (req, res) => {
		res.render('main/carrito')
	},
	servicios: (req, res) => {
		res.render('main/servicios')
	},

	turnos: (req, res) => {
		res.render('main/turnos')
	},

	nosotros: (req, res) => {
		res.render('main/nosotros')
	},

	logIn: (req, res) => {
		res.render('main/LogIn');
	},
	processLogIn: (req, res) => {
		res.redirect("/");  //???????????????????????????
	},
	registrarse: (req, res) => {
		res.render('main/registrarse')
	},
	processRegister: (req, res) => {

		Usuarios
		.create(req.body)                //--------------------------
		.then(usuario => {
            return res.redirect("/");
            })
		.catch(error => res.send(error))
		
		let errors = validationResult(req);

		if (errors.isEmpty()) {
			res.redirect("/");
		} res.render('main/registrarse', { errors: errors.errors })
	},

};

module.exports = controller
