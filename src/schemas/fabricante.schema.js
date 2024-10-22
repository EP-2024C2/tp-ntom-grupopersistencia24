const Joi = require("joi");

const schema = Joi.object({
  nombre: Joi.string().trim().min(1).required(),
  direccion: Joi.string().trim().min(1).required(),
  numeroContacto: Joi.string().trim().min(1).required(),
  pathImgPerfil: Joi.string().trim().min(1).required(),
});

module.exports = schema;
