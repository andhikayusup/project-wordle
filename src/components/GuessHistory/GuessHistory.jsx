import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED  } from '../../constants';
import GuessAttempt from '../GuessAttempt/GuessAttempt';

function GuessHistory({ guesses }) {
  console.log(guesses)
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <GuessAttempt key={index} value={guesses[index]} />
      })}
    </div>);
}

export default GuessHistory;
