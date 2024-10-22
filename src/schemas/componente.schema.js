const Joi = require("joi");

const schema = Joi.object({
  nombre: Joi.string().trim().min(1).required(),
  descripcion: Joi.string().required(),
});

module.exports = schema;
