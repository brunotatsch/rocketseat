import { Router } from "express";
import { complimentsRouter } from "../../../../modules/compliments/infra/http/routes/compliments.routes";
import { tagRouter } from "../../../../modules/tag/infra/http/routes/tag.routes";
import { userRouters } from "../../../../modules/users/infra/http/routes/users.routes";
import { authenticateRoutes } from "../../../../modules/users/infra/http/routes/authenticate.routes"

const router = Router();

router.use("/login",authenticateRoutes)
router.use("/users", userRouters);
router.use("/tags",tagRouter);
router.use("/Compliments",complimentsRouter)

export { router };