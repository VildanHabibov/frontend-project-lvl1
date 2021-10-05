import startGame from '../index.js';
import { randomInteger, isPrime } from '../src/cli.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function primeGame() {
  const question = randomInteger(1, 100);
  const result = isPrime(question) ? 'yes' : 'no';
  return { question, result };
}

const runner = () => startGame(primeGame, RULE);
export default runner;
