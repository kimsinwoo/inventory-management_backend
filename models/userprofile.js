"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    static associate(models) {
      UserProfile.hasOne(models.User, { foreignKey: "profile_id" });
    }
  }

  UserProfile.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      phone_number: DataTypes.STRING,
      email: DataTypes.STRING,
      nickname: DataTypes.STRING,
      full_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UserProfile",
      tableName: "UserProfiles",
      timestamps: false,
    }
  );

  return UserProfile;
};
