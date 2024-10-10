import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lastClick, open } from "../redux/game/memorySlice";

function Card({ color }) {
  const opened = useSelector((state) => state.opened);
  const lastClicked = useSelector((state) => state.lastClicked);
  const matched = useSelector((state) => state.matched);
  const dispatch = useDispatch();
  const [isFlipped, setFlip] = useState(false);

  const handleClick = () => {
    dispatch(lastClick(color));

    if (!isFlipped) {
      setFlip(true);
      dispatch(open(color));
    }
  };

  useEffect(() => {
    if (opened.length === 0) {
      const delay = setTimeout(() => {
        if (!matched.includes(color)) {
          setFlip(false);
        }
      }, 500);
      return () => clearTimeout(delay);
    }
  }, [opened, lastClicked, color, matched]);
  return (
    <>
      <div
        className={`memCard ${isFlipped ? "opened" : ""}`}
        onClick={handleClick}
      >
        <div className="front">?</div>
        <div className="back" style={{ background: color }}></div>
      </div>
    </>
  );
}

export default Card;
