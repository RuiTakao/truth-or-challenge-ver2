import { nameEntrySectionUserStatus, playingCardGameSectionUserStatus, } from "../../../status/user.js";
import { SecondAnimationOfNameEntrySection } from "../animation/SecondAnimationOfNameEntrySection.js";
import { ThirdAnimationOfNameEntrySection } from "../animation/ThirdAnimationOfNameEntrySection.js";
export class EnterPlayerNameAndDecideEvent {
    constructor() {
        this.enterFirstInput = document.getElementById("enter-first-player-name-event");
        this.enterSecondInput = document.getElementById("enter-second-player-name-event");
        this.button = document.getElementById("enter-player-name-and-decide-event");
        this.configure();
    }
    configure() {
        this.button.addEventListener("click", this.clickHandler.bind(this));
    }
    clickHandler() {
        if (this.setFirstUserValidation()) {
            this.setFirstUser();
        }
        else if (this.setSecondUserValidation()) {
            this.setSecondUser();
        }
        else {
            return;
        }
    }
    setFirstUser() {
        nameEntrySectionUserStatus.firstUser.name = this.enterFirstInput.value;
        new SecondAnimationOfNameEntrySection();
        console.log(nameEntrySectionUserStatus);
        console.log(playingCardGameSectionUserStatus);
    }
    setSecondUser() {
        nameEntrySectionUserStatus.secondUser.name = this.enterSecondInput.value;
        new ThirdAnimationOfNameEntrySection();
        console.log(nameEntrySectionUserStatus);
        console.log(playingCardGameSectionUserStatus);
    }
    setFirstUserValidation() {
        return (!nameEntrySectionUserStatus.firstUser.name &&
            !nameEntrySectionUserStatus.secondUser.name &&
            this.enterFirstInput.value.length > 1);
    }
    setSecondUserValidation() {
        return (nameEntrySectionUserStatus.firstUser.name !== "" &&
            !nameEntrySectionUserStatus.secondUser.name &&
            this.enterSecondInput.value.length > 1);
    }
}
//# sourceMappingURL=EnterPlayerNameAndDecideEvent.js.map