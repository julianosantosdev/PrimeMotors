import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUsersResponse } from "../../interfaces/user.interfaces";
import { Address, User } from "../../entities";
import { usersSchemaResponse } from "../../schemas/users.schemas";

const listUsersService = async (): Promise<TUsersResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);
  const users: User[] = await userRepository.find({
    relations: {
      address: true
    }
  });

  const returnUsers: TUsersResponse = usersSchemaResponse.parse(users);

  return returnUsers;
};

export default listUsersService;
