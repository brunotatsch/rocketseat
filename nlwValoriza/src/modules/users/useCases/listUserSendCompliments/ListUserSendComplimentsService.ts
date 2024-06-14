import { request } from "express";
import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../../compliments/infra/typeorm/repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    
    const compliments = complimentsRepositories.find({
      where: {
        user_sender_id: user_id
      },relations: ["user_sender", "user_receiver", "tag"]
    });

    return compliments
  }
}

export { ListUserSendComplimentsService }