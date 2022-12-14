const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { promisify } = require("util");
const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");
const { Admin } = require("../../models");
const { createSendToken } = require("../../utils/createSendToken");

exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ where: { username } });

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    return next(new AppError("Invalid Credentials", 401));
  }

  createSendToken(admin, 200, res);
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

  const freshAdmin = await Admin.findOne({
    where: { uuid: decoded.id },
  });

  if (!freshAdmin) {
    return next(
      new AppError("The user belonging to this token is no longer exists", 401)
    );
  }

  req.admin = freshAdmin;
  next();
});

exports.updateMe = catchAsync(async (req, res, next) => {
  const { username, password, newPassword, newPasswordConfirm } = req.body;
  const admin = await Admin.findOne({ where: { username: username } });

  if (password && newPassword) {
    if (!(await bcrypt.compare(password, admin.password)))
      return next(new AppError("Invalid Credentials", 401));

    if (newPassword !== newPasswordConfirm)
      return next(new AppError("Invalid Credentials", 400));

    admin.update({
      username,
      password: await bcrypt.hash(newPassword, 12),
    });
  }
  createSendToken(admin, 200, res);
});
