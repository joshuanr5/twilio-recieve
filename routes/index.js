const express = require('express');
const usuarioRoutes = require('./usuarioRoutes');
const twilioRoutes = require('./twilioRoutes');

const Router = express.Router();

Router.use('/usuarios', usuarioRoutes);
Router.use('/twilio', twilioRoutes);
// Router.use('/usuarios', <OTRO ROUTER>);
// Router.use('/pagos', <OTRO ROUTER>);
// Router.use('/mascotas', <OTRO ROUTER>);
// Router.use('/', <OTRO ROUTER>);
// Router.use('/', <OTRO ROUTER>);
// Router.use('/', <OTRO ROUTER>);

module.exports = Router; 