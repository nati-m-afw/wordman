import { useState } from 'react';

const GameInput = ({ onSubmit, disabled, ...props }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  return (
    <form
      className="flex items-end"
      onSubmit={(e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(e, currentGuess);
      }}
    >
      <label htmlFor="game-input">
        Enter some letters
        <input
          value={currentGuess}
          id="game-input"
          type="text"
          maxLength={6}
          pattern="[a-f|A-F|0-9]{6}"
          placeholder="C0FF33"
          disabled={disabled}
          onChange={(e) => setCurrentGuess(e.target.value)}
          {...props}
        />
      </label>
      <button className="whitespace-nowrap" type="submit" disabled={disabled}>
        Take a Guess
      </button>
    </form>
  );
};

export default GameInput;
