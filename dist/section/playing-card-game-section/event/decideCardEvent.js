import { playingCardGameSectionUserStatus } from "../../../status/user.js";
import { SecondAnimationOfPlayingCardGameSection } from "../animation/SecondAnimationOfPlayingCardGameSection.js";
import { ThirdAnimationOfPlayingCardGameSection } from "../animation/ThirdAnimationOfPlayingCardGameSection.js";
export class DecideCardEvent {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.button = document.getElementById("playing-card-game-section__decided-card-event");
        this.cardList = this.hostElement.querySelector(".playing-card-game-section__card-list");
        this.card = this.cardList.querySelectorAll(".card");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.clickHandler.bind(this));
    }
    clickHandler() {
        if (this.setFirstUserValidation()) {
            this.setFirstUser();
        }
        else if (this.setSecondUserValidation()) {
            this.setSecondUser();
        }
        else {
            return;
        }
    }
    setFirstUser() {
        const setCard = this.cardList.querySelector(".--selected");
        playingCardGameSectionUserStatus.firstUser.decideCard = setCard.id;
        new SecondAnimationOfPlayingCardGameSection();
        console.log("first event success");
        console.log(playingCardGameSectionUserStatus);
    }
    setSecondUser() {
        const setCard = this.cardList.querySelector(".--selected");
        if (playingCardGameSectionUserStatus.firstUser.decideCard !== setCard.id) {
            playingCardGameSectionUserStatus.secondUser.decideCard = setCard.id;
            new ThirdAnimationOfPlayingCardGameSection();
            console.log("second event success");
            console.log(playingCardGameSectionUserStatus);
        }
    }
    setFirstUserValidation() {
        return (!playingCardGameSectionUserStatus.firstUser.decideCard &&
            !playingCardGameSectionUserStatus.secondUser.decideCard &&
            this.cardList.querySelectorAll(".--selected").length === 1);
    }
    setSecondUserValidation() {
        return (playingCardGameSectionUserStatus.firstUser.decideCard !== "" &&
            !playingCardGameSectionUserStatus.secondUser.decideCard &&
            this.cardList.querySelectorAll(".--selected").length === 1);
    }
}
//# sourceMappingURL=decideCardEvent.js.map