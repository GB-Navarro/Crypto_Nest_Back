import { Router } from "express";

import exampleRouter from "./example/exampleRouter";

const router = Router();

router.use(exampleRouter);

export default router;