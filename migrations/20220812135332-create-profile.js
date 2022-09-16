"use strict";
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("profile", {
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
    await queryInterface.dropTable("profile");
  },
};
