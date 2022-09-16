"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Questionnaire extends Model {
    static associate({ Users, QuesLanguage, QuesExperience, QuesEducation }) {
      this.belongsTo(Users, {
        foreignKey: "userId",
        as: "user",
      });
      this.hasMany(QuesLanguage, {
        foreignKey: "questId",
        as: "quest_language",
      });
      this.hasMany(QuesExperience, {
        foreignKey: "questId",
        as: "quest_experience",
      });
      this.hasMany(QuesEducation, {
        foreignKey: "questId",
        as: "quest_education",
      });
    }
  }
  Questionnaire.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      // type: {
      //   type: DataTypes.STRING,
      // },
      name: {
        type: DataTypes.STRING,
      },
      surname: {
        type: DataTypes.STRING,
      },
      profession: {
        type: DataTypes.STRING,
      },
      sex: {
        type: DataTypes.STRING,
      },
      birth_date: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      e_mail: {
        type: DataTypes.STRING,
      },
      skills: {
        type: DataTypes.TEXT,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "questionnaire",
      modelName: "Questionnaire",
    }
  );
  return Questionnaire;
};
