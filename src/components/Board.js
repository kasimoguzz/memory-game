import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { initializeGame } from "../redux/game/memorySlice";

function Board() {
  const items = useSelector((state) => state.items);
  const score = useSelector((state) => state.score);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeGame());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center  text-white fw-bold">Memory Game</h1>
      <h5 className="text-center mt-4 text-white fw-bold">Score: {score}</h5>
      <div className="d-flex justify-content-center">
        <button
          className="menuBtn text-center my-1"
          onClick={() => dispatch(initializeGame())}
        >
          restart
        </button>
      </div>

      <div
        className="row mt-3 mx-auto"
        style={{ maxWidth: "600px", maxHeight: "0px" }}
      >
        {items.map((item, id) => (
          <div
            key={id}
            className="col-3 mb-3 text-center d-flex justify-content-around"
          >
            <Card color={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
