import { Request, Response} from 'express';
import { ListCategoryUseCase } from '../listCategories/ListCategoryUseCase';

class ListCategoriesController {

  constructor(private listCategoryUseCase : ListCategoryUseCase) {

  };

  handle(request : Request, response : Response) {
    const all = this.listCategoryUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController }