const { Service } = require("../../models");
const factory = require("../../utils/handlerController");
const catchAsync = require("./../../utils/catchAsync");

exports.getMyService = catchAsync(async (req, res) => {
  responses = await Service.findAll({
    where: { userId: req.user.id },
    order: [["createdAt", "DESC"]],
  });
  //   if (!responses) return next(new AppError("Not Found", 404));

  return res.status(200).send(responses);
});
exports.addService = factory.createOne(Service);
exports.deleteService = factory.deleteOne(Service);
