'use strict'
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Approval extends Model {
    static associate(models) {
      Approval.belongsTo(models.User, { foreignKey: 'author_id' });
      Approval.hasMany(models.Attachment, { foreignKey: 'approval_id' });
      Approval.hasMany(models.RequiredApprover, { foreignKey: 'approval_id' });
    }
  }

  Approval.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      doc_number: DataTypes.STRING,
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.ENUM('Draft', 'Pending', 'Approved', 'Rejected'),
      rejection_reason: DataTypes.TEXT,
      author_id: DataTypes.STRING,
      created_at: DataTypes.DATE,
      ceo_signature: DataTypes.BOOLEAN,
      director_signature: DataTypes.BOOLEAN,
      team_leader_signature: DataTypes.BOOLEAN,
      approval_step: DataTypes.INTEGER,
      attachment_id: DataTypes.INTEGER,
      required_approver_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Approval',
      tableName: 'Approvals',
      timestamps: false,
    }
  );

  return Approval;
};
