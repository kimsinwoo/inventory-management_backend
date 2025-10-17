import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Temperature extends Model {
    static associate(models) {
      Temperature.belongsTo(models.User, { foreignKey: "id" });
    }
  }

  Temperature.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Date: {
        type: DataTypes.STRING,
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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Temperature",
      tableName: "Temperature",
      timestamps: true,
      createdAt: "createAt",
      updatedAt: "updateAt",
    }
  );

  return Temperature;
};
