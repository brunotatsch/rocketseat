import { Router } from "express";
import { ensureAdmin } from "../../../../../shared/infra/http/middlewares/ensureAdmin";
import { ensureAuthenticated } from "../../../../../shared/infra/http/middlewares/ensureAuthenticated";
import { CreateTagController } from "../../../useCases/createTag/CreateTagController";
import { ListTagsController } from "../../../useCases/listTags/ListTagsController";

const tagRouter = Router();
const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

tagRouter.post("/", ensureAuthenticated, ensureAdmin, createTagController.handle);
tagRouter.get("/", ensureAuthenticated, listTagsController.handle);

export { tagRouter };