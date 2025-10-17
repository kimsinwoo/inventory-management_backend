import { Model, DataTypes } from "sequelize";

export default (sequelize) => {
  class Temperature extends Model {
    static associate(models) {
      // ✅ User 모델과 관계 설정 (foreignKey는 profile_id)
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
      timestamps: true, // ✅ createdAt, updatedAt 자동 생성
      underscored: true,
    }
  );

  return Temperature;
};
