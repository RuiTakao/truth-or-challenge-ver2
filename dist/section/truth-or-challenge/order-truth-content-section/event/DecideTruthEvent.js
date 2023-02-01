import { selectOrder } from "../../../../status/trutOrChallenge.js";
import { SecondAnimationOfOerderTruthContentSection } from "../animation/SecondAnimationOfOrderTruthContentSection.js";
export class DecideTruthEvent {
    constructor() {
        this.hostElement = document.getElementById("order-truth-content");
        this.element = document.querySelector(".order-truth-content-first");
        this.button = document.getElementById("decide-truth-event");
        this.select = this.element.querySelector(".order-truth-content__select-list-input");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.eventHandler.bind(this));
    }
    eventHandler() {
        console.log("select truth");
        console.log(this.select.value);
        selectOrder.truth = this.select.value;
        this.hostElement.removeChild(this.element);
        new SecondAnimationOfOerderTruthContentSection();
    }
}
//# sourceMappingURL=DecideTruthEvent.js.map