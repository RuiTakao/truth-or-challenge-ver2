import { User } from "../../../interface/User";
import { users } from "../../../status/user";

export class UserShuffle {
  constructor() {
    const array: [User, User] = [users.firstUser, users.secondUser];
    array.sort(() => 0.5 - Math.random());
    users.firstUser = array[0];
    users.secondUser = array[1];
  }
}
