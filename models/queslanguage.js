"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuesLanguage extends Model {
    static associate({ Questionnaire }) {
      this.belongsTo(Questionnaire, {
        foreignKey: "questId",
        as: "quest_language",
      });
    }
  }
  QuesLanguage.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
      level: {
        type: DataTypes.STRING,
      },
      questId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "quesLanguage",
      modelName: "QuesLanguage",
    }
  );
  return QuesLanguage;
};
