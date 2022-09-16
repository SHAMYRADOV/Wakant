const express = require("express");
const {
  login,
  protect,
  updateMe,
} = require("../../controllers/admin/adminController");
const router = express.Router();

router.post("/login", login);
router.post("/update-me", protect, updateMe);

router.use("/categories", protect, require("./routes/categoriesRouter"));
router.use("/profile", protect, require("./routes/profileRouter"));
router.use("/jobs", protect, require("./routes/jobsRouter"));
router.use("/discontent", protect, require("./routes/discontentRouter"));
router.use("/service", protect, require("./routes/serviceRouter"));

module.exports = router;
