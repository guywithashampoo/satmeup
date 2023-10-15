import React, { useState } from "react";
import GetUserCoords from "../getUserCoords";
import satellites from "../satellites";

function SatLocation({ type }) {
  const [next, setNext] = useState(false);
  const [noradid, setNoradid] = useState(25544);
  const [seconds, setSeconds] = useState(150);

  const handleSelect = (event) => {
    setNoradid(event.target.value);
  };

  if (!next) {
    return (
      <div>
        <h1>Get satellite location</h1>
        <h2>set time in seconds(1-300)</h2>
        <button
          onClick={() =>
            seconds > 1 ? setSeconds(seconds - 1) : setSeconds(seconds)
          }
        >
          -
        </button>
        <h3>{seconds}</h3>
        <button
          onClick={() =>
            seconds < 300 ? setSeconds(seconds + 1) : setSeconds(seconds)
          }
        >
          +
        </button>

        <h2>select satellite</h2>
        <select onChange={handleSelect}>
          {satellites.map((sat, index) => (
            <option key={index} value={sat.noradid}>
              {sat.name}
            </option>
          ))}
        </select>

        <button onClick={() => setNext(!next)}>NEXT</button>
      </div>
    );
  } else {
    return (
      <div>
        <GetUserCoords noradid={noradid} seconds={seconds} type={type} />
      </div>
    );
  }
}

export default SatLocation;
