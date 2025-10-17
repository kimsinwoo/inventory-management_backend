const { Router } = require("express");

const approvalRoute = require("./approvalRoute");
const authRoute = require("./authRoute");
const temperatureRoute = require("./temperatureRoute");

const router = Router();

router.use("/approval", approvalRoute);
router.use("/auth", authRoute);
router.use("/temperature", temperatureRoute);

module.exports = router;
