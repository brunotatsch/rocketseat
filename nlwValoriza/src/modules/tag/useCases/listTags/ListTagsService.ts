import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";
import { TagRepositories } from "../../infra/typeorm/repositories/TagRepositories";


class ListTagsService {

  async execute() {
    
    const tagRepositories = getCustomRepository(TagRepositories);

    const tags = await tagRepositories.find();

   return classToPlain(tags);
  };
}

export { ListTagsService };