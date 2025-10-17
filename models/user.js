const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.UserProfile, { foreignKey: "profile_id" });
      User.hasMany(models.Position, { foreignKey: "user_id" });
      User.hasMany(models.Approval, { foreignKey: "author_id" });
      User.hasMany(models.RequiredApprover, { foreignKey: "user_id" });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: false,
    }
  );

  return User;
};
