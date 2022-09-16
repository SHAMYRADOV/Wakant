const { Jobs } = require("../../models");
const factory = require("../../utils/handlerController");

exports.getAllJobs = factory.getAll(Jobs);
exports.getJob = factory.getOne(Jobs);
