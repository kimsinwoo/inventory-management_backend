import express from "express";
import dotenv from "dotenv";
import db from "../models/index.js";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  try {
    await db.sequelize.sync({ force: false });
    console.log("데이터베이스 연결 및 테이블 동기화 완료.");

    app.listen(PORT, () => {
      console.log(`서버 실행 중: https://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("서버 시작 중 오류 발생:", err);
    process.exit(1);
  }
}

await startServer();
