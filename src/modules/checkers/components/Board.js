import React, { useMemo, useState } from "react";

import "./Board.css";

const generateBoard = (rows, cols) => {
  const arr = [];
  let acc = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      arr.push({
        i,
        j,
        id: acc,
        background: (i + j) % 2 === 0 ? "#f2f2f2" : "#aaa"
      });

      acc++;
    }
  }

  return arr;
};

const generateVisibleMapples = (board, rowsToSkip = [3, 4]) => {
  const obj = {};

  for (let i = 0; i < board.length; i++) {
    const boardItem = board[i];

    if (!rowsToSkip.includes(boardItem.i)) {
      obj[boardItem.id] = (boardItem.i + boardItem.j) % 2 === 0;
    }
  }

  return obj;

  // return board.reduce(
  //   (acc, boardItem) =>
  //     rowsToSkip.includes(boardItem.i)
  //       ? acc
  //       : {
  //           ...acc,
  //           [boardItem.id]: (boardItem.i + boardItem.j) % 2 === 0
  //         },
  //   {}
  // );
};

const INIT_SELECTED_MAPPLE = -1;

const Board = ({ rows = 8, cols = 8 }) => {
  const board = useMemo(() => generateBoard(rows, cols), [rows, cols]);
  const [selectedMapple, setSelectedMapple] = useState(INIT_SELECTED_MAPPLE);
  const [visibleMapples, setVisibleMapples] = useState(
    generateVisibleMapples(board)
  );

  const resetSelectedMapple = () => {
    setSelectedMapple(INIT_SELECTED_MAPPLE);
  };

  const moveMapple = (id) => {
    setVisibleMapples({
      ...visibleMapples,
      [selectedMapple]: false,
      [id]: true
    });
    resetSelectedMapple();
  };

  const toggleMappleSelection = (id) => {
    setSelectedMapple(selectedMapple === id ? INIT_SELECTED_MAPPLE : id);
  };

  const handleSelectMapple = (id) => {
    const isMoving = selectedMapple > INIT_SELECTED_MAPPLE;

    if (isMoving) {
      moveMapple(id);
      return;
    }

    const isMappleInField = visibleMapples[id] === true;

    if (!isMappleInField) {
      resetSelectedMapple();
      return;
    }

    toggleMappleSelection(id);
  };

  return (
    <div
      className="board-container"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }}
    >
      {board.map((item) => (
        <div
          key={item.id}
          style={{
            background: item.background
          }}
          className={`board-cell ${
            selectedMapple === item.id ? "selected-cell" : ""
          } ${visibleMapples[item.id] ? "mapple" : ""}`}
          onClick={() => handleSelectMapple(item.id)}
        />
      ))}
      {/* {Object.keys(obj).map()} */}
    </div>
  );
};

export default Board;
