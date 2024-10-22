'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Producto.init({
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: DataTypes.TEXT,
    precio: { type: DataTypes.FLOAT, allowNull: false },
    pathImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
    timestamps: false
  });
  return Producto;
};