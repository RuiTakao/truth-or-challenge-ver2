import { NameEntrySection } from "./section/name-entry-section/nameEntrySection";
import { PlayingCardGameSection } from "./section/playing-card-game-section/playingCardGameSection";
import { TruthOrChallenge } from "./section/truth-or-challenge/TruthOrChallenge";
import { App as card } from "./section/playing-card-game-section/app";

class App {
  constructor() {
    // new NameEntrySection();
    // new PlayingCardGameSection();
    // new TruthOrChallenge();

    new card();
  }
}

new App();
