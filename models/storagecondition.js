'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class StorageCondition extends Model {
    static associate(models) {
      StorageCondition.hasMany(models.Item, { foreignKey: 'storage_condition_id' });
    }
  }

  StorageCondition.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      temperature_range: DataTypes.STRING,
      humidity_range: DataTypes.STRING,
      applicable_item_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'StorageCondition',
      tableName: 'StorageConditions',
      timestamps: false,
    }
  );

  return StorageCondition;
};
