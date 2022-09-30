import { Router } from "express";

import textController from "../../controllers/text/textController";
import authMiddlewares from "../../middlewares/auth/authMiddlewares";
import genericMiddlewares from "../../middlewares/generic/genericMiddlewares";
import textSchemas from "../../schemas/text/textSchemas";

const textRouter = Router();

textRouter.get("/insert/:type", genericMiddlewares.validateSchema(textSchemas.create), authMiddlewares.validateToken, textController.create);

export default textRouter;

