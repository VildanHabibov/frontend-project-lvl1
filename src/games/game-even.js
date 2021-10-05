import startGame from '../index.js';
import { randomInteger } from '../cli.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

function evenGame() {
  const question = randomInteger(1, 100);
  const result = question % 2 === 0 ? 'yes' : 'no';
  return { question, result };
}

const runner = () => startGame(evenGame, RULE);
export default runner;
