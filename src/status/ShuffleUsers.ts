import {
  User,
  nameEntrySectionUserStatus,
  playingCardGameSectionUserStatus,
} from "./user.js";

export class ShuffleUsers {
  constructor() {
    const shuffleUsers: [User, User] = [
      nameEntrySectionUserStatus.firstUser,
      nameEntrySectionUserStatus.secondUser,
    ];
    shuffleUsers.sort(() => 0.5 - Math.random());
    playingCardGameSectionUserStatus.firstUser = shuffleUsers[0];
    playingCardGameSectionUserStatus.secondUser = shuffleUsers[1];
  }
}
