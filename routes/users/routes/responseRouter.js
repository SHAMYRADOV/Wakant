const express = require("express");
const {
  deleteQuestionnaire,
} = require("../../../controllers/users/questionnaireController");
const {
  addResponse,
  getMyResponses,
  getResponsesToMe,
} = require("../../../controllers/users/responseController");

const router = express.Router();

router.get("/my", getMyResponses);
router.get("/to", getResponsesToMe);
router.post("/add", addResponse);

router.delete("/delete/:id", deleteQuestionnaire);

module.exports = router;
