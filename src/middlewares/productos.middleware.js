const { Producto, Fabricante, Componente } = require("../models");

const schema = require("../schemas/producto.schema");

const middleware = {};

const validador = (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({ error: result.error.details[0].message });
  }
  next();
};
middleware.validador = validador;

const validarId = async (req, res, next) => {
  const id = req.params.id;
  const producto = await Producto.findByPk(id);
  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  next();
};
middleware.validarId = validarId;

const validarIdNuevosFabricantes = async (req, res, next) => {
  const { fabricanteIds } = req.body;
  if (!fabricanteIds || fabricanteIds.length === 0) {
    return res.status(400).json({ mensaje: 'IDs de fabricantes no proporcionados o vacíos' });
  }
  const fabricantes = await Fabricante.findAll({
    where: {
      id: fabricanteIds,
    },
  });
  if (fabricantes.length !== fabricanteIds.length) {
    return res.status(404).json({ error: 'Uno o más fabricantes no encontrados.' });
  }
  next();
};
middleware.validarIdNuevosFabricantes = validarIdNuevosFabricantes;

const validarIdNuevosComponentes = async (req, res, next) => {
    const { componenteIds } = req.body;
    if (!componenteIds || componenteIds.length === 0) {
        return res.status(400).json({ mensaje: 'IDs de componentes no proporcionados o vacíos' });
      }
    const componentes = await Componente.findAll({
      where: {
        id: componenteIds,
      },
    });
    if (componentes.length !== componenteIds.length) {
      return res.status(404).json({ error: 'Uno o más componentes no encontrados.' });
    }
    next();
  };
middleware.validarIdNuevosComponentes = validarIdNuevosComponentes;

module.exports = middleware;
