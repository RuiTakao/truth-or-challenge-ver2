import { playingCardGameSectionUserStatus } from "../../../status/user.js";
import { message, button } from "../../../util/text-list.js";
import { SelectCardEvent } from "../event/selectCardEvent.js";
import { DecideCardEvent } from "../event/decideCardEvent.js";
import { OpeningMessageLabel } from "./label/OpeningMessageLabel.js";
import { ClearCardOfSelectTypeEvent } from "../event/clearCardOfSelectTypeEvent.js";
export class FirstAnimationOfPlayingCardGameSection {
    constructor() {
        this.username = playingCardGameSectionUserStatus.firstUser.name;
        this.sectionElement = document.getElementById("playing-card-game-section");
        this.bubble = this.sectionElement.querySelector(".playing-card-game-section__bubble");
        this.bubbleText = this.bubble.querySelector(".playing-card-game-section__bubble__text");
        this.buttonContent = this.bubble.querySelector(".playing-card-game-section__event-content");
        this.buttonContentText = this.buttonContent.querySelector(".playing-card-game-section__event-content__text");
        this.decideCardEventButton = document.getElementById("playing-card-game-section__decided-card-event");
        this.clearCardOfSelectTypeEventButton = document.getElementById("playing-card-game-section__clear-card-of-select-type-event");
        const cardList = this.sectionElement.querySelector(".playing-card-game-section__card-list");
        this.card = cardList.querySelectorAll(".card");
        this.init();
        this.animation();
        new SelectCardEvent();
        new DecideCardEvent();
        new ClearCardOfSelectTypeEvent();
    }
    init() {
        this.bubbleInit();
        this.cardInit();
    }
    animation() {
        this.cardAnimation();
        setTimeout(() => {
            new OpeningMessageLabel(this.username);
        }, 3500);
        setTimeout(() => {
            this.bubbleAnimation();
        }, 6000);
    }
    bubbleInit() {
        this.bubbleText.innerText =
            this.username + message.playingCardGameSectionMessage;
        this.buttonContent.style.display = "none";
        this.buttonContentText.innerText =
            message.playingCardGameSectionButtonMessage;
        this.decideCardEventButton.innerText = button.decideCardEventButtonText;
        this.clearCardOfSelectTypeEventButton.innerText =
            button.clearCardOfSelectTypeEventButtonText;
        this.bubble.classList.add("--hide");
    }
    cardInit() {
        this.card.forEach((value) => {
            value.classList.add("--hide");
            value.classList.add("--lock");
        });
    }
    bubbleAnimation() {
        this.bubble.classList.add("--fadeIn");
        setTimeout(() => {
            this.bubble.classList.remove("--hide");
        }, 100);
    }
    cardAnimation() {
        this.card.forEach((value) => {
            value.classList.add("--moving");
            setTimeout(() => {
                value.classList.remove("--hide");
                value.classList.remove("--moving");
            }, 3500);
            setTimeout(() => {
                value.classList.remove("--lock");
            }, 6000);
        });
    }
}
//# sourceMappingURL=FirstAnimationOfPlayingCardGameSection.js.map