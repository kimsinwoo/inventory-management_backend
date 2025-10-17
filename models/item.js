'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      Item.belongsTo(models.Factory, { foreignKey: 'factory_id' });
      Item.belongsTo(models.StorageCondition, { foreignKey: 'storage_condition_id' });
      Item.belongsTo(models.BOM, { foreignKey: 'bom_id' });
    }
  }

  Item.init(
    {
      code: {
        type: DataTypes.STRING(10),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      quantity: DataTypes.INTEGER,
      category: DataTypes.ENUM('RawMaterial', 'SemiFinished', 'Finished', 'Supply'),
      factory_id: DataTypes.INTEGER,
      storage_condition_id: DataTypes.INTEGER,
      bom_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Item',
      tableName: 'Items',
      timestamps: false,
    }
  );

  return Item;
};
