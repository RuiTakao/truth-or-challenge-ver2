import { NameEntry } from "../name-entry/NameEntry";
import { PlayingCardGame } from "../playing-card-game/PlayingCardGame";

export class EndGame {
  private hostElement: HTMLDivElement;
  private element: HTMLDivElement;
  private sectionName: string;
  constructor() {
    this.sectionName = "end-game";
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.element = this.hostElement.querySelector(
      "#truth-or-dare"
    )! as HTMLDivElement;
    this.attach();
  }

  private attach() {
    this.element.appendChild(this.endGame());
  }

  private endGame() {
    const endGame = document.createElement("div");
    endGame.className = this.sectionName;

    const title = document.createElement("p");
    title.className = `${this.sectionName}__title`;
    title.innerText = "ゲーム終了";

    const restartSamePlayerButton = document.createElement("button");
    restartSamePlayerButton.className = `${this.sectionName}__restart-same-player-button`;
    restartSamePlayerButton.innerText = "もう一度同じプレイヤーで遊ぶ";
    restartSamePlayerButton.addEventListener(
      "click",
      this.restartSamePlayer.bind(this)
    );

    const restartOtherPlayerButton = document.createElement("button");
    restartOtherPlayerButton.className = `${this.sectionName}__restart-other-player-button`;
    restartOtherPlayerButton.innerText = "別のプレイヤーと遊ぶ";
    restartOtherPlayerButton.addEventListener(
      "click",
      this.restartOtherPlayer.bind(this)
    );

    endGame.appendChild(title);
    endGame.appendChild(restartSamePlayerButton);
    endGame.appendChild(restartOtherPlayerButton);

    return endGame;
  }

  private restartSamePlayer() {
    while (this.hostElement.firstChild) {
      this.hostElement.removeChild(this.hostElement.firstChild);
    }
    new PlayingCardGame();
  }

  private restartOtherPlayer() {
    while (this.hostElement.firstChild) {
      this.hostElement.removeChild(this.hostElement.firstChild);
    }
    new NameEntry();
  }
}
