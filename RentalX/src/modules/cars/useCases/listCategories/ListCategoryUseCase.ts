import { Category } from "../../model/Category"
import { ICreateCategoriesRepository } from "../../repositories/IcategoriesRepository";

interface iRequest {
  name: string;
  description: string;
}

class ListCategoryUseCase {

  constructor(private categoryRepository: ICreateCategoriesRepository) {

  }

  execute(): Category[] {

    const categories = this.categoryRepository.list();

    return categories;
  }

}

export { ListCategoryUseCase }