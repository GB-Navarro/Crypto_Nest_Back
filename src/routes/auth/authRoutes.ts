import { Router } from "express";

import genericMiddlewares from "../../middlewares/generic/genericMiddlewares";
import authMiddlewares from "../../middlewares/auth/authMiddlewares";
import authSchemas from "../../schemas/auth/authSchemas";
import authController from "../../controllers/auth/authController";

const authRouter = Router();

authRouter.post("/sign-up", genericMiddlewares.validateSchema(authSchemas.signUp), authMiddlewares.checkPasswordsEquality, authController.signUp);
authRouter.post("/sign-in", genericMiddlewares.validateSchema(authSchemas.signIn), authController.signIn);
export default authRouter;