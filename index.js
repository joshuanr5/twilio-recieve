const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Bienvenido!!');
});

app.use(routes);
// GET /usuarios/1/mensajes   -> Listar mensajes del usaurio :id
// GET /usuarios/1/direciones -> Listar direciones del usaurio con ID 2
// GET /usuarios              -> Listar los usuarios
// GET /usuarios/1            -> Detalle del usuario con ID 1
// POST /usuarios/             -> Crear un usuario


app.listen(8080, () => {
  console.log('Conectado en el puerto 8080');
});