"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    static associate({ Users, Categories, Responses, Discontent }) {
      this.hasMany(Responses, {
        foreignKey: "jobId",
        as: "job_responses",
      });
      this.hasMany(Discontent, {
        foreignKey: "jobId",
        as: "job_discontent",
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
  Jobs.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      code: {
        type: DataTypes.INTEGER,
      },
      profession: {
        type: DataTypes.STRING,
      },
      gender: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.STRING,
      },
      workday_hours: {
        type: DataTypes.STRING,
      },
      saturday_hours: {
        type: DataTypes.STRING,
      },
      sunday_hours: {
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
      conditions: {
        type: DataTypes.STRING,
      },
      experience: {
        type: DataTypes.STRING,
      },
      // propiska
      registration: {
        type: DataTypes.STRING,
      },
      about_employer: {
        type: DataTypes.STRING,
      },
      salary: {
        type: DataTypes.STRING,
      },
      visible: {
        type: DataTypes.BOOLEAN,
      },
      phone_number_visible: {
        type: DataTypes.BOOLEAN,
      },
      comments: {
        type: DataTypes.BOOLEAN,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      //category id
      parentId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "jobs",
      modelName: "Jobs",
    }
  );
  return Jobs;
};
