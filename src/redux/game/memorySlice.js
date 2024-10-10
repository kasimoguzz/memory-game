import { createSlice } from "@reduxjs/toolkit";
import shuffleArray from "shuffle-array";

export const memorySlice = createSlice({
  name: "memory",
  initialState: {
    opened: [],
    matched: [],
    gameStatus: null,
    modalStatus: false,
    score: 200,
    lastClicked: null,
    items: [
      "#000000",
      "#908f8f",
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
      "#000000",
      "#908f8f",
      "#ff0000",
      "#00ff00",
      "#0000ff",
      "#ffff00",
      "#ff00ff",
      "#00ffff",
    ],
  },
  reducers: {
    open: (state, action) => {
      state.opened.push(action.payload);

      if (state.opened.length > 1) {
        if (state.opened[0] === state.lastClicked) {
          state.matched.push(state.lastClicked);
          state.score += 50;
        } else {
          state.score -= 10;
        }
        if (state.score <= 0) {
          state.modalStatus = true;
          state.gameStatus = "GAME OVER";
        }

        state.opened = [];
        if (state.matched.length === 8) {
          state.modalStatus = true;
          state.gameStatus = "WİN";
        }
      }
    },
    lastClick: (state, action) => {
      state.lastClicked = action.payload;
    },
    initializeGame: (state) => {
      state.opened = [];
      state.matched = [];
      state.score = 200;
      state.lastClicked = null;
      state.items = shuffleArray(state.items);
    },
    changeEndScane: (state) => {
      state.modalStatus = !state.modalStatus;
    },
  },
});

export const { open, lastClick, initializeGame, changeEndScane } =
  memorySlice.actions;

export default memorySlice.reducer;
