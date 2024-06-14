import { Category } from "../../model/Category"
import { ICreateCategoriesRepository } from "../../repositories/IcategoriesRepository";

interface iRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {

  constructor(private categoryRepository: ICreateCategoriesRepository) {

  }

  execute({ name, description }: iRequest) : void {

    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists !!!");
    }

    this.categoryRepository.create({ name, description });

  }

}

export { CreateCategoryUseCase }