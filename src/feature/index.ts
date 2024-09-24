import { rl, generationNumber } from "../util";

export const askingReGame = () => {
  rl.question(`리겜?(Y/N)`, (reply) => {
    const lowerReply = reply.toLowerCase();
    lowerReply === "y" ? playGuess() : process.exit();
  });
};

export const checkingAnswer = (
  answer: number,
  secretNumber: number,
  guesses: number
): void => {
  if (answer === secretNumber) {
    console.log(`정답! ${guesses}번 걸림`);
    askingReGame();
  }

  if (answer < secretNumber) {
    console.log("그 수 보다 높음");

    askNumber(guesses, secretNumber);
  }

  if (answer > secretNumber) {
    console.log("그 수 보다 낮음");

    askNumber(guesses, secretNumber);
  }
};

export const askNumber = (guestCount: number, secretNumber: number): void => {
  rl.question("추측 숫자 0 ~ 100: ", (answer) => {
    guestCount += 1;
    checkingAnswer(Number(answer), secretNumber, guestCount);
  });
};

export const playGuess = (): void => {
  let guesses = 0;
  let secretNumber = generationNumber();

  askNumber(guesses, secretNumber);
};
