// src/controllers/authController.js
import { loginUser, logoutUser } from "../services/authService.js";

export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await loginUser(req, username, password);
    res.json({ message: "로그인 성공", user });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
}

export async function logout(req, res) {
  try {
    await logoutUser(req);
    res.clearCookie("connect.sid");
    res.json({ message: "로그아웃 성공" });
  } catch (err) {
    res.status(500).json({ message: "로그아웃 실패" });
  }
}
