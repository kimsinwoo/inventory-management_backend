'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Process extends Model {
    static associate(models) {
      Process.hasMany(models.Factory, { foreignKey: 'process_id' });
    }
  }

  Process.init(
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
      modelName: 'Process',
      tableName: 'Processes',
      timestamps: false,
    }
  );

  return Process;
};
