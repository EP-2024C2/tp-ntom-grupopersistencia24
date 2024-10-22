const { Router } = require("express");
const route = Router();
const middleware = require("../middlewares/fabricantes.middleware");
const fabricantesController = require("../controllers/fabricantes.controller");

route.get("/fabricantes", fabricantesController.getAll);

route.get(
  "/fabricantes/:id",
  middleware.validarId,
  fabricantesController.getById
);

route.delete(
  "/fabricantes/:id",
  middleware.validarId,
  fabricantesController.deleteById
);

route.post("/fabricantes", middleware.validador, fabricantesController.create);

route.put(
  "/fabricantes/:id",
  middleware.validarId,
  middleware.validador,
  fabricantesController.update
);

route.get(
  "/fabricantes/:id/productos",
  middleware.validarId,
  fabricantesController.getAllProductosById
);

module.exports = route;
