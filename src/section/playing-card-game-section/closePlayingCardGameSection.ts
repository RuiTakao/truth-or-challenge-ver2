import {
  playingCardGameSectionUserStatus,
  choiceTruthOrChallengeSectionUserStatus,
} from "../../status/user";

export class ClosePlayingCardGameSection {
  firstUserDecidedCard: string;
  secondUserDecidedCard: string;
  constructor() {
    this.firstUserDecidedCard =
      playingCardGameSectionUserStatus.firstUser.decideCard;
    this.secondUserDecidedCard =
      playingCardGameSectionUserStatus.secondUser.decideCard;
    if (
      this.userGetNumber(this.firstUserDecidedCard) >
      this.userGetNumber(this.secondUserDecidedCard)
    ) {
      choiceTruthOrChallengeSectionUserStatus.winner =
        playingCardGameSectionUserStatus.firstUser;
      choiceTruthOrChallengeSectionUserStatus.loser =
        playingCardGameSectionUserStatus.secondUser;
    } else if (
      this.userGetNumber(this.firstUserDecidedCard) <
      this.userGetNumber(this.secondUserDecidedCard)
    ) {
      choiceTruthOrChallengeSectionUserStatus.winner =
        playingCardGameSectionUserStatus.secondUser;
      choiceTruthOrChallengeSectionUserStatus.loser =
        playingCardGameSectionUserStatus.firstUser;
    } else {
      return;
    }

    console.log(choiceTruthOrChallengeSectionUserStatus)
  }

  userGetNumber(decidedCard: string): number {
    const selectCard = document.getElementById(decidedCard)! as HTMLLIElement;
    const getNumber = selectCard.querySelector(".num")! as HTMLParagraphElement;
    if (typeof +getNumber.innerText === "number") {
      return +getNumber.innerText;
    } else {
      return 0;
    }
  }
}
