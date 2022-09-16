const express = require("express");
const {
  getAllCategories,
  getCategoryProfile,
  getCategoryJob,
} = require("../../../controllers/public/categoriesController");
const router = express.Router();

router.get("/", getAllCategories);
router.get("/profile/:id", getCategoryProfile);
router.get("/job/:id", getCategoryJob);

module.exports = router;
