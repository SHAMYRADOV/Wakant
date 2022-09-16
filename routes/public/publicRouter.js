const express = require("express");
const router = express.Router();

router.use("/categories", require("./routes/categoriesRouter.js"));
router.use("/profile", require("./routes/profileRouter"));
router.use("/jobs", require("./routes/jobsRouter"));

module.exports = router;
