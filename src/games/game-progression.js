import startGame from '../index.js';
import { randomInteger } from '../cli.js';

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

  const result = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, result };
}

const runner = () => startGame(progressionGame, RULE);

export default runner;
