"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("quesEducation", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
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
      quesId: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("quesEducation");
  },
};
