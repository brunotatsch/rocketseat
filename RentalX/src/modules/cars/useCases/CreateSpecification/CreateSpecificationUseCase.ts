import { Specification } from "../../model/Specification"
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface iRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {

  constructor(private specificationRepository: ISpecificationsRepository) {

  }

  execute({ name, description }: iRequest) : void {

    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists !!!");
    }

    this.specificationRepository.create({ name, description });

  }

}

export { CreateSpecificationUseCase }