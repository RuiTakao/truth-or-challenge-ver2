import { playingCardGameSectionUserStatus, choiceTruthOrChallengeSectionUserStatus, } from "../../status/user.js";
export class ClosePlayingCardGameSection {
    constructor() {
        this.firstUserDecidedCard =
            playingCardGameSectionUserStatus.firstUser.decideCard;
        this.secondUserDecidedCard =
            playingCardGameSectionUserStatus.secondUser.decideCard;
        if (this.userGetNumber(this.firstUserDecidedCard) >
            this.userGetNumber(this.secondUserDecidedCard)) {
            choiceTruthOrChallengeSectionUserStatus.winner =
                playingCardGameSectionUserStatus.firstUser;
            choiceTruthOrChallengeSectionUserStatus.loser =
                playingCardGameSectionUserStatus.secondUser;
        }
        else if (this.userGetNumber(this.firstUserDecidedCard) <
            this.userGetNumber(this.secondUserDecidedCard)) {
            choiceTruthOrChallengeSectionUserStatus.winner =
                playingCardGameSectionUserStatus.secondUser;
            choiceTruthOrChallengeSectionUserStatus.loser =
                playingCardGameSectionUserStatus.firstUser;
        }
        else {
            return;
        }
        console.log(choiceTruthOrChallengeSectionUserStatus);
    }
    userGetNumber(decidedCard) {
        const selectCard = document.getElementById(decidedCard);
        const getNumber = selectCard.querySelector(".num");
        if (typeof +getNumber.innerText === "number") {
            return +getNumber.innerText;
        }
        else {
            return 0;
        }
    }
}
//# sourceMappingURL=closePlayingCardGameSection.js.map