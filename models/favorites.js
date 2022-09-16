"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate({ Users }) {
      this.belongsTo(Users, {
        foreignKey: "userId",
        as: "users",
      });
    }
  }
  Favorites.init(
    {
      uuid: {
        type: DataTypes.UUID,
        // defaultValue: UUIDV4,
      },
      uuid1: {
        type: DataTypes.UUID,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "favorites",
      modelName: "Favorites",
    }
  );
  return Favorites;
};
