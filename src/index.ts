import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generationNumber = (): number => {
  return Math.floor(Math.random() * 101);
};

const askingReGame = () => {
  rl.question(`리겜?(Y/N)`, (reply) => {
    if (reply === "y" || reply === "Y") {
      playGuess();
    } else if (reply === "n" || reply === "n") {
      process.exit();
    } else {
      askingReGame();
    }
  });
};

const playGuess = async (): Promise<void> => {
  let guesses = 0;
  let secretNumber = generationNumber();

  const checkingAnswer = (answer: number, secret: number): void => {
    if (answer === secret) {
      console.log(`정답! ${guesses}번 걸림`);
      askingReGame();
    }

    if (answer < secret) {
      console.log("그 수 보다 높음");

      askNumber();
    }

    if (answer > secret) {
      console.log("그 수 보다 낮음");

      askNumber();
    }
  };

  const askNumber = (): void => {
    rl.question("추측 숫자 0 ~ 100: ", (answer) => {
      guesses += 1;
      checkingAnswer(Number(answer), secretNumber);
    });
  };

  askNumber();
};

playGuess();
