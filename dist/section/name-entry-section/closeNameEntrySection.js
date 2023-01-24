import { PlayingCardGameSection } from "../playing-card-game-section/playingCardGameSection.js";
export class CloseNameEntrySection {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.element = document.getElementById("name-entry-section");
        this.destroy();
        this.next();
    }
    destroy() {
        this.hostElement.removeChild(this.element);
    }
    next() {
        new PlayingCardGameSection();
    }
}
//# sourceMappingURL=closeNameEntrySection.js.map