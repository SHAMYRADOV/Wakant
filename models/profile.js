"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate({ Users, Categories, Responses, Discontent }) {
      this.hasMany(Responses, {
        foreignKey: "profileId",
        as: "profile_responses",
      });
      this.hasMany(Discontent, {
        foreignKey: "profileId",
        as: "profile_discontent",
      });
      this.belongsTo(Users, {
        foreignKey: "userId",
        as: "user",
      });
      this.belongsTo(Categories, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }
  Profile.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      user_code: {
        type: DataTypes.STRING,
      },
      profession: {
        type: DataTypes.STRING,
      },
      education: {
        type: DataTypes.STRING,
      },
      ed_place: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
      },
      birth_date: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      e_mail: {
        type: DataTypes.STRING,
      },
      additional: {
        type: DataTypes.TEXT,
      },
      experience: {
        type: DataTypes.TEXT,
      },
      about_yourself: {
        type: DataTypes.TEXT,
      },
      work_schedule: {
        type: DataTypes.STRING,
      },
      questionnaire: {
        type: DataTypes.BOOLEAN,
      },
      visible: {
        type: DataTypes.BOOLEAN,
      },
      phone_number_visible: {
        type: DataTypes.BOOLEAN,
      },
      comment: {
        type: DataTypes.BOOLEAN,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      //category id
      categoryId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "profile",
      modelName: "Profile",
    }
  );
  return Profile;
};
