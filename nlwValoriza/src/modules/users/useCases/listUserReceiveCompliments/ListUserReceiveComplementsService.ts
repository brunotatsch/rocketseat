import { request } from "express";
import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../../compliments/infra/typeorm/repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    console.log(user_id);
    const compliments = complimentsRepositories.find({
      where: {
        user_receiver_id: user_id
      },relations: ["user_sender", "user_receiver", "tag"]
    });

    return compliments
  }
}

export { ListUserReceiveComplimentsService }