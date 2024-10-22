const { Router } = require("express");
const route = Router();
const middleware = require("../middlewares/productos.middleware");
const productosController = require("../controllers/productos.controller");

route.get("/productos", productosController.getAll);

route.get("/productos/:id", middleware.validarId, productosController.getById);

route.delete(
  "/productos/:id",
  middleware.validarId,
  productosController.deleteById
);

route.post("/productos", middleware.validador, productosController.create);

route.put(
  "/productos/:id",
  middleware.validarId,
  middleware.validador,
  productosController.update
);

route.get(
  "/productos/:id/fabricantes",
  middleware.validarId,
  productosController.getAllFabricantesById
);

route.get(
  "/productos/:id/componentes",
  middleware.validarId,
  productosController.getAllComponentesById
);

route.post(
  "/productos/:id/componentes",
  middleware.validarId,
  middleware.validarIdNuevosComponentes,
  productosController.addNuevosComponentes
);

route.post(
  "/productos/:id/fabricantes",
  middleware.validarId,
  middleware.validarIdNuevosFabricantes,
  productosController.addNuevosFabricantes
);

module.exports = route;
