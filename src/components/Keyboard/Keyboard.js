import React from "react";

let ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getLettersStatus(validateGuesses) {
  let lettersStatus = {};

  validateGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      lettersStatus[letter] = status;
    });
  });

  return lettersStatus;
}

function Keyboard({ validateGuesses }) {
  let lettersStatus = getLettersStatus(validateGuesses);

  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((letter) => (
            <span key={letter} className={`letter ${lettersStatus[letter]}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
