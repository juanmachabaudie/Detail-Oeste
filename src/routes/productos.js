const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send("Bienvenido a Productos")
});

router.get('/detalle', (req, res)=>{
    res.send('Bienvenidos al detalle del producto')
});

router.get('/crear', (req, res)=>{
    res.send('Crea tu producto')
});

router.get('/editar', (req, res)=>{
    res.send('Edita tu producto')
});

module.exports=router;