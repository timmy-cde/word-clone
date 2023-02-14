import React from "react";

function Banner({ status, handleReset, children }) {
  return (
    <>
      <div className={`${status} banner`}>
        {children}
        <div>
          <button className="reset-game" onClick={() => handleReset()}>
            Reset Game
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
