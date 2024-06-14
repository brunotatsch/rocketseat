import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = SpecificationRepository.getInstance();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase); 

export { createSpecificationController };
