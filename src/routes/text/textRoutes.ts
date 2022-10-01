import { Router } from "express";

import textController from "../../controllers/text/textController";
import authMiddlewares from "../../middlewares/auth/authMiddlewares";
import genericMiddlewares from "../../middlewares/generic/genericMiddlewares";
import textMiddlewares from "../../middlewares/text/textMiddlewares";
import textSchemas from "../../schemas/text/textSchemas";

const textRouter = Router();

textRouter.post("/insert/:type", textMiddlewares.validateUrlParam ,genericMiddlewares.validateSchema(textSchemas.create), authMiddlewares.validateToken, textController.create);

export default textRouter;

