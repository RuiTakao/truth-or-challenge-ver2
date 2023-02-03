import { EnterPlayerNameEvent } from "./EnterPlayerName";

export class EnterSecondPlayerNameEvent extends EnterPlayerNameEvent{
  constructor() {
    super();

    this.configure();
  }

  configure() {
    this.enterSecondInput.addEventListener(
      "input",
      this.inputHundler.bind(this)
    );
  }

  inputHundler() {
    if (this.enterSecondInput.value.length > 1) {
      this.button.classList.remove("--lock");
    } else {
      this.button.classList.add("--lock");
    }
  }
}