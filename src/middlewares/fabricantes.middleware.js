const {Fabricante} = require("../models");

const schema = require("../schemas/fabricante.schema");

const middleware = {};

const validador = (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({ error: result.error.details[0].message })
  }
  next();
};

const validarId = async(req, res, next) => {
  const id = req.params.id;
  const fabricante = await Fabricante.findByPk(id);
  if (!fabricante) {
    return res.status(404).json({ error: "Fabricante no encontrado" });
  }
  next();
};

module.exports = { validador, validarId };