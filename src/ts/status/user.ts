import { User } from "../interface/User";

export const nameEntrySectionUserStatus: { firstUser: User; secondUser: User } =
  {
    firstUser: {
      name: "",
      decideCard: "",
    },
    secondUser: {
      name: "",
      decideCard: "",
    },
  };

export const users: {
  firstUser: User;
  secondUser: User;
} = {
  firstUser: {
    name: "takao",
    decideCard: "",
  },
  secondUser: {
    name: "kennya",
    decideCard: "",
  },
};

export const choiceTruthOrChallengeSectionUserStatus: {
  winner: User;
  loser: User;
} = {
  winner: {
    name: "",
    decideCard: "",
  },
  loser: {
    name: "",
    decideCard: "",
  },
};

const winUser: User = {
  name: "",
  decideCard: ""
}

const loseUser: User = {
  name: "",
  decideCard: ""
}