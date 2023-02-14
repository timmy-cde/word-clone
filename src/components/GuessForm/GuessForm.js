import React from "react";

function GuessForm({ handleSubmitGuess, gameStatus }) {
  const [currentGuess, setCurrentGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(currentGuess);
    setCurrentGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          type="text"
          id="guess-input"
          pattern="[A-Z]{5}"
          title="Must be a 5 letter word"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessForm;
