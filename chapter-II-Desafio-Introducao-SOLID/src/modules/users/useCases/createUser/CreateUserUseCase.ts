import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  admin?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name, admin ,created_at, updated_at }: IRequest): User {
    
    const user = this.usersRepository.findByEmail(email);

    if (user) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, email, admin, created_at, updated_at });

    const newUser = this.usersRepository.findByEmail(email);

    return newUser;

  }
}

export { CreateUserUseCase };
