import {
  nameEntrySectionUserStatus,
  playingCardGameSectionUserStatus,
} from "../../../status/user.js";
import { SecondAnimationOfNameEntrySection } from "../animation/SecondAnimationOfNameEntrySection.js";
import { ThirdAnimationOfNameEntrySection } from "../animation/ThirdAnimationOfNameEntrySection.js";

export class EnterPlayerNameAndDecideEvent {
  enterFirstInput: HTMLInputElement;
  enterSecondInput: HTMLInputElement;
  button: HTMLButtonElement;
  constructor() {
    this.enterFirstInput = document.getElementById(
      "enter-first-player-name-event"
    )! as HTMLInputElement;
    this.enterSecondInput = document.getElementById(
      "enter-second-player-name-event"
    )! as HTMLInputElement;
    this.button = document.getElementById(
      "enter-player-name-and-decide-event"
    )! as HTMLButtonElement;

    this.configure();
  }

  configure() {
    this.button.addEventListener("click", this.clickHandler.bind(this));
  }

  clickHandler() {
    if (this.setFirstUserValidation()) {
      this.setFirstUser();
    } else if (this.setSecondUserValidation()) {
      this.setSecondUser();
    } else {
      return;
    }
  }

  private setFirstUser() {
    nameEntrySectionUserStatus.firstUser.name = this.enterFirstInput.value;
    new SecondAnimationOfNameEntrySection();
    console.log(nameEntrySectionUserStatus);
    console.log(playingCardGameSectionUserStatus);
  }

  private setSecondUser() {
    nameEntrySectionUserStatus.secondUser.name = this.enterSecondInput.value;
    new ThirdAnimationOfNameEntrySection();
    console.log(nameEntrySectionUserStatus);
    console.log(playingCardGameSectionUserStatus);
  }

  private setFirstUserValidation(): boolean {
    return (
      !nameEntrySectionUserStatus.firstUser.name &&
      !nameEntrySectionUserStatus.secondUser.name &&
      this.enterFirstInput.value.length > 1
    );
  }

  private setSecondUserValidation(): boolean {
    return (
      nameEntrySectionUserStatus.firstUser.name !== "" &&
      !nameEntrySectionUserStatus.secondUser.name &&
      this.enterSecondInput.value.length > 1
    );
  }
}
