const data = require('../data.json');

const listar = (req, res) => {
  const newData = data.map(d => {
    return {...d, mensajes: undefined, direcciones: undefined };
  });

  res.status(200).json(newData);
}

const create = (req, res) => {
  const { nombre, apellido } = req.body;
  
  // MyBD.save('usuarios', { nombre, apellido });
  // MyBD.select(...)

  const response = {
    id: 2,
    nombre,
    apellido,
    mensajes: [],
    direcciones: []
  };

  res.json(response);
}

const getDetail = (req, res) => {
  const { id } = req.params;

  // const response = MyBD.select('usuarios', { where: { id: id }})

  const newData = data.filter(usuario => usuario.id == id);

  
  res.json(newData[0] || {});
}

module.exports = {
  listar,
  create,
  getDetail
}