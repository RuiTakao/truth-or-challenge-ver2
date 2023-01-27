export class ChoiceTruthOrChallenge {
    constructor() {
        this.hostElement = document.getElementById("truth-or-callenge-app");
        this.templateElement = document.getElementById("choice-truth-or-callenge-template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "choice-truth-or-challenge";
        this.text1 = this.element.querySelector(".choice-truth-or-callenge-section__message--text1");
        this.text2 = this.element.querySelector(".choice-truth-or-callenge-section__message--text2");
        this.eventContainer = this.element.querySelector(".choice-truth-or-callenge-section__event-container");
        this.attach();
        this.init();
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
    init() {
        this.text1.classList.add('--hide');
        this.text2.classList.add('--hide');
        this.eventContainer.classList.add('--hide');
    }
}
//# sourceMappingURL=ChoiceTruthOrChallengeSection.js.map