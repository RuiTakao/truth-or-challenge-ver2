export class SelectBox {
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  questionList: HTMLUListElement;
  question: NodeListOf<HTMLLIElement>;
  sectionName: string;
  select: string[];
  constructor() {
    this.sectionName = "winner-choice-truth-or-dare";
    this.select = [
      "今日の出来事",
      "恥ずかしい経験",
      "黒歴史",
      "機能した失敗",
      "3サイズ",
      "恥ずかしいこという",
      "なんで昨日遅刻した？"
    ];
    this.hostElement = document.getElementById(
      "truth-or-dare"
    )! as HTMLDivElement;

    this.element = this.createBodyElement();

    this.questionList = this.createQuestionListElement(this.select);

    this.question = this.questionList.querySelectorAll("li");

    this.element.appendChild(this.questionList);
    this.hostElement.appendChild(this.element);
  }

  createBodyElement() {
    const element = document.createElement("div");
    element.className = `${this.sectionName}__select-box`;

    const title = document.createElement("p");
    title.className = `${this.sectionName}__select-box__title`;
    title.innerText = "真実";

    element.appendChild(title);

    return element;
  }

  createQuestionListElement(questionList: string[]) {
    const element = document.createElement("ul");
    element.className = `${this.sectionName}__select-box__question-list`;

    for (let i = 0; i < questionList.length; i++) {
      const li = document.createElement("li");
      li.className = `${this.sectionName}__select-box__question`;

      const text = document.createElement("p");
      text.className = `${this.sectionName}__select-box__question__text`;
      text.innerText = questionList[i];

      li.appendChild(text);
      element.appendChild(li);
    }

    return element;
  }
}
