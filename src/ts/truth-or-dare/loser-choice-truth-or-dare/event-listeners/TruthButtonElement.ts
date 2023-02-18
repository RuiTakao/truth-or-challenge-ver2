import { WinnerChiceTruthOrDare } from "../../winner-choice-truth-or-dare/WinnerChoiceTruthOrDare";
import { ChoiceContainer } from "../components/ChoiceContainer";

export class TruthButtonElement {
  static addEventListener(choiceContainer: ChoiceContainer) {
    choiceContainer.destroy();
    new WinnerChiceTruthOrDare();
  }
}
