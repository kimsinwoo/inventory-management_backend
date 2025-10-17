import e from "express";
import approval from "../routes/approvalRoute.js";

const app = e()

app.use('/approval', approval)

export default app