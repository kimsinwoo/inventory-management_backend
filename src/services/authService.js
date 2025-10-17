// src/services/authService.js
import bcrypt from "bcryptjs";
import { createSession } from "../utils/sessionAuth.js";

export async function loginUser(req, username, password) {
  const db = req.app.get("db");
  const user = await db.User.findOne({ where: { username } });
  if (!user) throw new Error("사용자 없음");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("비밀번호 불일치");

  await createSession(req, user);

  return { id: user.id, username: user.username };
}

export async function logoutUser(req) {
  return new Promise((resolve, reject) => {
    req.session.destroy(err => {
      if (err) reject(err);
      else resolve();
    });
  });
}
