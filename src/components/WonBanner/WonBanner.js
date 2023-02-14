import React from "react";

import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses, handleReset }) {
  return (
    <Banner status="happy" handleReset={handleReset}>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
