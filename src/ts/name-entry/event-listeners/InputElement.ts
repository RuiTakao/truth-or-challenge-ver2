import { Button } from "../components/Button";

export class InputElement {
  static addEventListeners(inputElement: HTMLInputElement, button: Button) {
    if (inputElement.value.length > 1) {
      button.unlock();
    } else {
      button.lock();
    }
  }
}
