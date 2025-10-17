"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Factory extends Model {
    static associate(models) {
      Factory.hasMany(models.Item, { foreignKey: "factory_id" });
      Factory.belongsTo(models.Process, { foreignKey: "process_id" });
    }
  }

  Factory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: DataTypes.ENUM("1PreProcessing", "2Manufacturing"),
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      process_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Factory",
      tableName: "Factories",
      timestamps: false,
    }
  );

  return Factory;
};
