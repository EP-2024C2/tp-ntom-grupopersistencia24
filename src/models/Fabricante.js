"use strict";
const { allow } = require("joi");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fabricante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fabricante.init(
    {
      nombre: { type: DataTypes.STRING, allowNull: false },
      direccion: { type: DataTypes.STRING, allowNull: false },
      numeroContacto: { type: DataTypes.STRING, allowNull: false },
      pathImgPerfil: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Fabricante",
      timestamps: false,
    }
  );
  return Fabricante;
};
