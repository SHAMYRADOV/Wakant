const express = require("express");
const {
  addJob,
  editJob,
  deleteJob,
} = require("../../../controllers/users/jobController");

const router = express.Router();

router.post("/add", addJob);
router.patch("/edit/:id", editJob);

router.delete("/delete/:id", deleteJob);

module.exports = router;
