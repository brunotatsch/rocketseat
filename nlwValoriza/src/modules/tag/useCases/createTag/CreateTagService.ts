import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../../infra/typeorm/repositories/TagRepositories";


interface ITagRequest {
  name: string; 
}


class CreateTagService {

  async execute({ name }: ITagRequest) {
    const tagRepositories = getCustomRepository(TagRepositories);

    if (!name) {
      throw new Error("Tag name incorrect");
    }

    const tagAlreadyExists = await tagRepositories.findOne({ name, })


    if (tagAlreadyExists) {
      //console.log("erro");
      throw new Error("Tag name already exists");
    }

    const tag = tagRepositories.create({
      name,
    })

    await tagRepositories.save(tag);

    return tag;
  };
}

export { CreateTagService };