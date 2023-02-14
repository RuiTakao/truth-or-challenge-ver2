import { winLoseStatus } from "../../status/user";
import { userStatus } from "../../status/user";
import { User } from "../../interface/User";
export class Judge {
  constructor() {
    if (
      this.getUserSelectNumber(userStatus.firstUser) >
      this.getUserSelectNumber(userStatus.secondUser)
    ) {
      this.setUserToWinLose(userStatus.firstUser, userStatus.secondUser);
    } else {
      this.setUserToWinLose(userStatus.secondUser, userStatus.firstUser);
    }

    this.test();
  }

  private getUserSelectNumber(user: User): number {
    const selectCard = document.getElementById(
      user.decideCard
    )! as HTMLLIElement;
    const selectNumber = selectCard.querySelector(
      ".num"
    )! as HTMLParagraphElement;
    if (typeof +selectNumber.innerText === "number") {
      user.selectNumber = +selectNumber.innerText;
    }
    return user.selectNumber;
  }

  private setUserToWinLose(winUser: User, LoseUser: User) {
    winLoseStatus.winUser = winUser;
    winLoseStatus.loseUser = LoseUser;
  }

  private test() {
    console.log(`winner: ${winLoseStatus.winUser.name}`);
    console.log(`winner select card: ${winLoseStatus.winUser.decideCard}`);
    console.log(`winner select number: ${winLoseStatus.winUser.selectNumber}`);
    console.log(`loser: ${winLoseStatus.loseUser.name}`);
    console.log(`loser select card: ${winLoseStatus.loseUser.decideCard}`);
    console.log(`loser select number: ${winLoseStatus.loseUser.selectNumber}`);
  }
}
