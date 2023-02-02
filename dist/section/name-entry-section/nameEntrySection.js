import { FirstAnimationOfNameEntrySection } from "./animation/FirstAnimationOfNameEntrySection.js";
export class NameEntrySection {
    constructor() {
        this.hostElement = document.getElementById("app");
        this.templateElement = document.getElementById("name-entry-section__template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "name-entry-section";
        this.attach();
        new FirstAnimationOfNameEntrySection();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
//# sourceMappingURL=nameEntrySection.js.map