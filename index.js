import readlineSync from 'readline-sync';
import { greeting } from './src/cli.js';

function startGame(game, RULE) {
  const userName = greeting();

  if (game && RULE) {
    console.log(RULE);
    for (let i = 0; i < 3; i += 1) {
      const {
        question, result,
      } = game();

      const QUESTION = `Question: ${question}`;
      const CORRECT = 'Correct!';
      const CONGRATS = `Congratulations, ${userName}!`;

      console.log(QUESTION);

      const answer = readlineSync.question('Your answer: ');
      const WRONG = `'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;

      if (result === answer) {
        console.log(CORRECT);
        if (i === 2) {
          console.log(CONGRATS);
        }
      } else {
        console.log(WRONG);
        break;
      }
    }
  }
}

export default startGame;
