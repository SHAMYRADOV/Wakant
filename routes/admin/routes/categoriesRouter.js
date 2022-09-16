const express = require("express");
const {
  getCategory,
  addCategory,
  editCategory,
  deleteCategory,
  uploadCategoryImage,
} = require("../../../controllers/admin/categoriesController");
const {
  getAllCategories,
} = require("../../../controllers/public/categoriesController");
const { uploadPhoto } = require("../../../utils/multerProperties");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getCategory);

router.post("/add", addCategory);
router.patch("/edit/:id", editCategory);
router.post("/upload-image/:id", uploadPhoto, uploadCategoryImage);

router.delete("/delete/:id", deleteCategory);

module.exports = router;
