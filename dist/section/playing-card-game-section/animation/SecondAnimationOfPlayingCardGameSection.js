import { playingCardGameSectionUserStatus } from "../../../status/user.js";
import { message } from "../../../util/text-list.js";
import { OpeningMessageLabel } from "./label/OpeningMessageLabel.js";
export class SecondAnimationOfPlayingCardGameSection {
    constructor() {
        this.username = playingCardGameSectionUserStatus.secondUser.name;
        this.sectionElement = document.getElementById("playing-card-game-section");
        this.bubble = this.sectionElement.querySelector(".playing-card-game-section__bubble");
        this.bubbleText = this.bubble.querySelector(".playing-card-game-section__bubble__text");
        this.buttonContent = this.bubble.querySelector(".playing-card-game-section__event-content");
        const cardList = this.sectionElement.querySelector(".playing-card-game-section__card-list");
        this.card = cardList.querySelectorAll(".card");
        this.selectedCard = document.getElementById(playingCardGameSectionUserStatus.firstUser.decideCard);
        this.usernameOnSelectedCard =
            playingCardGameSectionUserStatus.firstUser.name;
        this.init();
        this.animation();
    }
    init() {
        this.bubbleInit();
        this.cardInit();
    }
    animation() {
        this.cardAnimation();
        new OpeningMessageLabel(this.username);
        setTimeout(() => {
            this.bubbleAnimation();
        }, 3500);
    }
    bubbleInit() {
        this.bubbleText.innerText =
            this.username + message.playingCardGameSectionMessage;
        this.bubble.style.display = "none";
        this.bubble.classList.add("--hide");
        this.bubbleText.style.display = "block";
        this.buttonContent.style.display = "none";
    }
    cardInit() {
        this.selectedCard.classList.remove("--selected");
        this.selectedCard.classList.add("--decided");
        const nameOnCard_front = this.selectedCard.querySelector(".name__front-side");
        const nameOnCard_back = this.selectedCard.querySelector(".name__back-side");
        nameOnCard_front.innerText = this.usernameOnSelectedCard;
        nameOnCard_back.innerText = this.usernameOnSelectedCard;
        this.card.forEach((value) => {
            value.classList.add("--lock");
        });
    }
    bubbleAnimation() {
        this.bubble.style.display = "block";
        setTimeout(() => {
            this.bubble.classList.add("--fadeIn");
        }, 100);
        setTimeout(() => {
            this.bubble.classList.remove("--hide");
        }, 200);
    }
    cardAnimation() {
        setTimeout(() => {
            this.card.forEach((value) => {
                value.classList.remove("--lock");
            });
        }, 3500);
    }
}
//# sourceMappingURL=SecondAnimationOfPlayingCardGameSection.js.map