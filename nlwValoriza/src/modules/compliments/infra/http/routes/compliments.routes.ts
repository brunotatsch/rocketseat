import { Router } from "express";
import { ensureAuthenticated } from "../../../../../shared/infra/http/middlewares/ensureAuthenticated";
import { CreateComplimentController } from "../../../useCases/createCompliment/CreateComplementController";

const complimentsRouter = Router();

const createComplimentRepository = new CreateComplimentController();

complimentsRouter.post("/", ensureAuthenticated, createComplimentRepository.handle);

export { complimentsRouter };