"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("jobs", {
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
      subcategoryId: {
        type: DataTypes.INTEGER,
      },
      userId: {
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
    await queryInterface.dropTable("jobs");
  },
};
