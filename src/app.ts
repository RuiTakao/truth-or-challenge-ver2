import { NameEntrySection } from "./section/name-entry-section/nameEntrySection.js";
import { PlayingCardGameSection } from "./section/playing-card-game-section/playingCardGameSection.js";
import { TruthOrChallenge } from "./section/truth-or-challenge/TruthOrChallenge.js";

class App {
  constructor() {
    new NameEntrySection();
    // new PlayingCardGameSection();
    // new TruthOrChallenge();
  }
}

new App();
