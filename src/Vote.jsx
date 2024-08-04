import { useState } from "react";

export default function Vote() {
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(0);
  let [countC, setCountC] = useState(0);
  let [voted, setVoted] = useState(false);

  let CountofA = () => {
    setCountA(countA + 1);
    setVoted(true);
  };

  let CountofB = () => {
    setCountB(countB + 1);
    setVoted(true);
  };

  let CountofC = () => {
    setCountC(countC + 1);
    setVoted(true);
  };

  return (
    <div>
      {voted ? (
        <>
          <h2>Thank you for voting!!!</h2>
          <h3>Live Poll Results:</h3>
          <p>Votes for A = {countA}</p>
          <p>Votes for B = {countB}</p>
          <p>Votes for C = {countC}</p>
        </>
      ) : (
        <div>
          <h2>Voting Panel</h2>
          <button onClick={CountofA}>Vote for A</button>
          <br />
          <br />

          <button onClick={CountofB}>Vote for B</button>
          <br />
          <br />

          <button onClick={CountofC}>Vote for C</button>
        </div>
      )}
    </div>
  );
}
