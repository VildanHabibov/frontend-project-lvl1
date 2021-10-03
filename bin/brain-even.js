#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

function evenGame() {
  const getRandom = (num) => Math.floor(Math.random() * num);
  const userName = greeting();
  const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';
  const CORRECT = 'Correct!';
  const CONGRATS = `Congratulations, ${userName}!`;
  const WRONG = `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`;

  console.log(RULE);

  for (let i = 0; i < 3; i += 1) {
    const num = getRandom(100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer === answer) {
      console.log(CORRECT);
      if (i === 2) {
        console.log(CONGRATS);
      }
    } else {
      console.log(WRONG);
      break;
    }
  }
};
evenGame();
