import {
  playingCardGameSectionUserStatus,
  choiceTruthOrChallengeSectionUserStatus,
} from "../../../status/user";

export class JudgeEvent {
  private firstUserDecidedCard: HTMLLIElement;
  private secondUserDecidedCard: HTMLLIElement;
  constructor(firstUserDecidedCardId: string, secondUserDecidedCardId: string) {
    this.firstUserDecidedCard = document.getElementById(
      firstUserDecidedCardId
    )! as HTMLLIElement;
    this.secondUserDecidedCard = document.getElementById(
      secondUserDecidedCardId
    )! as HTMLLIElement;

    this.setResultStatus();

    console.log(choiceTruthOrChallengeSectionUserStatus);
  }

  setResultStatus() {
    if (
      this.getNumber(this.firstUserDecidedCard) >
      this.getNumber(this.secondUserDecidedCard)
    ) {
      this.setWinnerUser(playingCardGameSectionUserStatus.firstUser.name);
      this.setLoserUser(playingCardGameSectionUserStatus.secondUser.name);
    } else {
      this.setWinnerUser(playingCardGameSectionUserStatus.secondUser.name);
      this.setLoserUser(playingCardGameSectionUserStatus.firstUser.name);
    }
  }

  private setWinnerUser(user: string) {
    choiceTruthOrChallengeSectionUserStatus.winner.name = user;
  }

  private setLoserUser(user: string) {
    choiceTruthOrChallengeSectionUserStatus.loser.name = user;
  }

  private getNumber(decideCard: HTMLLIElement): number {
    const p = decideCard.querySelector(".num")! as HTMLParagraphElement;
    if (typeof p.textContent === "number") {
      return +p.textContent;
    } else {
      return 0;
    }
  }
}
