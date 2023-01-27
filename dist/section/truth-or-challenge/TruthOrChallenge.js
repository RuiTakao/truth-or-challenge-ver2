import { ChoiceTruthOrChallenge } from "./choice-truth-or-challenge-section/ChoiceTruthOrChallengeSection.js";
export class TruthOrChallenge {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.templateElement = document.getElementById("truth-or-callenge-template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "truth-or-callenge-app";
        this.attach();
        this.next();
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
    next() {
        setTimeout(() => {
            new ChoiceTruthOrChallenge();
        }, 1000);
    }
}
//# sourceMappingURL=TruthOrChallenge.js.map