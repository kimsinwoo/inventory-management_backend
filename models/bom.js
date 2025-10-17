'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class BOM extends Model {
    static associate(models) {
      BOM.hasMany(models.Item, { foreignKey: 'bom_id' });
    }
  }

  BOM.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'BOM',
      tableName: 'BOMs',
      timestamps: false,
    }
  );

  return BOM;
};
