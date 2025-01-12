import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from '../GuessForm/GuessForm';
import GuessHistory from '../GuessHistory/GuessHistory';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LoseBanner from '../LoseBanner/LoseBanner';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  function attemptAnswer(guessAttempt) {
    const guess = checkGuess(guessAttempt, answer);
    const newGuesses = [...guesses, guess]

    setGuesses(newGuesses);

    if (answer === guessAttempt) {
      setStatus('won')
      return;
    }

    if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lose')
      return;
    }
  }

  return (
    <>
      <GuessHistory guesses={guesses} />
      <GuessForm attemptAnswer={attemptAnswer} status={status} />
      {status === 'won' && <WonBanner numOfAttempts={setGuesses.length} />}
      {status === 'lose' && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
