import { choice } from "../../status/choice";
import { winLoseStatus } from "../../status/user";

export class Message {
  static firstLine(parentSectionName: string) {
    const sectionName = `${parentSectionName}__message__first-line`;

    const p = document.createElement("p");
    p.className = sectionName;

    const name = document.createElement("span");
    name.className = `${sectionName}__name`;
    name.innerText = winLoseStatus.loseUser.name;

    const second = document.createElement("span");
    second.className = `${sectionName}__second`;
    second.innerText = "さん";

    p.appendChild(name);
    p.appendChild(second);

    return p;
  }

  static secondLine(parentSectionName: string) {
    const sectionName = `${parentSectionName}__message__second-line`;

    const p = document.createElement("p");
    p.className = sectionName;

    const winnerChoice = document.createElement("span");
    winnerChoice.className = `${sectionName}__winnerChoice`;
    winnerChoice.innerText = choice.command;

    const second = document.createElement("span");
    second.className = `${sectionName}__second`;
    second.innerText = "についての";

    const truth = document.createElement("span");
    truth.className = `${sectionName}__truth`;
    truth.innerText = choice.truthOrDare;

    const fourth = document.createElement("span");
    fourth.className = `${sectionName}__fourth`;
    fourth.innerText = "を";

    const fifth = document.createElement("span");
    fifth.className = `${sectionName}__fifth`;
    fifth.innerText = "お願いします";

    p.appendChild(winnerChoice);
    p.appendChild(second);
    p.appendChild(truth);
    p.appendChild(fourth);
    p.appendChild(fifth);

    return p;
  }
}
