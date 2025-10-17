const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Temperature extends Model {
    static associate(models) {
      Temperature.belongsTo(models.User, {
        foreignKey: "profile_id",
        targetKey: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Temperature.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      Date: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      StorageType: {
        type: DataTypes.ENUM("coldStorage", "freezer"),
        allowNull: false,
      },
      Temp: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Inspector: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      profile_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Temperature",
      tableName: "Temperature",
      timestamps: true,
      underscored: true,
    }
  );

  return Temperature;
};
