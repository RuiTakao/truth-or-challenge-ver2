import { playingCardGameSectionUserStatus } from "../../../status/user.js";
import { ClosePlayingCardGameSection } from "../closePlayingCardGameSection.js";
import { ChoiceTruthOrChallengeSection } from "../../choice-truth-or-challenge-section/ChoiceTruthOrChallengeSection.js";
export class ThirdAnimationOfPlayingCardGameSection {
    constructor() {
        this.sectionElement = document.getElementById("playing-card-game-section");
        this.bubble = this.sectionElement.querySelector(".playing-card-game-section__bubble");
        const cardList = this.sectionElement.querySelector(".playing-card-game-section__card-list");
        this.card = cardList.querySelectorAll(".card");
        this.selectedCardOfFirstUser = document.getElementById(playingCardGameSectionUserStatus.firstUser.decideCard);
        this.selectedCardOfSecondtUser = document.getElementById(playingCardGameSectionUserStatus.secondUser.decideCard);
        this.usernameOnSelectedCard =
            playingCardGameSectionUserStatus.secondUser.name;
        this.init();
        this.animation();
    }
    init() {
        this.bubbleInit();
        this.cardInit();
    }
    animation() {
        this.cardAnimation();
        setTimeout(() => {
            this.sectionElement.removeChild(this.bubble);
            new ClosePlayingCardGameSection();
            new ChoiceTruthOrChallengeSection();
        }, 1000);
    }
    bubbleInit() {
        this.sectionElement.removeChild(this.bubble);
    }
    cardInit() {
        this.selectedCardOfSecondtUser.classList.remove("--selected");
        this.selectedCardOfSecondtUser.classList.add("--decided");
        const nameOnCard_front = this.selectedCardOfSecondtUser.querySelector(".name__front-side");
        const nameOnCard_back = this.selectedCardOfSecondtUser.querySelector(".name__back-side");
        nameOnCard_front.innerText = this.usernameOnSelectedCard;
        nameOnCard_back.innerText = this.usernameOnSelectedCard;
        this.card.forEach((value) => {
            value.classList.add("--lock");
        });
        this.addNumberOfCard();
    }
    cardAnimation() {
        setTimeout(() => {
            this.selectedCardOfFirstUser.classList.add("--turn");
            setTimeout(() => {
                this.selectedCardOfSecondtUser.classList.add("--turn");
            }, 500);
        }, 500);
    }
    createNumber() {
        const numbers = [];
        for (let i = 1; i <= this.card.length; i++) {
            numbers.push(i);
        }
        numbers.sort(() => 0.5 - Math.random());
        return numbers;
    }
    addNumberOfCard() {
        const numbers = this.createNumber();
        this.card.forEach((value, index) => {
            const num = value.querySelector(".num");
            num.innerText = numbers[index].toString();
        });
    }
}
//# sourceMappingURL=ThirdAnimationOfPlayingCardGameSection.js.map