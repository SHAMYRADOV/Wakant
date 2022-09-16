const express = require("express");
const {
  getAllJobs,
  getJob,
} = require("../../../controllers/public/jobController");
const { getJobResponse } = require("../../../controllers/users/jobController");
const router = express.Router();

router.get("/", getAllJobs);
router.get("/:id", getJob);
router.get("/responses/:id", getJobResponse);

module.exports = router;
