import startGame from '../index.js';
import { randomInteger } from '../src/cli.js';

const RULE = 'What is the result of the expression?';
function calcGame() {
  const operators = ['+', '-', '*'];
  const index = randomInteger(0, 2);
  const operator = operators[index];
  const operand1 = randomInteger(1, 10);
  const operand2 = randomInteger(1, 10);

  const question = `${operand1} ${operator} ${operand2}`;

  let result;

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      result = null;
  }
  result = String(result);
  return {
    question, result,
  };
}

const runner = () => startGame(calcGame, RULE);
export default runner;
