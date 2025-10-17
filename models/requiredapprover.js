"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class RequiredApprover extends Model {
    static associate(models) {
      RequiredApprover.belongsTo(models.User, { foreignKey: "user_id" });
      RequiredApprover.belongsTo(models.Approval, { foreignKey: "approval_id" });
    }
  }

  RequiredApprover.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      approval_id: DataTypes.INTEGER,
      user_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RequiredApprover",
      tableName: "RequiredApprovers",
      timestamps: false,
    }
  );

  return RequiredApprover;
};
