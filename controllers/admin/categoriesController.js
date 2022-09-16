const { Categories } = require("../../models");
const factory = require("../../utils/handlerController");
const catchAsync = require("./../../utils/catchAsync");
const sharp = require("sharp");

exports.addCategory = factory.createOne(Categories);
exports.getCategory = factory.getOne(Categories);
exports.editCategory = factory.updateOne(Categories);
exports.deleteCategory = factory.deleteOne(Categories);

exports.uploadCategoryImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next(new AppError("Please provide Image", 404));

  const uuid = req.params.id;
  const category = await Categories.findOne({ where: { uuid } });
  if (!category) return next(new AppError("Not found", 404));

  await sharp(req.file.buffer).toFile(`./public/categories/${uuid}`);

  await category.update({
    image: `./public/products/original/${uuid}`,
  });

  return res.status(200).send("Success");
});
