const {
  Profile,
  Categories,
  Users,
  Questionnaire,
  Jobs,
} = require("./../models");
const catchAsync = require("./catchAsync");
const AppError = require("./appError");
const { search_body } = require("./search_body");

exports.getFavorites = (Model, Type) =>
  catchAsync(async (req, res, next) => {
    let result = [];
    const favorites = await Model.findAll({ where: { userId: req.user.id } });
    if (!favorites) return next(new AppError("Not Found", 404));

    for (var i = 0; i < favorites.length; i++) {
      const favorite = await Type.findOne({
        where: { uuid: favorites[i].uuid },
      });
      if (!favorite) return next(new AppError("Not found", 404));
      result.push(favorite);
    }

    return res.status(200).send(favorites);
  });

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne({ where: { uuid: req.params.id } });

    if (!doc) {
      return next(new AppError("Not found", 404));
    }

    await doc.destroy();

    res.status(204).json({
      status: "success",
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne({ where: { uuid: req.params.id } });

    if (!doc) return next(new AppError("Not Found", 404));

    doc.update(req.body);

    res.json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    if (Model == Profile) {
      const profile = await Model.findOne({ where: { userId: req.user.id } });

      if (profile) return next(new AppError("You already have profile", 400));
    }
    const doc = await Model.create(req.body);
    if (Model == Profile) {
      const profile = await Model.findOne({ where: { userId: req.user.id } });
      await profile.update({ user_code: req.user.username });
    } else if (Model == Jobs) {
      const job = await Model.findOne({
        where: { userId: req.user.id, code: null },
      });
      random_num = Math.floor(1 + Math.random() * (999 - 1));
      job.update({ code: random_num });
    }
    res.status(201).json({
      status: "succes",
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findOne({ where: { uuid: req.params.id } });

    if (!doc) return next(new AppError("Not Found", 404));

    res.json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    let {
      status,
      keyword,
      gender,
      education,
      address,
      schedule,
      questionnaire,
    } = req.query;

    var where = {};
    if (status) where.status = req.query.status;
    if (keyword) where = search_body(keyword);
    if (gender) where.gender = req.query.gender;
    if (education) where.education = req.query.education;
    if (address) where.address = req.query.address;
    if (schedule) where.createdAt < new Date(Date.now() - req.query.schedule);
    if (questionnaire) where.questionnaire = req.query.questionnaire;

    // if (Child && as && Child2 && as2) {
    //   include = [
    //     { model: Child, as: as },
    //     { model: Child2, as: as2 },
    //   ];
    // } else if (Child && as) {
    //   include = [{ model: Child, as: as }];
    // }

    const doc = await Model.findAll({
      where,
      // include,
    });

    if (!doc) return next(new AppError("Not Found", 404));

    res.json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getModelChild = (Model, Child) =>
  catchAsync(async (req, res, next) => {
    let { sort_by, as } = req.query;

    // if (type) where.type = req.query.type;
    // if (ischecked) where.isChecked = req.query.ischecked;
    const doc = await Model.findOne({ where: { uuid: req.params.id } });

    if (!doc) return next(new AppError("Not Found", 404));
    var where = {},
      order;
    if (sort_by && as) order = [[sort_by, as]];

    if (Model == Categories) {
      where.categoryId = doc.id;
    } else if (Model == Users) {
      where.userId = doc.id;
    } else if (Model == Profile) {
      where.userId = doc.id;
    } else if (Model == Questionnaire) {
      where.questId = doc.id;
    } else if (Model == Jobs) {
      where.jobId = doc.id;
    }

    const results = await Child.findAll({ where, order });

    res.json({
      status: "success",
      data: {
        data: results,
      },
    });
  });
