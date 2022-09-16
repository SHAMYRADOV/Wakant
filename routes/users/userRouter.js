const express = require("express");
const {
  register,
  login,
  protect,
  getMe,
} = require("../../controllers/users/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/my-accaunt", protect, getMe);

router.use("/profile", protect, require("./routes/profileRouter.js"));
router.use("/jobs", protect, require("./routes/jobRouter.js"));
router.use("/questionnaires", protect, require("./routes/questionnaireRouter"));
router.use("/responses", protect, require("./routes/responseRouter"));
router.use("/discontent", protect, require("./routes/discontentRouter"));
router.use("/service", protect, require("./routes/serviceRouter"));
router.use("/favorites", protect, require("./routes/favoritesRouter"));

module.exports = router;
