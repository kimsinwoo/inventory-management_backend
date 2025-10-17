import { Router } from "express";
import approvalRoute from "./approvalRoute.js";

const router = Router();

router.use("/approval", approvalRoute);

export default router;