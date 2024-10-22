const { Componente, Fabricante, Producto } = require("../models");

const controller = {};
controller.componentes = Componente;

const getAll = async (req, res) => {
  const data = await Componente.findAll();
  res.status(200).json(data);
};
controller.getAll = getAll;

const getAllProductosById = async (req, res) => {
    const id = req.params.id;
    const data = await Componente.findByPk(id, {
      include: {
        model: Producto,
        through: { attributes: [] },
      },
    });
    res.status(200).json(data);
  };
  controller.getAllProductosById = getAllProductosById;

const getById = async (req, res) => {
  const id = req.params.id;
  const componente = await Componente.findByPk(id);
  res.status(200).json(componente);
};
controller.getById = getById;

const create = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const componente = await Componente.create({
    nombre,
    descripcion,
  });
  res.status(201).json(componente);
};
controller.create = create;

const deleteById = async (req, res) => {
  const id = req.params.id;
  const r = await Componente.destroy({ where: { id: id } });
  res.status(200).json({ mensaje: `filas afectadas: ${r}` });
};
controller.deleteById = deleteById;

const update = async(req, res) => {
  const id = req.params.id;
  const { nombre, descripcion } = req.body;
  const componente = await Componente.findByPk(id);
  componente.id = id;
  componente.nombre = nombre;
  componente.descripcion = descripcion;
  await componente.save();
  res.status(200).json(componente);
};
controller.update = update;

module.exports = controller;
