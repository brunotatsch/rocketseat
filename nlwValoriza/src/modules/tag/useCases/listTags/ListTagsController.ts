import { Request, Response } from "express";
import { ListTagsService } from "./ListTagsService";

class ListTagsController {

  async handle(request: Request, response: Response) {

    const { name  } = request.body;

    const listTagService = new ListTagsService();

    const tags = await listTagService.execute();

    return response.json(tags);
  }

}

export { ListTagsController }