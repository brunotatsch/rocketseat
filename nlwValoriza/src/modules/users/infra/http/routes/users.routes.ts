import { Router } from "express";
import { ensureAuthenticated } from "../../../../../shared/infra/http/middlewares/ensureAuthenticated";
import { CreateUserController } from "../../../useCases/createUsers/CreateUserController";
import { ListUserReceiveComplimentsController } from "../../../useCases/listUserReceiveCompliments/ListUserReceiveComplimentsController";
import { ListUsersController } from "../../../useCases/listUsers/ListUsersController";
import { ListUserSendComplimentsController } from "../../../useCases/listUserSendCompliments/ListUserSenderComplimentsController";


const userRouters = Router();

const createUserController = new CreateUserController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUsersController = new ListUsersController();

console.log("Teste");

userRouters.post("/", createUserController.handle);
userRouters.get("/", ensureAuthenticated, listUsersController.handle);
userRouters.get("/compliment/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
userRouters.get("/compliment/send", ensureAuthenticated, listUserSendComplimentsController.handle);

export { userRouters };