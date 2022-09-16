const express = require("express");
const {
  getUserServices,
  deleteService,
  getAllServices,
} = require("../../../controllers/admin/serviceController");
const { addService } = require("../../../controllers/users/serviceController");

const router = express.Router();

router.get("/", getAllServices);
router.get("/:id", getUserServices);
router.post("/add", addService);

router.delete("/edit/:id", deleteService);

module.exports = router;
