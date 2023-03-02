import { winLoseStatus } from "../../status/user";

export class Message {
  static firstLine(parentSectionName: string): HTMLParagraphElement {
    const sectionName = `${parentSectionName}__message`;
    const p = document.createElement("p");
    p.className = `${sectionName}__first-line`;

    const name = document.createElement("span");
    name.className = `${sectionName}__first-line__name`;
    name.innerText = winLoseStatus.loseUser.name;

    const second = document.createElement("span");
    second.className = `${sectionName}__first-line__second`;
    second.innerText = "さん";

    p.appendChild(name);
    p.appendChild(second);

    return p;
  }

  static secondLine(parentSectionName: string): HTMLParagraphElement {
    const sectionName = `${parentSectionName}__message`;
    const p = document.createElement("p");
    p.className = `${sectionName}__second-line`;

    const truth = document.createElement("span");
    truth.className = `${sectionName}__second-line__truth`;
    truth.innerText = "真実";

    const second = document.createElement("span");
    second.className = `${sectionName}__second-line__second`;
    second.innerText = "か";

    const dare = document.createElement("span");
    dare.className = `${sectionName}__second-line__dare`;
    dare.innerText = "挑戦";

    const fourth = document.createElement("span");
    fourth.className = `${sectionName}__second-line__fourth`;
    fourth.innerText = "を";

    const fifth = document.createElement("span");
    fifth.className = `${sectionName}__second-line__fifth`;
    fifth.innerText = "選んでください";

    p.appendChild(truth);
    p.appendChild(second);
    p.appendChild(dare);
    p.appendChild(fourth);
    p.appendChild(fifth);

    return p;
  }
}
