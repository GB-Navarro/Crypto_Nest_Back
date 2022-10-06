import { Router } from "express";

import exampleRouter from "./example/exampleRouter";
import authRouter from "./auth/authRoutes";
import textRouter from "./text/textRoutes";
import coinsRouter from "./coins/coinsRouter";

const router = Router();

router.use(exampleRouter);
router.use(authRouter);
router.use(textRouter);
router.use(coinsRouter);

export default router;