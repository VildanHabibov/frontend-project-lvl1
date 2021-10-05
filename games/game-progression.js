import startGame from '../src/index.js';
import { randomInteger } from '../src/cli.js';

const RULE = 'What number is missing in the progression?';

function progressionGame() {
  const number = randomInteger(1, 100);
  const step = randomInteger(1, 10);
  const progression = [];
  const hiddenIndex = randomInteger(0, 9);

  for (let n = 1; n < 11; n += 1) {
    const an = number + (n - 1) * step;
    progression.push(an);
  }
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  const result = String(step);

  return { question, result };
}

const runner = () => startGame(progressionGame, RULE);

export default runner;
