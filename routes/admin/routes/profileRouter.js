const express = require("express");
const {
  getAllProfile,
  getProfile,
} = require("../../../controllers/public/profileController");
const { editProfile } = require("../../../controllers/users/profileController");

const router = express.Router();

router.get("/", getAllProfile);
router.get("/:id", getProfile);

router.patch("/edit/:id", editProfile);

module.exports = router;
