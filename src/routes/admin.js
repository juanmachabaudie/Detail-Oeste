const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/', adminController.main);

router.get('/signIn', adminController.signIn);

router.get('/logIn', adminController.logIn);

module.exports=router;