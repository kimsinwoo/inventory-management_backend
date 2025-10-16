'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    static associate(models) {
      Attachment.belongsTo(models.Approval, { foreignKey: 'approval_id' });
    }
  }

  Attachment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      approval_id: DataTypes.INTEGER,
      file_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Attachment',
      tableName: 'Attachments',
      timestamps: false,
    }
  );

  return Attachment;
};
