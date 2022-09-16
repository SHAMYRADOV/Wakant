const { Jobs, Responses } = require("../../models");
const factory = require("../../utils/handlerController");
const catchAsync = require("./../../utils/catchAsync");

exports.getJobResponse = factory.getModelChild(Jobs, Responses);

exports.addJob = catchAsync(async (req, res, next) => {
  userId = req.user.id;
  code = Math.floor(1 + Math.random() * (999 - 1));

  const newJob = await Jobs.create(req.body);
  await newJob.update({ userId, code });
  return res.status(201).send(newJob);
});
exports.editJob = factory.updateOne(Jobs);
exports.deleteJob = factory.deleteOne(Jobs);
