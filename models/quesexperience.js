"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuesExperience extends Model {
    static associate({ Questionnaire }) {
      this.belongsTo(Questionnaire, {
        foreignKey: "questId",
        as: "quest_experience",
      });
    }
  }
  QuesExperience.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      office_name: {
        type: DataTypes.STRING,
      },
      profession: {
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
      tableName: "quesExperience",
      modelName: "QuesExperience",
    }
  );
  return QuesExperience;
};
