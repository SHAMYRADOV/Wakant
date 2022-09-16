const express = require("express");
const {
  getAllDiscontent,
} = require("../../../controllers/admin/discontentController");

const router = express.Router();

router.get("/", getAllDiscontent);

module.exports = router;
