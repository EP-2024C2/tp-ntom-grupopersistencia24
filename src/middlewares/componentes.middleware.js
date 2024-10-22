const { Componente } = require("../models");

const schema = require("../schemas/componente.schema");

const validador = (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({ error: result.error.details[0].message });
  }
  next();
};

const validarId = async (req, res, next) => {
  const id = req.params.id;
  const componente = await Componente.findByPk(id);
  if (!componente) {
    return res.status(404).json({ error: "Componente no encontrado" });
  }
  next();
};

module.exports = { validador, validarId };
