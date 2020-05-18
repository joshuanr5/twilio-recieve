const express = require('express');
const twilioController = require('../controllers/twilioController');

const Router = express.Router();
// ya se encuentra en /usuarios
Router.post('/', twilioController.send_message);
Router.post('/sms', twilioController.sms);
// Router.get('/:id', <funcion del controlador>);
// Router.get('/:id', <funcion del controlador>);
// Router.get('/:id', <funcion del controlador>);
// Router.get('/:id', <funcion del controlador>);

module.exports = Router;