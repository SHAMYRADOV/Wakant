const express = require("express");
const {
  addDiscontent,
  editDiscontent,
  deleteDiscontent,
} = require("../../../controllers/users/discontentController");

const router = express.Router();

router.post("/add", addDiscontent);
router.patch("/edit/:id", editDiscontent);

router.delete("/delete/:id", deleteDiscontent);

module.exports = router;
