import { userStatus } from "../../status/user";
import { User } from "../../interface/User";

export class UserShuffle {
  constructor() {
    const array: [User, User] = [userStatus.firstUser, userStatus.secondUser];
    array.sort(() => 0.5 - Math.random());
    userStatus.firstUser = array[0];
    userStatus.secondUser = array[1];
  }
}
