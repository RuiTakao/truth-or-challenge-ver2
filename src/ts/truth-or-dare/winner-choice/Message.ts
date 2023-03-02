import { choice } from "../../status/choice";
import { winLoseStatus } from "../../status/user";

export class Message {
  static firstLine(parentSectionName: string): HTMLParagraphElement {
    const sectionName = `${parentSectionName}__message`;

    const p = document.createElement("p");
    p.className = `${sectionName}__first-line`;

    const truth = document.createElement("span");
    truth.className = `${sectionName}__first-line__truth`;
    truth.innerText = choice.truthOrDare;

    const second = document.createElement("span");
    second.className = `${sectionName}__first-line__second`;
    second.innerText = "が";

    const third = document.createElement("span");
    third.className = `${sectionName}__first-line__third`;
    third.innerText = "選ばれました";

    p.appendChild(truth);
    p.appendChild(second);
    p.appendChild(third);

    return p;
  }

  static secondLine(parentSectionName: string): HTMLParagraphElement {
    const sectionName = `${parentSectionName}__message`;

    const p = document.createElement("p");
    p.className = `${sectionName}__second-line`;

    const name = document.createElement("span");
    name.className = `${sectionName}__second-line__name`;
    name.innerText = winLoseStatus.winUser.name;

    const second = document.createElement("span");
    second.className = `${sectionName}__second-line__second`;
    second.innerText = "さん";

    p.appendChild(name);
    p.appendChild(second);

    return p;
  }

  static thirdLine(parentSectionName: string): HTMLParagraphElement {
    const sectionName = `${parentSectionName}__message`;

    const p = document.createElement("p");
    p.className = `${sectionName}__third-line`;

    const name = document.createElement("span");
    name.className = `${sectionName}__third-line__name`;
    name.innerText = winLoseStatus.loseUser.name;

    const second = document.createElement("span");
    second.className = `${sectionName}__third-line__second`;
    second.innerText = "さん";

    const third = document.createElement("span");
    third.className = `${sectionName}__third-line__third`;
    third.innerText = "に";

    const fourth = document.createElement("span");
    fourth.className = `${sectionName}__third-line__fourth`;
    fourth.innerText = "指示する";

    const truth = document.createElement("span");
    truth.className = `${sectionName}__third-line__truth`;
    truth.innerText = choice.truthOrDare;

    const sixth = document.createElement("span");
    sixth.className = `${sectionName}__third-line__sixth`;
    sixth.innerText = "を";

    const seventh = document.createElement("span");
    seventh.className = `${sectionName}__third-line__seventh`;
    seventh.innerText = "選んでください";

    p.appendChild(name);
    p.appendChild(second);
    p.appendChild(third);
    p.appendChild(fourth);
    p.appendChild(truth);
    p.appendChild(sixth);
    p.appendChild(seventh);

    return p;
  }
}
