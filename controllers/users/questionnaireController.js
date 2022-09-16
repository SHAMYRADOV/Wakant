const {
  Questionnaire,
  QuesEducation,
  QuesLanguage,
  QuesExperience,
} = require("../../models/");
const AppError = require("./../../utils/appError");
const catchAsync = require("./../../utils/catchAsync");
const factory = require("../../utils/handlerController");

exports.addQuestionnaire = catchAsync(async (req, res, next) => {
  let { education, language, experience } = req.body;
  let quest_ed = [];
  let quest_lang = [];
  let quest_ex = [];

  const quest = await Questionnaire.findOne({ where: { userId: req.user.id } });
  if (quest) return next(new AppError("You already have questionnaire", 400));

  for (item of education) {
    quest_ed.push(item);
  }
  for (item of language) {
    quest_lang.push(item);
  }
  for (item of experience) {
    quest_ex.push(item);
  }

  const questionnaire = await Questionnaire.create(req.body);

  for (var i = 0; i < quest_ed.length; i++) {
    await QuesEducation.create({
      questId: questionnaire.id,
      education: quest_ed[i].education,
      country: quest_ed[i].country,
      major: quest_ed[i].major,
      HEI: quest_ed[i].HEI,
      location: quest_ed[i].location,
      duration: quest_ed[i].duration,
    });
  }
  for (var i = 0; i < quest_lang.length; i++) {
    await QuesLanguage.create({
      questId: questionnaire.id,
      name: quest_lang[i].name,
      level: quest_lang[i].level,
    });
  }
  for (var i = 0; i < quest_ex.length; i++) {
    await QuesExperience.create({
      questId: questionnaire.id,
      office_name: quest_ex[i].office_name,
      profession: quest_ex[i].profession,
      location: quest_ex[i].location,
      duration: quest_ex[i].duration,
    });
  }

  res.status(201).json({
    status: "success",
  });
});

exports.getMyQuestionnaire = catchAsync(async (req, res) => {
  const quest = await Questionnaire.findOne({
    where: { userId: req.user.id },
    include: [
      { model: QuesEducation, as: "quest_education" },
      { model: QuesExperience, as: "quest_experience" },
      { model: QuesLanguage, as: "quest_language" },
    ],
  });
  if (!quest) return next(new AppError("Not Found", 404));

  return res.status(200).send({
    quest,
  });
});

exports.editQuestionnaire = catchAsync(async (req, res) => {
  let { education, language, experience } = req.body;
  const quest = await Questionnaire.findOne({ where: { userId: req.user.id } });
  //   console.log(education[0].id);
  if (!quest) return next(new AppError("Not Found", 404));

  quest.update(req.body);

  if (education) {
    for (var i = 0; i < education.length; i++) {
      const ed = await QuesEducation.findOne({
        where: { id: education[i].id },
      });

      ed.update({
        education: education[i].education,
        country: education[i].country,
        major: education[i].major,
        HEI: education[i].HEI,
        location: education[i].location,
        duration: education[i].duration,
      });
    }
  }
  if (language) {
    for (var i = 0; i < language.length; i++) {
      const lang = await QuesLanguage.findOne({
        where: { id: language[i].id },
      });

      lang.update({
        name: language[i].name,
        level: language[i].level,
      });
    }
  }
  if (experience) {
    for (var i = 0; i < experience.length; i++) {
      const ex = await QuesExperience.findOne({
        where: { id: experience[i].id },
      });

      ex.update({
        office_name: experience[i].office_name,
        profession: experience[i].profession,
        location: experience[i].location,
        duration: experience[i].duration,
      });
    }
  }

  return res.status(200).send("Edited");
});
exports.deleteQuestionnaire = factory.deleteOne(Questionnaire);
