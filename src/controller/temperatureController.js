const temperatureService = require("../services/temperatureService");

async function addTemperature(req, res) {
  try {
    const record = await temperatureService.createTemperature(req);
    res.status(201).json({ message: "온도 기록이 추가되었습니다.", record });
  } catch (err) {
    console.error("온도 기록 추가 오류:", err);
    res
      .status(err.status || 500)
      .json({ message: err.message || "온도 기록 추가에 실패했습니다." });
  }
}

async function getTemperatures(req, res) {
  try {
    const records = await temperatureService.listTemperatures(req);
    res.json({ records });
  } catch (err) {
    console.error("온도 기록 조회 오류:", err);
    res
      .status(err.status || 500)
      .json({ message: err.message || "온도 기록 조회에 실패했습니다." });
  }
}

module.exports = {
  addTemperature,
  getTemperatures,
};
