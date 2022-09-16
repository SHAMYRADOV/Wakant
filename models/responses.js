"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Responses extends Model {
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
  Responses.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      text: {
        type: DataTypes.TEXT,
      },
      jobId: {
        type: DataTypes.INTEGER,
      },
      profileId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "responses",
      modelName: "Responses",
    }
  );
  return Responses;
};
