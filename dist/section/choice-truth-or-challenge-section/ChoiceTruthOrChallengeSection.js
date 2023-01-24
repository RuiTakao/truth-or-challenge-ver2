export class ChoiceTruthOrChallengeSection {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.templateElement = document.getElementById("playing-card-game-section__template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "playing-card-game-section";
        this.cardTemplateElement = document.getElementById("playing-card-game-section__card__template");
        this.cardElement = this.element.querySelector(".playing-card-game-section__card-list");
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
//# sourceMappingURL=ChoiceTruthOrChallengeSection.js.map