const express = require("express");
const {
  addQuestionnaire,
  editQuestionnaire,
  deleteQuestionnaire,
  getMyQuestionnaire,
} = require("../../../controllers/users/questionnaireController");
const router = express.Router();

router.get("/", getMyQuestionnaire);
router.post("/add", addQuestionnaire);
router.patch("/edit/", editQuestionnaire);

router.delete("/delete/:id", deleteQuestionnaire);

module.exports = router;
