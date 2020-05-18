const express = require('express');
const usuarioController = require('../controllers/usuarioController');

const Router = express.Router();
// ya se encuentra en /usuarios
Router.get('/', usuarioController.listar);
Router.post('/', usuarioController.create);
Router.get('/:id', usuarioController.getDetail);
// Router.get('/:id', <funcion del controlador>);
// Router.get('/:id', <funcion del controlador>);
// Router.get('/:id', <funcion del controlador>);
// Router.get('/:id', <funcion del controlador>);

module.exports = Router;