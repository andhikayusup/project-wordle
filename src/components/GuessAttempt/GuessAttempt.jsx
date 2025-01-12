import React from 'react';

import { range } from '../../utils'
import { checkGuess } from '../../game-helpers';

function GuessAttempt({ value }) {
  checkGuess()

  return <p className="guess">
    {range(5).map((index) => {
      return (
        <span key={index} className={'cell ' + ((value == undefined) ? '' : value[index].status)}>
          {(value == undefined) ? '' : value[index].letter}
        </span>
      )
    })}
  </p>;
}

export default GuessAttempt;
