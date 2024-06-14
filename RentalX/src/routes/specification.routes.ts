import { request, response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/CreateSpecification";
import { listSpecificationController } from "../modules/cars/useCases/listSpecification"
const specificationRoutes = Router();

const specificationRepository = SpecificationRepository.getInstance();


specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
})

specificationRoutes.get("/", (request, response) => {
  return listSpecificationController.handle(request, response);
})

export { specificationRoutes };