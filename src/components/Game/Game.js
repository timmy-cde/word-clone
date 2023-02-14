import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessForm from "../GuessForm";
import GuessList from "../GuessList/GuessList";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";

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

  function handleReset() {
    setGuessList([]);
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGameStatus("running");
    console.info({ nextAnswer });
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
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
      <Keyboard answer={answer} guessList={guessList} />
    </>
  );
}

export default Game;
