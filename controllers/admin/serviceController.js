const { Service, Users } = require("../../models");
const factory = require("../../utils/handlerController");

exports.getAllServices = factory.getAll(Service);
exports.getUserServices = factory.getModelChild(Users, Service);
exports.addService = factory.createOne(Service);
exports.deleteService = factory.deleteOne(Service);
