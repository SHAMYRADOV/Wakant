"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Links extends Model {
    static associate(models) {}
  }
  Links.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      uuid1: {
        type: DataTypes.UUID,
      },
      from: {
        type: DataTypes.INTEGER,
      },
      to: {
        type: DataTypes.INTEGER,
      },
      accepted: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      tablename: "links",
      modelName: "Links",
    }
  );
  return Links;
};
