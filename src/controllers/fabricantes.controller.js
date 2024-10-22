const { Fabricante, Componente, Producto } = require("../models");

const controller = {};
controller.fabricantes = Fabricante;

const getAll = async (req, res) => {
  const data = await Fabricante.findAll();
  res.status(200).json(data);
};
controller.getAll = getAll;

const getAllProductosById = async (req, res) => {
    const id = req.params.id;
    const data = await Fabricante.findByPk(id, {
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
  const fabricante = await Fabricante.findByPk(id);
  res.status(200).json(fabricante);
};
controller.getById = getById;

const deleteById = async (req, res) => {
  const id = req.params.id;
  const r = await Fabricante.destroy({ where: { id: id } });
  res.status(200).json({ mensaje: `filas afectadas: ${r}` });
};
controller.deleteById = deleteById;

const create = async (req, res) => {
  const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body;
  const fabricante = await Fabricante.create({
    nombre,
    direccion,
    numeroContacto,
    pathImgPerfil,
  });
  res.status(201).json(fabricante);
};
controller.create = create;

const update = async (req, res) => {
  const id = req.params.id;
  const { nombre, direccion, numeroContacto, pathImgPerfil } = req.body;
  const fabricante = await Fabricante.findByPk(id);
  fabricante.nombre = nombre;
  fabricante.direccion = direccion;
  fabricante.numeroContacto = numeroContacto;
  fabricante.pathImgPerfil = pathImgPerfil;
  await fabricante.save();
  res.status(200).json(fabricante);
};
controller.update = update;

module.exports = controller;
