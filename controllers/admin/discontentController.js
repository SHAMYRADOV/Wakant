const { Discontent } = require("../../models");
const factory = require("../../utils/handlerController");

exports.getAllDiscontent = factory.getAll(Discontent);
