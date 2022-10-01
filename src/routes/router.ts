import { Router } from "express";

import exampleRouter from "./example/exampleRouter";
import authRouter from "./auth/authRoutes";
import textRouter from "./text/textRoutes";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);
router.use(textRouter);

export default router;