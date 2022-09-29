import { Router } from "express";

import exampleController from "../../controllers/example/exampleController";

const exampleRouter = Router();

exampleRouter.get("/example", exampleController.example);

export default exampleRouter;

