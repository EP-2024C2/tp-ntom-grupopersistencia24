const express = require("express");
const app = express();
const initialComponentesFabricantesProductos = require("./seeders/seed");
const routes = require("./routes");

const db = require("./models");

const PORT = 3000;

app.use(express.json());

app.use(routes.componentesRoute);
app.use(routes.productosRoute);
app.use(routes.fabricantesRoute);

async function startDatabase() {
  try {
    await db.sequelize.sync({force:true});
    console.log("Base de datos sincronizada");

    await initialComponentesFabricantesProductos();
    console.log("Datos de inicialización cargados correctamente");
  } catch (error) {
    console.log("Error al sicronizar o inicializar los datos");
  }
}

startDatabase();

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
