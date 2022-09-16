const { Categories, Profile, Jobs } = require("../../models/");
const factory = require("../../utils/handlerController");

exports.getAllCategories = factory.getAll(Categories);
exports.getCategoryProfile = factory.getModelChild(Categories, Profile);
exports.getCategoryJob = factory.getModelChild(Categories, Jobs);
