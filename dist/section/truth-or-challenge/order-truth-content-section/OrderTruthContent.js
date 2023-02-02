import { FirstAnimationOfOerderTruthContentSection } from "./animation/FirstAnimationOfOerderTruthContentSection.js";
export class OrderTruthContent {
    constructor() {
        this.hostElement = document.getElementById("truth-or-callenge-app");
        this.templateElement = document.getElementById("order-truth-content-template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "order-truth-content";
        this.attach();
        this.next();
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
    next() {
        new FirstAnimationOfOerderTruthContentSection();
    }
}
//# sourceMappingURL=OrderTruthContent.js.map