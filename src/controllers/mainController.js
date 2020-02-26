const fs = require('fs');
const path = require('path');


const controller = {
	home: (req, res) => {
		res.render('index')
	},
	carrito: (req, res)=>{
		res.render('carrito')
	},
	servicios: (req, res)=>{
		res.render('servicios')
	},

	turnos: (req, res)=>{
		res.render('turnos')
	},

	nosotros: (req, res)=>{
		res.render('nosotros')
	}

};

module.exports = controller
