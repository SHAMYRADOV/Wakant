"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discontent extends Model {
    static associate({ Users, Jobs, Profile }) {
      this.belongsTo(Users, {
        foreignKey: "userId",
        as: "user",
      });
      this.belongsTo(Jobs, {
        foreignKey: "jobId",
        as: "job",
      });
      this.belongsTo(Profile, {
        foreignKey: "profileId",
        as: "profile",
      });
    }
  }
  Discontent.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      text: {
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      profileId: {
        type: DataTypes.INTEGER,
      },
      jobId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "discontent",
      modelName: "Discontent",
    }
  );
  return Discontent;
};
