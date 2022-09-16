const { Profile, Responses } = require("../../models");
const factory = require("../../utils/handlerController");
// const catchAsync = require("./../../utils/catchAsync");

exports.getProfileResponse = factory.getModelChild(Profile, Responses);
exports.addProfile = factory.createOne(Profile);

// exports.addProfile = catchAsync(async (req, res, next) => {
//   const profile = await Profile.findOne({ where: { userId: req.user.id } });

//   if (profile) return next(new AppError("You already have profile", 400));

//   userId = req.user.id;
//   user_code = req.user.username;
//   const newProfile = await Profile.create(req.body);
//   await newProfile.update({ userId, user_code });
//   return res.status(201).send(newProfile);
// });
exports.editProfile = factory.updateOne(Profile);
exports.deleteProfile = factory.deleteOne(Profile);
