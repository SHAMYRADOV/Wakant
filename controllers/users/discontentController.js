const { Discontent } = require("../../models");
const factory = require("../../utils/handlerController");

exports.addDiscontent = factory.createOne(Discontent);
exports.editDiscontent = factory.updateOne(Discontent);
exports.deleteDiscontent = factory.deleteOne(Discontent);
