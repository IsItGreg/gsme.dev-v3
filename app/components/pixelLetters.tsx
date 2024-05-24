const upperG = [
  [2, 0],
  [1, 0],
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [3, 2],
  [2, 2],
];

const lowerR = [
  [0, 2],
  [0, 3],
  [1, 1],
  [2, 1],
];

const lowerE = [
  [0, 1],
  [1, 1],
  [0, 2],
  [1, 3],
];

const lowerG = [
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [1, 4],
  [0, 4],
];

const lowerO = [
  [1, 1],
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [2, 2],
  [2, 1],
];

const lowerY = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [1, 4],
];

const upperS = [
  [1, 0],
  [0, 0],
  [0, 1],
  [1, 2],
  [1, 3],
  [0, 3],
];

const lowerM = [
  [0, 2],
  [0, 3],
  [1, 1],
  [2, 2],
  [2, 3],
  [3, 1],
  [4, 2],
  [4, 3],
];

const lowerL = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 3],
];

const lowerK = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 2],
  [2, 3],
  [2, 1],
];

const lowerV = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 2],
  [2, 1],
];

const altLowerG = [
  [1, 0],
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [1, 3],
  [0, 3],
];

const upperM = [
  [0, 3],
  [0, 2],
  [1, 1],
  [1, 0],
  [2, 2],
  [2, 3],
  [3, 1],
  [3, 0],
  [4, 2],
  [4, 3],
];

const upperE = [
  [0, 1],
  [1, 1],
  [1, 0],
  [0, 0],
  [0, 2],
  [0, 3],
  [1, 3],
];

function letterWidth(letter: number[][]) {
  return Math.max(...letter.map((coord: number[]) => coord[0]));
}

export const letters = {
  upperG: {
    points: upperG,
    width: letterWidth(upperG),
  },
  lowerR: {
    points: lowerR,
    width: letterWidth(lowerR),
  },
  lowerE: {
    points: lowerE,
    width: letterWidth(lowerE),
  },
  lowerG: {
    points: lowerG,
    width: letterWidth(lowerG),
  },
  lowerO: {
    points: lowerO,
    width: letterWidth(lowerO),
  },
  lowerY: {
    points: lowerY,
    width: letterWidth(lowerY),
  },
  upperS: {
    points: upperS,
    width: letterWidth(upperS),
  },
  lowerM: {
    points: lowerM,
    width: letterWidth(lowerM),
  },
  lowerL: {
    points: lowerL,
    width: letterWidth(lowerL),
  },
  lowerK: {
    points: lowerK,
    width: letterWidth(lowerK),
  },
  lowerV: {
    points: lowerV,
    width: letterWidth(lowerV),
  },
  altLowerG: {
    points: altLowerG,
    width: letterWidth(altLowerG),
  },
  upperM: {
    points: upperM,
    width: letterWidth(upperM),
  },
  upperE: {
    points: upperE,
    width: letterWidth(upperE),
  },
};
