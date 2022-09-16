const express = require("express");
const {
  addFavorites,
  deleteFavorites,
  getProfileFavs,
  getJobFavs,
} = require("../../../controllers/users/favoritesController");
const router = express.Router();

router.get("/profile", getProfileFavs);
router.get("/job", getJobFavs);
router.post("/add", addFavorites);

router.delete("/delete/:id", deleteFavorites);

module.exports = router;
