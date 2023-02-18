import { WhiteBg } from "../modules/WhiteBg";
import { ChoiceContainer } from "./components/ChoiceContainer";
import { TruthButtonElement } from "./event-listeners/TruthButtonElement";

export class LoserChiceTruthOrDare {
  constructor() {
    const whiteBg = new WhiteBg();
    whiteBg.fadeIn();

    setTimeout(() => {
      const choiceContainer = new ChoiceContainer();

      choiceContainer.truthButtonElement.addEventListener(
        "click",
        TruthButtonElement.addEventListener.bind(
          choiceContainer,
          choiceContainer
        )
      );
    }, 1000);
  }
}
