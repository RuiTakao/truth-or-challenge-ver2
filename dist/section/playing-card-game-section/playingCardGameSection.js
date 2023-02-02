import { FirstAnimationOfPlayingCardGameSection } from "./animation/FirstAnimationOfPlayingCardGameSection.js";
import { ShuffleUsers } from "../../status/ShuffleUsers.js";
export class PlayingCardGameSection {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.templateElement = document.getElementById("playing-card-game-section__template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "playing-card-game-section";
        this.cardTemplateElement = document.getElementById("playing-card-game-section__card__template");
        this.cardElement = this.element.querySelector(".playing-card-game-section__card-list");
        new ShuffleUsers();
        this.attach();
        new FirstAnimationOfPlayingCardGameSection();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
        this.insertCardList();
    }
    insertCardList() {
        for (let i = 1; i <= 13; i++) {
            const importedNode = document.importNode(this.cardTemplateElement.content, true);
            const element = importedNode.firstElementChild;
            element.id = `card${i}`;
            this.cardElement.insertAdjacentElement("beforeend", element);
        }
    }
}
//# sourceMappingURL=playingCardGameSection.js.map