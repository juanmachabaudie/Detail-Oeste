const fs = require('fs');
const path = require('path');

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

	// nosotros: (req, res) => {
	// 	res.render('main/nosotros')
	// },

};

module.exports = controller