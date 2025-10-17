const { Router } = require("express");

const {
  addTemperature,
  getTemperatures,
} = require("../controller/temperatureController");

const router = Router();

router.post("/", addTemperature);
router.get("/", getTemperatures);

module.exports = router;
