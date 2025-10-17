function assertPayload(payload) {
  const required = ["Date", "StorageType", "Temp", "Inspector", "profile_id"];
  const missing = required.filter((field) => payload[field] === undefined);

  if (missing.length > 0) {
    const error = new Error(`필수 값 누락: ${missing.join(", ")}`);
    error.status = 400;
    throw error;
  }
}

async function createTemperature(req) {
  const db = req.app.get("db");
  const payload = req.body || {};

  assertPayload(payload);

  const record = await db.Temperature.create({
    Date: payload.Date,
    StorageType: payload.StorageType,
    Temp: payload.Temp,
    Inspector: payload.Inspector,
    profile_id: payload.profile_id,
  });

  return record;
}

async function listTemperatures(req) {
  const db = req.app.get("db");
  const where = {};

  if (req.query?.storageType) {
    where.StorageType = req.query.storageType;
  }

  return db.Temperature.findAll({
    where,
    order: [["created_at", "DESC"]],
  });
}

module.exports = {
  createTemperature,
  listTemperatures,
};
