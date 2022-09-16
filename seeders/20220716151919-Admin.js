"use strict";
const bcrypt = require("bcryptjs");
const uuid = require("uuid");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.bulkInsert(
      "admin",
      [
        {
          uuid: uuid.v4(),
          username: "wakant-admin",
          password: await bcrypt.hash("wakant-admin", 12),
          createdAt: DataTypes.fn("now"),
          updatedAt: DataTypes.fn("now"),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.bulkDelete("admin", null, {});
  },
};
