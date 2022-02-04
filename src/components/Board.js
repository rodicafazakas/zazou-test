import { useState } from "react";
import { useNavigate } from "react-router";

import "./Board.css";

const Board = () => {
  const [cookies, setCookies] = useState(3);
  const [eggs, setEggs] = useState(3);
  const [frogs, setFrogs] = useState(3);
  const [cell, setCell] = useState(0);

  let path = [1, 2, 3, 4, 5, 6];
  let navigate = useNavigate();

  const spinDice = (event) => {
    event.preventDefault();

    let dado;
    dado = Math.floor(Math.random() * 4) + 1;

    if (dado === 1 && cookies > 0) {
      setCookies(cookies - 1);
    } else if (dado === 2 && eggs > 0) {
      setEggs(eggs - 1);
    } else if (dado === 3 && frogs > 0) {
      setFrogs(frogs - 1);
    } else if (dado === 4) {
      setCell(cell + 1);
    }
  };

  if (cookies === 0 && eggs === 0 && frogs === 0) {
    navigate("/end");
  }

  return (
    <>
      <h1> Board Game </h1>
      <div className="board">
        <div className="dice">
          <button className="dado" onClick={spinDice}>
            {" "}
            DADO{" "}
          </button>
        </div>
        <div className="path">
          {path.map((position) => {
            return position === cell ? (
              <div className="cell path__cell here" key={position}>
                {" "}
                {path[position - 1]}{" "}
              </div>
            ) : (
              <div className="cell path__cell" key={position}>
                {" "}
                {path[position - 1]}{" "}
              </div>
            );
          })}
        </div>
        <div className="cupboard">
          <div className="cell cupboard__cell"> Cookies: {cookies} </div>
          <div className="cell cupboard__cell"> Frogeggs: {eggs} </div>
          <div className="cell cupboard__cell"> Eggs: {frogs} </div>
        </div>
      </div>
    </>
  );
};

export default Board;
