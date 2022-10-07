import { Router } from "express";

import authMiddlewares from "../../middlewares/auth/authMiddlewares";
import coinsController from "../../controllers/coins/coinsController";

const coinsRouter = Router();

coinsRouter.get("/coins/getAll", authMiddlewares.validateToken, coinsController.getAll);
coinsRouter.get("/coins/get/:id", authMiddlewares.validateToken, coinsController.getById)
export default coinsRouter;

