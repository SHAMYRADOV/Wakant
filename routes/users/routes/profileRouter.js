const express = require("express");
const {
  addProfile,
  editProfile,
  deleteProfile,
} = require("../../../controllers/users/profileController");
const router = express.Router();

router.post("/add", addProfile);
router.patch("/edit/:id", editProfile);

router.delete("/delete/:id", deleteProfile);

module.exports = router;
