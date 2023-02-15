import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm";
import GuessList from "../GuessList/GuessList";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guessList, setGuessList] = React.useState([]);

  console.info({ answer });

  function handleSubmitGuess(currentGuess) {
    let nextGuess = [...guessList, currentGuess];
    setGuessList(nextGuess);
    if (currentGuess === answer) {
      setGameStatus("won");
    } else if (nextGuess.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  const validateGuesses = guessList.map((guess) => checkGuess(guess, answer));

  function handleReset() {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGameStatus("running");
    setGuessList([]);
  }

  return (
    <>
      <GuessList validateGuesses={validateGuesses} />
      <GuessForm
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guessList.length}
          setAnswer={setAnswer}
          handleReset={handleReset}
        />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleReset={handleReset} />
      )}
      <Keyboard validateGuesses={validateGuesses} />
    </>
  );
}

export default Game;
