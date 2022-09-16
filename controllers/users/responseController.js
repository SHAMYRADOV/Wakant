const { Responses, Profile, Jobs } = require("../../models/");
const factory = require("../../utils/handlerController");
const catchAsync = require("./../../utils/catchAsync");
const AppError = require("./../../utils/appError");

exports.getMyResponses = catchAsync(async (req, res) => {
  responses = await Responses.findAll({ where: { userId: req.user.id } });
  //   if (!responses) return next(new AppError("Not Found", 404));

  return res.status(200).send(responses);
});

exports.getResponsesToMe = catchAsync(async (req, res) => {
  const profile = await Profile.findOne({ where: { userId: req.user.id } });
  const job = await Jobs.findOne({ where: { userId: req.user.id } });

  // if (!profile && !job)
  //   return next(new AppError("You don't have responses", 404));

  profile_res = await Responses.findAll({ where: { profileId: profile.id } });
  job_res = await Responses.findAll({ where: { jobId: job.id } });

  return res
    .status(200)
    .send({ profile_response: profile_res, job_response: job_res });
});

exports.addResponse = factory.createOne(Responses);
exports.deleteResponse = factory.deleteOne(Responses);
