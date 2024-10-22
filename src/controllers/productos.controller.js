const { Producto, Fabricante, Componente } = require("../models");
const { initialComponentesFabricantesProductos } = require("../seeders/seed");

const controller = {};
controller.productos = Producto;

const getAll = async (req, res) => {
  const data = await Producto.findAll();
  res.status(200).json(data);
};
controller.getAll = getAll;

const getAllFabricantesById = async (req, res) => {
  const id = req.params.id;
  const data = await Producto.findByPk(id, {
    include: {
      model: Fabricante,
      through: { attributes: [] },
    },
  });
  res.status(200).json(data);
};
controller.getAllFabricantesById = getAllFabricantesById;

const getAllComponentesById = async (req, res) => {
  const id = req.params.id;
  const data = await Producto.findByPk(id, {
    include: {
      model: Componente,
      through: { attributes: [] },
    },
  });
  res.status(200).json(data);
};
controller.getAllComponentesById = getAllComponentesById;

const getById = async (req, res) => {
  const id = req.params.id;
  const producto = await Producto.findByPk(id);
  res.status(200).json(producto);
};
controller.getById = getById;

const deleteById = async (req, res) => {
  const id = req.params.id;
  const r = await Producto.destroy({ where: { id: id } });
  res.status(200).json({ mensaje: `filas afectadas: ${r}` });
};
controller.deleteById = deleteById;

const create = async (req, res) => {
  const { nombre, descripcion, precio, pathImg } = req.body;
  const producto = await Producto.create({
    nombre,
    descripcion,
    precio,
    pathImg,
  });
  res.status(201).json(producto);
};
controller.create = create;

const update = async (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion, precio, pathImg } = req.body;
  const componente = await Producto.findByPk(id);
  componente.id = id;
  componente.nombre = nombre;
  componente.descripcion = descripcion;
  componente.precio = precio;
  componente.pathImg = pathImg;
  await componente.save();
  res.status(200).json(componente);
};
controller.update = update;

const addNuevosComponentes = async (req, res) => {
  const id = req.params.id;
  const {componenteIds} = req.body;
  const componentes = await Componente.findAll({
    where: { id: componenteIds },
  });
  const producto = await Producto.findByPk(id);

  await producto.addComponentes(componentes);
  res.status(200).json({ mensaje: "Componentes asociados correctamente" });
};
controller.addNuevosComponentes = addNuevosComponentes;

const addNuevosFabricantes = async (req, res) => {
  const id = req.params.id;
  const { fabricanteIds } = req.body;
  const fabricantes = await Fabricante.findAll({
    where: { id: fabricanteIds },
  });
  const producto = await Producto.findByPk(id);

  await Promise.all(
    fabricantes.map((fabricante) => fabricante.addProducto(producto))
  );
  res.status(200).json({ mensaje: "Fabricantes asociados correctamente" });
};
controller.addNuevosFabricantes = addNuevosFabricantes;

module.exports = controller;
