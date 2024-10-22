const { Router } = require("express");
const route = Router();
const middleware = require("../middlewares/componentes.middleware");
const componentesController = require("../controllers/componentes.controller");

route.get("/componentes", componentesController.getAll);

route.get(
  "/componentes/:id",
  middleware.validarId,
  componentesController.getById
);

route.delete(
  "/componentes/:id",
  middleware.validarId,
  componentesController.deleteById
);

route.post("/componentes", middleware.validador, componentesController.create);

route.put(
  "/componentes/:id",
  middleware.validarId,
  middleware.validador,
  componentesController.update
);

route.get(
  "/componentes/:id/productos",
  middleware.validarId,
  componentesController.getAllProductosById
);

module.exports = route;
