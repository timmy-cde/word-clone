import React from "react";

import { checkGuess } from "../../game-helpers";

let keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function KeyboardKeys({ answer, guessList }) {
  // let result = checkGuess()
  return (
    <>
      {keys.map((key, index) => (
        <div key={index} className="keyboard">
          {key.map((letter, index) => (
            <span key={index} className="key">
              {letter}
            </span>
          ))}
        </div>
      ))}
    </>
  );
}

export default KeyboardKeys;
