"use strict";
const { Model, UUIDV4 } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate({ Jobs, Profile, Categories }) {
      this.hasMany(Jobs, {
        foreignKey: "categoryId",
        as: "subcategory_jobs",
      });
      this.hasMany(Profile, {
        foreignKey: "categoryId",
        as: "subcategory_profile",
      });
      this.hasMany(Categories, {
        foreignKey: "categoryId",
        as: "subcategory",
      });
    }
  }
  Categories.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
      },
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      categoryId: {
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "categories",
      modelName: "Categories",
    }
  );
  return Categories;
};
