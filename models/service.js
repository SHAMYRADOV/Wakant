"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate({ Users }) {
      this.belongsTo(Users, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Service.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      text: {
        type: DataTypes.TEXT,
      },
      isUser: {
        type: DataTypes.BOOLEAN,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "service",
      modelName: "Service",
    }
  );
  return Service;
};
