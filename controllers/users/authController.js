const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { Users } = require("../../models");
const { createSendToken } = require("./../../utils/createSendToken");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

exports.getMe = catchAsync(async (req, res) => {
  return res.status(200).send(req.user);
});

exports.register = catchAsync(async (req, res, next) => {
  let text = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var charactersLength = characters.length;

  for (var i = 0; i < 6; i++) {
    text += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  const newUser = await Users.create(req.body);

  await newUser.update({ username: text });
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { phone_number } = req.body;

  const user = await Users.findOne({ where: { phone_number } });

  if (!user) {
    return next(new AppError("Invalid Credentials", 401));
  }

  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  const {
    headers: { authorization },
  } = req;
  if (authorization && authorization.startsWith("Bearer")) {
    token = authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Not logged", 401));
  }

  const decoded = await promisify(jwt.verify)(token, "kerim");

  const freshUser = await Users.findOne({
    where: { uuid: decoded.id },
  });

  if (!freshUser) {
    return next(
      new AppError("The user belonging to this token is no longer exists", 401)
    );
  }

  req.user = freshUser;
  next();
});
