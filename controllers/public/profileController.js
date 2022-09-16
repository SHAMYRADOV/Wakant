const { Profile } = require("../../models");
const factory = require("../../utils/handlerController");

exports.getAllProfile = factory.getAll(Profile);
exports.getProfile = factory.getOne(Profile);
