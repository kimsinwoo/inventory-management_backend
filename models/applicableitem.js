'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class ApplicableItem extends Model {
    static associate(models) {
      ApplicableItem.hasMany(models.StorageCondition, { foreignKey: 'applicable_item_id' });
    }
  }

  ApplicableItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      shelf_life: DataTypes.INTEGER,
      unit: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ApplicableItem',
      tableName: 'ApplicableItems',
      timestamps: false,
    }
  );

  return ApplicableItem;
};
