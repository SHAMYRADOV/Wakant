"use strict";
const { Model, UUIDV4 } = require("sequelize");
const favorites = require("./favorites");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate({
      Profile,
      Jobs,
      Responses,
      Questionnaire,
      Discontent,
      Service,
      Favorites,
    }) {
      this.hasOne(Profile, {
        foreignKey: "userId",
        as: "user_profiles",
      });
      this.hasOne(Questionnaire, {
        foreignKey: "userId",
        as: "user_questionnaire",
      });
      this.hasMany(Jobs, {
        foreignKey: "userId",
        as: "user_jobs",
      });
      this.hasMany(Responses, {
        foreignKey: "userId",
        as: "user_responses",
      });
      this.hasMany(Discontent, {
        foreignKey: "userId",
        as: "user_discontent",
      });
      this.hasMany(Service, {
        foreignKey: "userId",
        as: "user_service",
      });
      this.hasMany(Favorites, {
        foreignKey: "userId",
        as: "user_favorites",
      });
    }
  }
  Users.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      username: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "Users",
    }
  );
  return Users;
};
