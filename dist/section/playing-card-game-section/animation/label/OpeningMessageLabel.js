import { message } from "../../../../util/text-list.js";
export class OpeningMessageLabel {
    constructor(username) {
        this.username = username;
        this.hostElement = document.getElementById("app");
        this.templateElement = document.getElementById("opening-message-label__template");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "opening-message-label";
        this.firstText = this.element.querySelector(".opening-message-label-text--first");
        this.secondText = this.element.querySelector(".opening-message-label-text--second");
        this.init();
        this.attach();
        this.animation();
    }
    attach() {
        this.hostElement.insertAdjacentElement("beforeend", this.element);
    }
    init() {
        this.labeiInit();
        this.firstTextInit();
        this.secondTextInit();
    }
    animation() {
        this.labelAnimation();
        this.firstTextAnimation();
        this.secondTextAnimation();
        setTimeout(() => {
            this.destroy();
        }, 3200);
    }
    destroy() {
        this.hostElement.removeChild(this.element);
    }
    labeiInit() {
        this.element.classList.add("--hide");
    }
    firstTextInit() {
        this.firstText.innerText = this.username + message.openingMessage.firstText;
        this.firstText.classList.add("--hide");
        this.firstText.classList.add("--rightSide");
    }
    secondTextInit() {
        this.secondText.innerText = message.openingMessage.secondText;
        this.secondText.classList.add("--hide");
        this.secondText.classList.add("--rightSide");
    }
    labelAnimation() {
        this.element.classList.add("--fadeIn");
        setTimeout(() => {
            this.element.classList.add("--fadeOut");
        }, 2700);
    }
    firstTextAnimation() {
        setTimeout(() => {
            this.firstText.classList.add("--slideIn");
        }, 300);
        setTimeout(() => {
            this.firstText.classList.add("--slideOut");
        }, 1200);
    }
    secondTextAnimation() {
        setTimeout(() => {
            this.secondText.classList.add("--slideIn");
        }, 1200);
        setTimeout(() => {
            this.secondText.classList.add("--slideOut");
        }, 2100);
    }
}
//# sourceMappingURL=OpeningMessageLabel.js.map