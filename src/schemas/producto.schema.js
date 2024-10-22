const Joi = require("joi");

const schema = Joi.object({
  nombre: Joi.string().trim().min(1).required(),
  descripcion: Joi.string().required(),
  precio: Joi.number().precision(2).required(),
  pathImg: Joi.string().trim().min(1).required(),
});

module.exports = schema;
