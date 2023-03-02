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

    const name = document.createElement("span");
    name.className = `${sectionName}__name`;
    name.innerText = winLoseStatus.winUser.name;

    const second = document.createElement("span");
    second.className = `${sectionName}__second`;
    second.innerText = "さん";

    const third = document.createElement("span");
    third.className = `${sectionName}__third`;
    third.innerText = "からの";

    const fourth = document.createElement("span");
    fourth.className = `${sectionName}__fourth`;
    fourth.innerText = "指示です";

    p.appendChild(name);
    p.appendChild(second);
    p.appendChild(third);
    p.appendChild(fourth);

    return p;
  }
}
