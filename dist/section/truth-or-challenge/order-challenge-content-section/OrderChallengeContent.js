export class OrderChallengeContent {
    constructor() {
        this.hostElement = document.getElementById("truth-or-callenge-app");
        this.templateElement = document.getElementById("order-challenge-content-template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "order-challenge-content";
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
}
//# sourceMappingURL=OrderChallengeContent.js.map