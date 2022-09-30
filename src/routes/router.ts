import { Router } from "express";

import exampleRouter from "./example/exampleRouter";
import authRouter from "./auth/authRoutes";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);

export default router;