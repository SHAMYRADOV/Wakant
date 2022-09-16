"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuesEducation extends Model {
    static associate({ Questionnaire }) {
      this.belongsTo(Questionnaire, {
        foreignKey: "questId",
        as: "quest_education",
      });
    }
  }
  QuesEducation.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      education: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      major: {
        type: DataTypes.STRING,
      },
      HEI: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.TEXT,
      },
      duration: {
        type: DataTypes.STRING,
      },
      questId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "quesEducation",
      modelName: "QuesEducation",
    }
  );
  return QuesEducation;
};
