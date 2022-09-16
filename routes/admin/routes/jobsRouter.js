const express = require("express");
const {
  getAllJobs,
  getJob,
} = require("../../../controllers/public/jobController");
const { editJob } = require("../../../controllers/users/jobController");

const router = express.Router();

router.get("/", getAllJobs);
router.get("/:id", getJob);

router.patch("/edit/:id", editJob);

module.exports = router;
