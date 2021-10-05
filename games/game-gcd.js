import startGame from '../src/index.js';
import { randomInteger } from '../src/cli.js';

const RULE = 'Find the greatest common divisor of given numbers.';

function gcdGame() {
  const operand1 = randomInteger(1, 100);
  const operand2 = randomInteger(1, 100);
  const min = Math.min(operand1, operand2);

  const question = `${operand1} ${operand2}`;
  let result = 1;

  for (let i = 1; i <= min; i += 1) {
    if (operand1 % i === 0 && operand2 % i === 0) {
      result = i;
    }
  }
  result = String(result);

  return {
    question, result,
  };
}

const runner = () => startGame(gcdGame, RULE);

export default runner;
