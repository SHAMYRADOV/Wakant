const express = require("express");
const {
  getAllProfile,
  getProfile,
} = require("../../../controllers/public/profileController");
const {
  getProfileResponse,
} = require("../../../controllers/users/profileController");
const router = express.Router();

router.get("/", getAllProfile);
router.get("/:id", getProfile);

router.get("/responses/:id", getProfileResponse);

module.exports = router;
