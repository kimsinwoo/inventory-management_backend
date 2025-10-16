'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    static associate(models) {
      Position.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }

  Position.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: DataTypes.STRING,
      title: DataTypes.STRING, // CEO, Director, TeamLeader, Staff, PartTime
      level: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Position',
      tableName: 'Positions',
      timestamps: false,
    }
  );

  return Position;
};
