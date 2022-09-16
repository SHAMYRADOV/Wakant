const express = require("express");
const {
  addService,
  getMyService,
  deleteService,
} = require("../../../controllers/users/serviceController");
const router = express.Router();

router.get("/", getMyService);
router.post("/add", addService);

router.delete("/delete/:id", deleteService);

module.exports = router;
