#!/usr/bin/env node
import startGame from '../index.js';
import { randomInteger } from '../src/cli.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

function evenGame() {
  const question = randomInteger(0, 100);
  const result = question % 2 === 0 ? 'yes' : 'no';
  return { question, result };
}

startGame(evenGame, RULE);
