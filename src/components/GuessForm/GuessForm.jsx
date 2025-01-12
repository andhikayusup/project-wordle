import React from 'react';

function GuessForm({attemptAnswer, status}) {
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault();
        console.log('You guessed:', guess);

        attemptAnswer(guess)
        setGuess('');
      }}>
      <label htmlFor="guess-input">
        Enter guess:
      </label>
      <input
        required
        disabled={status !== 'running'}
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Za-z]{5}"
        maxLength='5'
        minLength='5'
        title="Please enter a 5-letter word."
        onChange={event => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>)
}

export default GuessForm;
